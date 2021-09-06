import React from 'react'
import styled from 'styled-components'
import Map from '../components/Map'
import { useQuery } from 'react-query'
import { fetchThing } from '../services/apiFetch'
import { Link } from 'react-router-dom'
import { RiHeart3Fill } from 'react-icons/ri'
import removeFirstWordFromStationName from '../utils/formatStationDescription'
import getLocalTime from '../utils/getLocalTime'

export default function Favorite({ thing_id, toggleFavorit }) {
  const { isLoading, error, data } = useQuery(['fetchThing', thing_id], () =>
    fetchThing(thing_id)
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const { station_description, coordinates, availableBikes, lastUpdated } = data

  const title = removeFirstWordFromStationName(station_description)

  function handleClick() {
    toggleFavorit(thing_id)
  }

  const isBikeAvailable = availableBikes > 0

  return (
    <FavoriteWrapper isAvailable={isBikeAvailable}>
      <ButtonWrapper>
        <FavoriteButton onClick={handleClick}>
          <RiHeart3Fill />
        </FavoriteButton>
      </ButtonWrapper>
      <Map
        coordinates={coordinates}
        zoomNumber={15}
        height="110px"
        width={'auto'}
        zoomControl={false}
        hasZIndex={true}
        scrollWheelZoom={false}
        dragging={false}
      ></Map>
      <StationName>
        <Link to={`/thing/${thing_id}`}>{title}</Link>
      </StationName>
      <div>
        <Available isBikeAvailable={isBikeAvailable}>
          {availableBikes}
        </Available>
        <LastUpdated>{getLocalTime(lastUpdated)}</LastUpdated>
      </div>
    </FavoriteWrapper>
  )
}

const Available = styled.p`
  text-align: center;
  font-size: 2em;
  margin: 0;
  font-weight: 800;
  color: ${({ isBikeAvailable }) => (isBikeAvailable ? 'green' : 'red')};
`

const ButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 5;
`

const FavoriteWrapper = styled.section`
  position: relative;
  background-color: ${({ isAvailable }) =>
    isAvailable ? '#F8F8F8' : '#FFB6B3'};
  padding: 5px;
  border-radius: 15px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`

const FavoriteButton = styled.button`
  all: unset;
  z-index: 1;
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  padding: 7px;
  display: flex;
  box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02), 0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035), 0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05), 0 0px 80px rgba(0, 0, 0, 0.07);
`

const LastUpdated = styled.p`
  font-size: 0.6em;
  margin: 0;
  text-align: center;
  padding: 10px 0 0 0;
`

const StationName = styled.header`
  padding: 10px 0;
  margin: 0;
  font-size: 0.7em;
  text-align: center;
  a {
    color: black;
  }
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

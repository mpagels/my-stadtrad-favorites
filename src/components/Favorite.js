import React from 'react'
import styled from 'styled-components'
import Map from '../components/Map'
import { useQuery } from 'react-query'
import { fetchThing } from '../services/apiFetch'
import { Link } from 'react-router-dom'
import { RiHeart3Fill } from 'react-icons/ri'
import removeFirstWordFromStationName from '../utils/formatStationDescription'
import getLocalTime from '../utils/getLocalTime'

export default function Favorite({ id, toggleFavorit }) {
  const { isLoading, error, data } = useQuery(['fetchThing', id], () =>
    fetchThing(id)
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const {
    station_description,
    dataStream_id,
    coordinates,
    availableBikes,
    lastUpdated,
    thing_id,
  } = data

  const title = removeFirstWordFromStationName(station_description)

  function handleClick() {
    toggleFavorit(dataStream_id)
  }

  return (
    <FavoriteWrapper isAvailable={availableBikes > 0}>
      <ButtonWrapper>
        <FavoriteButton onClick={handleClick}>
          <RiHeart3Fill />
        </FavoriteButton>
      </ButtonWrapper>
      <Map
        coordinates={coordinates}
        zoomNumber={15}
        height="150px"
        width={'auto'}
        zoomControl={false}
        hasZIndex={true}
      ></Map>
      <StationName>
        <Link to={`/thing/${thing_id}`}>{title}</Link>
      </StationName>
      <AvailableWrapper>
        <Available>{availableBikes}</Available>
        <LastUpdated>{getLocalTime(lastUpdated)}</LastUpdated>
      </AvailableWrapper>
    </FavoriteWrapper>
  )
}

const Available = styled.p`
  text-align: center;
  font-size: 2em;
  margin: 0;
`

const AvailableWrapper = styled.div``

const ButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 5;
`

const FavoriteWrapper = styled.section`
  position: relative;
  background-color: ${({ isAvailable }) =>
    isAvailable ? '#BDE7BD' : '#FFB6B3'};
  padding: 5px;
  border-radius: 15px;
  height: 300px;
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
`

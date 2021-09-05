import React from 'react'
import Map from '../components/Map'
import { useQuery } from 'react-query'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { fetchThing } from '../services/apiFetch'
import removeFirstWordFromStationName from '../utils/formatStationDescription'
import { IoReturnDownBack } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import getLocalTime from '../utils/getLocalTime'

export default function Thing({ toggleFavorit, favorites }) {
  const { thing_id } = useParams()
  const history = useHistory()

  const { isLoading, error, data } = useQuery(['fetchThing', thing_id], () =>
    fetchThing(thing_id)
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const { station_description, coordinates, availableBikes, lastUpdated } = data

  function handleOnClick() {
    toggleFavorit(thing_id, { station_description, thing_id })
  }

  const title = removeFirstWordFromStationName(station_description)
  const isStationFav = favorites.some((fav) => fav.thing_id === thing_id)

  return (
    <Wrapper>
      <Blue />
      <Map
        coordinates={[coordinates[0], coordinates[1]]}
        zoomNumber={18}
        height="300px"
        width="90%"
        hasShadow={true}
      ></Map>
      <StationInfos>
        <Title>{title}</Title>
        <LastUpdated>
          Zuletzt geupdated: {getLocalTime(lastUpdated)}
        </LastUpdated>
        <Bikes>
          <Count>{availableBikes}</Count>
          Fahrräder
        </Bikes>
        <FavoriteButton onClick={handleOnClick} isStationFav={isStationFav}>
          {isStationFav ? 'Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
        </FavoriteButton>
      </StationInfos>
      <IconContext.Provider value={{ size: '2em' }}>
        <BackButton onClick={() => history.goBack()}>
          <IoReturnDownBack />
        </BackButton>
      </IconContext.Provider>
    </Wrapper>
  )
}

const BackButton = styled.button`
  all: unset;
  cursor: pointer;
`

const Blue = styled.div`
  position: absolute;
  top: 0;
  background-color: #003063;
  width: 100vw;
  height: 35%;
  z-index: -1;
`
const Bikes = styled.p`
  display: flex;
  align-items: center;
`

const Count = styled.span`
  font-size: 1.4em;
  font-weight: 700;
  margin: 0 5px;
`

const FavoriteButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0.8em 1.5em;
  border-radius: 15px;
  width: 80%;
  text-align: center;
  background-color: ${({ isStationFav }) =>
    isStationFav ? '#FFB6B3' : '#BDE7BD'};
`
const LastUpdated = styled.h3`
  font-size: 0.6em;
  font-weight: 700;
  margin: 0;
`
const StationInfos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; ;
`

const Title = styled.h2`
  font-size: 1.2em;
  text-align: center;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

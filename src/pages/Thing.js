import React from 'react'
import Map from '../components/Map'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { fetchThing } from '../services/apiFetch'
import removeFirstWordFromStationName from '../utils/formatStationDescription'
import getLocalTime from '../utils/getLocalTime'
import Skeleton from 'react-loading-skeleton'
import { useAvailability } from '../contenxt/SettingContext'

export default function Thing({ toggleFavorit, isFavorite }) {
  const { thing_id } = useParams()

  const { isLoading, error, data } = useQuery(['fetchThing', thing_id], () =>
    fetchThing(thing_id)
  )

  const availability = useAvailability()

  if (error) return 'An error has occurred: ' + error.message

  const { station_description, coordinates, availableBikes, lastUpdated } =
    data || {}

  function handleOnClick() {
    toggleFavorit(thing_id, { station_description, thing_id })
  }

  const title = removeFirstWordFromStationName(station_description) || ''
  const isStationFav = isFavorite(thing_id) || ''
  const { availableColor } = getAvailabilityInfos()
  return (
    <Wrapper>
      <Blue />
      {isLoading ? (
        <Wrap width={'90%'}>
          <Skeleton height="300px" />
        </Wrap>
      ) : (
        <Map
          coordinates={[coordinates[0], coordinates[1]]}
          zoomNumber={18}
          height="300px"
          width="90%"
          hasShadow={true}
        ></Map>
      )}
      <StationInfos>
        <Title>
          {isLoading ? <Skeleton height="30px" width="300px" /> : title}
        </Title>
        <LastUpdated>
          {isLoading ? (
            <Skeleton height="10px" />
          ) : (
            `Zuletzt geupdated: ${getLocalTime(lastUpdated)}`
          )}
        </LastUpdated>
        <Bikes>
          {isLoading ? (
            <Skeleton height="30px" width="150px" />
          ) : (
            <>
              <Count availableColor={availableColor}>{availableBikes}</Count>
              Fahrräder
            </>
          )}
        </Bikes>
        {isLoading ? (
          <Wrap width="90%">
            <Skeleton height="40px" />
          </Wrap>
        ) : (
          <FavoriteButton onClick={handleOnClick} isStationFav={isStationFav}>
            {isStationFav ? 'Favoriten entfernen' : 'Zu Favoriten hinzufügen'}
          </FavoriteButton>
        )}
      </StationInfos>
    </Wrapper>
  )

  // helper function

  function getAvailabilityInfos() {
    const isBikeAvailable = availableBikes > 0

    let availableColor

    if (isBikeAvailable) {
      if (availableBikes <= Number(availability)) {
        availableColor = '#eda31d'
      } else {
        availableColor = 'green'
      }
    } else {
      availableColor = 'red'
    }
    return { isBikeAvailable, availableColor }
  }
}

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
  width: 100%;
  justify-content: center;
  height: 20px;
`

const Count = styled.span`
  font-size: 1.4em;
  font-weight: 700;
  margin: 0 5px;
  color: ${({ availableColor }) => availableColor};
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
  text-align: center;
  width: 100%;
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
  width: 100%;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

const Wrap = styled.div`
  & span span {
    border-radius: 15px !important;
  }
  width: ${({ width }) => width};
  box-shadow: 0 5.9px 5.4px -84px rgba(0, 0, 0, 0.133),
    0 19.7px 18.1px -84px rgba(0, 0, 0, 0.197),
    0 88px 81px -84px rgba(0, 0, 0, 0.33);
`

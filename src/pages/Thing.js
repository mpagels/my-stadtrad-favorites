import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useQuery } from 'react-query'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { fetchThing } from '../services/apiFetch'
import removeFirstWordFromStationName from '../utils/formatStationDescription'
import { IoReturnDownBack } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import getLocalTime from '../utils/getLocalTime'

export default function Thing({ toggleFavorit, favorites }) {
  const { id } = useParams()
  const history = useHistory()

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
  } = data

  function handleOnClick() {
    toggleFavorit(dataStream_id, { ...data, id })
  }

  const title = removeFirstWordFromStationName(station_description)
  const isStationFav = favorites.some(
    (fav) => fav.dataStream_id === dataStream_id
  )

  return (
    <Wrapper>
      <Blue />

      <MyMap
        center={[coordinates[0], coordinates[1]]}
        zoom={18}
        scrollWheelZoom={true}
        height="300px"
        width="90%"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordinates[0], coordinates[1]]}>
          <Popup>Stadtrad-Station</Popup>
        </Marker>
        <ChangeMapView coords={[coordinates[0], coordinates[1]]} />
      </MyMap>
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

function ChangeMapView({ coords }) {
  const map = useMap()
  map.setView(coords, map.getZoom())

  return null
}

const MyMap = styled(MapContainer)`
  /*
    Any dynamic styling that will change the
    dynamically generated classname will remove
    the leaflet classnames from the container.
  */
  border-radius: 15px;
  height: ${(props) => props.height};
  width: ${(props) => props.width ?? '100vw'};
  box-shadow: 0 5.9px 5.4px -84px rgba(0, 0, 0, 0.133),
    0 19.7px 18.1px -84px rgba(0, 0, 0, 0.197),
    0 88px 81px -84px rgba(0, 0, 0, 0.33);
`

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

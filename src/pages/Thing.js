import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useQuery } from 'react-query'
import { useLocation, useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { fetchThing } from '../services/apiFetch'

export default function Thing({ toggleFavorit, favorites }) {
  const { id } = useParams()
  const location = useLocation()
  const history = useHistory()

  const { isLoading, error, data } = useQuery('fetchThing', () =>
    fetchThing(id)
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  console.log(data)
  console.log(location)
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
  return (
    <div>
      <h2>{station_description}</h2>

      <MyMap
        center={[coordinates[0], coordinates[1]]}
        zoom={18}
        scrollWheelZoom={true}
        height="300px"
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
      <section>
        <p>Verfügbare Fahrräder: {availableBikes}</p>
        <p>Zuletzt geupdated: {lastUpdated}</p>
      </section>
      <button onClick={handleOnClick}>
        {favorites.some((fav) => fav.dataStream_id === dataStream_id)
          ? 'Station von Favoriten entfernen'
          : 'Station zu Favoriten hinzufügen'}
      </button>
      <button onClick={() => history.goBack()}>Zurück</button>
    </div>
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
  height: ${(props) => props.height};
  width: 100vw;
`

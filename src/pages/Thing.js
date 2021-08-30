import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useQuery } from 'react-query'
import { useLocation, useParams, useHistory } from 'react-router-dom'
import { fetchThing } from '../services/apiFetch'

export default function Thing() {
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
  const { station_description, dataStream_id, coordinates } = data
  return (
    <div>
      <h2>{station_description}</h2>

      <MapContainer
        center={[coordinates[0], coordinates[1]]}
        zoom={18}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordinates[0], coordinates[1]]}>
          <Popup>Stadtrad-Station</Popup>
        </Marker>
        <ChangeMapView coords={[coordinates[0], coordinates[1]]} />
      </MapContainer>
      <button onClick={() => history.goBack()}>Zurück</button>
    </div>
  )
}

function ChangeMapView({ coords }) {
  const map = useMap()
  map.setView(coords, map.getZoom())

  return null
}

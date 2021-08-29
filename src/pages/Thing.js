import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useQuery } from 'react-query'
import { useLocation, useParams } from 'react-router-dom'
import { fetchThing } from '../services/apiFetch'

export default function Thing() {
  const { id } = useParams()
  const location = useLocation()
  const { isLoading, error, data } = useQuery('fetchThing', () =>
    fetchThing(id)
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  console.log(data)
  console.log(location)
  const cordinates = data.value[0].observedArea.coordinates[1]
  return (
    <div>
      <h2>{location.state.stationName}</h2>

      <MapContainer
        center={[cordinates[1], cordinates[0]]}
        zoom={18}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[cordinates[1], cordinates[0]]}>
          <Popup>Stadtrad-Station</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

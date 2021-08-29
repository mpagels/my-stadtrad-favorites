import React from 'react'
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
  return (
    <div>
      <h2>{location.state.stationName}</h2>
    </div>
  )
}

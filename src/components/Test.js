import React, { useState } from 'react'
import { useQuery } from 'react-query'
import fetchLocations from '../services/apiFetch'

export default function Test() {
  const { isLoading, error, data } = useQuery('locations', fetchLocations)
  const [searchInput, setSearchInput] = useState('')
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <input value={searchInput} onChange={handleOnChange} />
      {data
        .map((test) => test.value)
        .flat()
        .filter((location) => location.description.includes(searchInput))
        .map((location) => (
          <p key={location.description}>{location.Locations[0].name}</p>
        ))}
    </div>
  )

  function handleOnChange(event) {
    setSearchInput(event.target.value)
  }
}

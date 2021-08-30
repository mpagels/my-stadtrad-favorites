import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import fetchLocations from '../services/apiFetch'

export default function Test() {
  const { isLoading, error, data } = useQuery('locations', fetchLocations)
  const [searchInput, setSearchInput] = useState('')
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)
  return (
    <div>
      <input value={searchInput} onChange={handleOnChange} />
      {data
        .filter((location) =>
          location.station_description.includes(searchInput)
        )
        .map((location) => (
          <section key={location.station_description}>
            <p>{location.station_description}</p>
            <p>iot.id: {location.thing_id}</p>
            <Link
              to={{
                pathname: `/thing/${location['@iot.id']}`,
                state: { stationName: location.description },
              }}
            >
              About
            </Link>
          </section>
        ))}
    </div>
  )

  function handleOnChange(event) {
    setSearchInput(event.target.value)
  }
}

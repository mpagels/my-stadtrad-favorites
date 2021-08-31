import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import fetchLocations from '../services/apiFetch'

export default function Test() {
  const { isLoading, error, data } = useQuery('locations', fetchLocations)
  const [searchInput, setSearchInput] = useState('')
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Wrapper>
      <input value={searchInput} onChange={handleOnChange} />
      {data
        .filter((location) =>
          location.station_description.includes(searchInput)
        )
        .map((location) => {
          const { station_description, thing_id } = location
          return (
            <section key={station_description}>
              <Link
                to={{
                  pathname: `/thing/${thing_id}`,
                }}
              >
                {station_description}
              </Link>
            </section>
          )
        })}
    </Wrapper>
  )

  function handleOnChange(event) {
    setSearchInput(event.target.value)
  }
}

const Wrapper = styled.div`
  overflow-y: scroll;
`

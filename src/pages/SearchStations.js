import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../components/Input'
import fetchLocations from '../services/apiFetch'

export default function SearchStations() {
  const { isLoading, error, data } = useQuery('locations', fetchLocations)
  const [searchInput, setSearchInput] = useState('')
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Wrapper>
      <Input value={searchInput} handleOnChange={handleOnChange} />
      <ResultList>
        {data
          .filter((location) =>
            location.station_description
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          )
          .map((location) => {
            const { station_description, thing_id } = location
            return (
              <Result key={station_description}>
                <Link
                  to={{
                    pathname: `/thing/${thing_id}`,
                  }}
                >
                  {station_description}
                </Link>
              </Result>
            )
          })}
      </ResultList>
    </Wrapper>
  )

  function handleOnChange(event) {
    setSearchInput(event.target.value)
  }
}

const ResultList = styled.ul`
  list-style: none;
  padding: 0;
`

const Result = styled.li`
  padding: 20px;
  border-radius: 15px;
  margin: 15px;
  font-size: 0.8em;
  text-align: center;
  box-shadow: 0 0px 3.4px rgba(0, 0, 0, 0.014), 0 0px 9.4px rgba(0, 0, 0, 0.02),
    0 0px 22.6px rgba(0, 0, 0, 0.026), 0 0px 75px rgba(0, 0, 0, 0.04);
`

const Wrapper = styled.div`
  overflow-y: scroll;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

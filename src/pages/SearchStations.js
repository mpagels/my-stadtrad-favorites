import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import Input from '../components/Input'
import Result from '../components/Result/Result'
import useInput from '../hooks/useInput'
import fetchLocations from '../services/apiFetch'

export default function SearchStations({ isFavorite, toggleFavorit }) {
  const { searchInput, handleOnChange } = useInput()
  const { isLoading, error, data: locations } = useQuery(
    'locations',
    fetchLocations
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Wrapper>
      <Input value={searchInput} handleOnChange={handleOnChange} />
      <ResultList>
        {locations.filter(isLocationInSearchInput).map(renderFilteredLocations)}
      </ResultList>
    </Wrapper>
  )

  // helper function

  function isLocationInSearchInput(location) {
    return location.station_description
      .toLowerCase()
      .includes(searchInput.toLowerCase())
  }

  function renderFilteredLocations(location) {
    const { station_description, thing_id } = location
    return (
      <Result
        key={station_description}
        station_description={station_description}
        isFav={isFavorite(thing_id)}
        thing_id={thing_id}
        toggleFavorit={toggleFavorit}
      />
    )
  }
}

const ResultList = styled.ul`
  list-style: none;
  padding: 0;
`

const Wrapper = styled.div`
  overflow-y: scroll;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

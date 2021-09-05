import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import Input from '../components/Input/Input'
import Result from '../components/Result/Result'
import useInput from '../hooks/useInput'
import fetchLocations from '../services/apiFetch'

export default function SearchStations({ isFavorite, toggleFavorit }) {
  const { searchInput, updateInput } = useInput()
  const { isLoading, error, data: locations } = useQuery(
    'locations',
    fetchLocations
  )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Wrapper>
      <Input inputValue={searchInput} updateInput={updateInput} />
      <ResultWrapper>
        {isLoading ? (
          'loading'
        ) : (
          <ResultList>
            {locations
              .filter(isLocationInSearchInput)
              .map(renderFilteredLocations)}
          </ResultList>
        )}
      </ResultWrapper>
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

const ResultWrapper = styled.div`
  overflow-y: scroll;
  padding: 0 10px;
`

const ResultList = styled.ul`
  list-style: none;
  padding: 0;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 100%;
  height: 100%;
  overflow-y: hidden;
  gap: 20px;
`

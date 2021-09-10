import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
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
        <ResultList>
          {isLoading
            ? renderSkeletonResultList()
            : locations
                .filter(isLocationInSearchInput)
                .map(renderFilteredLocations)}
        </ResultList>
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

  function renderSkeletonResultList() {
    return ['', '', '', '', '', ''].map((_, index) => (
      <Wrap key={index}>
        <Skeleton height="170px" />
      </Wrap>
    ))
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
  background-color: #003063;
`

const Wrap = styled.li`
  margin: 20px 0;
  & span span {
    border-radius: 15px !important;
  }
  box-shadow: 0 0.3px 1.7px rgba(0, 0, 0, 0.04),
    0 0.9px 5.6px rgba(0, 0, 0, 0.06), 0 4px 25px rgba(0, 0, 0, 0.1);
`

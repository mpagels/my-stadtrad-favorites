import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import removeFirstWordFromStationName from '../../utils/formatStationDescription'

export default function Result({ isFav, station_description, thing_id }) {
  const stationName = removeFirstWordFromStationName(station_description)
  return (
    <ResultWrapper>
      <Content>
        <Title>StadtRad-Station</Title>
        <StationName>{stationName}</StationName>
        <Link
          to={{
            pathname: `/thing/${thing_id}`,
          }}
        >
          <Button>Zur Station</Button>
        </Link>
      </Content>
      <PlusSign isFav={isFav}>{isFav ? '✔' : '+'}</PlusSign>
    </ResultWrapper>
  )
}

const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #5cabff; /*#0059b8; /* #004fa3; */
  color: white;
  padding: 0.7em 1.5em;
  border-radius: 20px;
  font-weight: 500;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ResultWrapper = styled.li`
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  color: #003063;
  padding: 2.2em 1.8em;
  margin: 0;
  border-radius: 15px;
  font-size: 0.8em;
  text-align: center;
  box-shadow: 0 0.3px 1.7px rgba(0, 0, 0, 0.04),
    0 0.9px 5.6px rgba(0, 0, 0, 0.06), 0 4px 25px rgba(0, 0, 0, 0.1);
`

const PlusSign = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  ${({ isFav }) => isFav && 'background-color : #1F6637;'}
  ${({ isFav }) => isFav && 'color : white;'}
  justify-self: end;
  justify-content: center;
  align-items: center;
  font-size: ${({ isFav }) => (isFav ? '2em' : '4em')};
  border-radius: 50%;
  width: 55px;
  height: 55px;
  border: 5px solid ${({ isFav }) => (isFav ? '#1F6637' : '#003063')};
`

const Title = styled.h2`
  display: block;
  font-size: 1em;
  font-weight: 400;
  margin: 0 0 0.6em 0;
  text-align: start;
`

const StationName = styled.h3`
  text-align: start;
  font-size: 1.3em;
  margin: 0 0 0.6em 0; ;
`

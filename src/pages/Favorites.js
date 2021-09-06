import React from 'react'
import styled from 'styled-components'
import AddFavorite from '../components/AddFavorite'
import Favorite from '../components/Favorite'

export default function Favorites({ favorites, toggleFavorit, isFavorite }) {
  return (
    <Wrapper isNoFav={favorites.length === 0}>
      {favorites.length > 0 ? (
        favorites.map((fav) => (
          <Favorite
            key={fav.station_description}
            thing_id={fav.thing_id}
            toggleFavorit={toggleFavorit}
          />
        ))
      ) : (
        <AddFavorite />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-auto-rows: minmax(min-content, max-content);
  grid-template-columns: ${({ isNoFav }) =>
    isNoFav ? '1fr' : 'repeat(auto-fill, 165px)'};
  overflow-y: scroll;
  padding: 10px;
  padding-bottom: 90px;
  margin: 0 auto;
  width: 100vw;
  justify-content: center;
  background-color: #003063;
`

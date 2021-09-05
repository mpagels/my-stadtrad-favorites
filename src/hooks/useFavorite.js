import { useState, useEffect } from 'react'

export default function useFavorite() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  function toggleFavorit(thing_id, newFavorite) {
    if (isFavorite(thing_id)) {
      removeFavorite(thing_id)
    } else {
      addFavorite(newFavorite)
    }
  }

  return { favorites, toggleFavorit, isFavorite }

  // helper functions

  function isFavorite(thing_id) {
    return favorites.some(
      (favorite) => Number(favorite.thing_id) === Number(thing_id)
    )
  }

  function removeFavorite(thing_id) {
    setFavorites(favorites.filter((favorite) => favorite.thing_id !== thing_id))
  }

  function addFavorite(newFavorite) {
    setFavorites([...favorites, newFavorite])
  }
}

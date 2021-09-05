import { useState, useEffect } from 'react'

export default function useFavorite() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  function toggleFavorit(id, newFavorite) {
    if (isFavorite(id)) {
      removeFavorite(id)
    } else {
      addFavorite(newFavorite)
    }
  }

  return { favorites, toggleFavorit, isFavorite }

  // helper functions

  function isFavorite(id) {
    return favorites.some((favorite) => favorite.thing_id === id)
  }

  function removeFavorite(id) {
    setFavorites(favorites.filter((favorite) => favorite.thing_id !== id))
  }

  function addFavorite(newFavorite) {
    setFavorites([...favorites, newFavorite])
  }
}

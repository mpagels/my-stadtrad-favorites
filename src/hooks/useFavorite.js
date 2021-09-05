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

  return { favorites, toggleFavorit }

  // helper functions

  function isFavorite(id) {
    return favorites.filter((favorite) => favorite.thing_id === id).length > 0
  }

  function removeFavorite(id) {
    setFavorites(favorites.filter((favorite) => favorite.thing_id !== id))
  }

  function addFavorite(newFavorite) {
    setFavorites([...favorites, newFavorite])
  }
}

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
    if (
      favorites.filter((favorite) => favorite.dataStream_id === id).length > 0
    ) {
      setFavorites(
        favorites.filter((favorite) => favorite.dataStream_id !== id)
      )
    } else {
      setFavorites([...favorites, newFavorite])
    }
  }

  return { favorites, toggleFavorit }
}

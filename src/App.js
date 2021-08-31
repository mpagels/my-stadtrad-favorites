import { Route, Switch } from 'react-router-dom'
// import styled from 'styled-components'
import FooterNavBar from './components/FooterNavBar'
import Header from './components/Header'
// eslint-disable-next-line no-unused-vars
import Stadtrad from './components/Stadtrad'
import SearchStations from './pages/SearchStations'
import Thing from './pages/Thing'
import Favorites from './pages/Favorites'
import { useState } from 'react'
function App() {
  const [favorites, setFavorites] = useState([])

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

  return (
    <>
      <Header />
      <Switch>
        <Route path="/thing/:id">
          <Thing toggleFavorit={toggleFavorit} favorites={favorites} />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <SearchStations />
        </Route>
      </Switch>

      <FooterNavBar />
    </>
  )
}

export default App

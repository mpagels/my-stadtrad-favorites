import { Route, Switch } from 'react-router-dom'
import FooterNavBar from './components/FooterNavBar'
import Header from './components/Header'
// eslint-disable-next-line no-unused-vars
import SearchStations from './pages/SearchStations'
import Thing from './pages/Thing'
import Favorites from './pages/Favorites'
import useFavorite from './hooks/useFavorite'

function App() {
  const { favorites, toggleFavorit } = useFavorite()

  return (
    <>
      <Header />
      <Switch>
        <Route path="/thing/:id">
          <Thing toggleFavorit={toggleFavorit} favorites={favorites} />
        </Route>
        <Route path="/search">
          <SearchStations />
        </Route>
        <Route path="/">
          <Favorites favorites={favorites} toggleFavorit={toggleFavorit} />
        </Route>
      </Switch>
      <FooterNavBar />
    </>
  )
}

export default App

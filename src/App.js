import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import FooterNavBar from './components/FooterNavBar'
import Header from './components/Header'
// eslint-disable-next-line no-unused-vars
import Stadtrad from './components/Stadtrad'
import SearchStations from './pages/SearchStations'
import Thing from './pages/Thing'
import Favorites from './pages/Favorites'
function App() {
  return (
    <>
      <Header />
      {/* <Stadtrad /> */}

      <Switch>
        <Route path="/thing/:id">
          <Thing />
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

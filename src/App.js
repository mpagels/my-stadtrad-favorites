import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import FooterNavBar from './components/FooterNavBar'
import Header from './components/Header'
// eslint-disable-next-line no-unused-vars
import Stadtrad from './components/Stadtrad'
import SearchStations from './pages/SearchStations'
import Thing from './pages/Thing'

function App() {
  return (
    <>
      <Header />
      {/* <Stadtrad /> */}
      <Main>
        <Switch>
          <Route path="/thing/:id">
            <Thing />
          </Route>
          <Route path="/">
            <SearchStations />
          </Route>
        </Switch>
      </Main>
      <FooterNavBar />
    </>
  )
}

export default App

const Main = styled.main`
  overflow-y: scroll;
`

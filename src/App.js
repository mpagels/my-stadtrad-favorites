import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import FooterNavBar from './components/FooterNavBar'
import Header from './components/Header'
// eslint-disable-next-line no-unused-vars
import Stadtrad from './components/Stadtrad'
import Test from './components/Test'
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
            <Test />
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

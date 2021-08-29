import { Route, Switch } from 'react-router-dom'
import FooterNavBar from './components/FooterNavBar'
import Header from './components/Header'
import Stadtrad from './components/Stadtrad'
import Test from './components/Test'
import Thing from './pages/Thing'

function App() {
  return (
    <>
      <Header />
      {/* <Stadtrad /> */}

      <Switch>
        <Route path="/thing/:id">
          <Thing />
        </Route>
        <Route path="/">
          <Test />
        </Route>
      </Switch>
      <FooterNavBar />
    </>
  )
}

export default App

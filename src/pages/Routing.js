import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './templates/Navigation'
import Home from './Home'
import Footer from './templates/Footer'

import CharacterList from '../components/character/CharacterList'
import CharacterDetail from '../components/character/CharacterDetail'

const Routing = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <section className='py-5 container mt-5'>
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/characters' exact component={CharacterList} />

          <Route path='/characters/:id' exact component={CharacterDetail} />
        </Switch>
      </section>
      <Footer />
    </BrowserRouter>
  )
}

export default Routing

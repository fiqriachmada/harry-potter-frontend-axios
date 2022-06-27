import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import CharacterDetail from './CharacterDetail'
import CharacterForm from './CharacterForm'
import CharacterList from './CharacterList'

const CharacterRouting = ({ match }) => {
  let { path, url } = useRouteMatch

  console.log(path)

  return (
    <Switch>
      <Route exact path={path} component={CharacterList}></Route>

      <Route exact path={`${path}/:id`} component={CharacterDetail}></Route>

      <Route exact path={`${path}/edit/:id`} component={CharacterForm}></Route>
      
      <Route exact path={`${path}/add`} component={CharacterForm}></Route>
    </Switch>
  )
}

export default CharacterRouting

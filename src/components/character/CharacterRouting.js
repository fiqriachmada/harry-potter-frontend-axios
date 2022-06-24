import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import CharacterDetail from './CharacterDetail'
import CharacterList from './CharacterList'

const Books = ({ match }) => {
  let { path, url } = useRouteMatch

  console.log(path)

  return (
    <Switch>
      <Route exact path={path} component={CharacterList}></Route>
      {/* <Route exact path={`${path}/add`} component={BookForm}></Route> */}
      <Route exact path={`${path}/:id`} component={CharacterDetail}></Route>
    </Switch>
  )
}

export default Books

import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import BookList from "./BookList";
import BookForm from "./BookForm";
import BookDetail from "./BookDetail";

const Books = ({ match }) => {
  let { path, url } = useRouteMatch;

  console.log(path);

  return (
    <Switch>
      <Route exact path={path} component={BookList}></Route>
      <Route exact path={`${path}/add`} component={BookForm}></Route>
      <Route exact path={`${path}/:id`} component={BookDetail}></Route>
    </Switch>
  );
};

export default Books;

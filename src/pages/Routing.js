import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './templates/Navigation';
import Home from './Home';
import Footer from './templates/Footer';

import CharacterList from '../components/character/CharacterList';
import CharacterDetail from '../components/character/CharacterDetail';
import CharacterEdit from '../components/character/CharacterEdit';
import ProtectedRoute from './ProtectedRoute';
import CharacterAdd from '../components/character/CharacterAdd';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import LoginUser from '../components/user/LoginUser';
import RegisterUser from '../components/user/RegisterUser';

const Routing = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <BrowserRouter>
      <Navigation
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <section className="py-5 container mt-5">
        <Switch>
          <Route path="/login">
            {isAuthenticated ? (
              <Redirect to="/" />
            ) : (
              <LoginUser setIsAuthenticated={setIsAuthenticated} />
            )}
          </Route>

          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={RegisterUser} />
          <ProtectedRoute
            path="/characters/add"
            exact
            component={CharacterAdd}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            path="/characters"
            exact
            component={CharacterList}
            isAuthenticated={isAuthenticated}
          />
          <ProtectedRoute
            path="/characters/edit/:id"
            exact
            component={CharacterEdit}
            isAuthenticated={isAuthenticated}
          />
          <Route path="/characters/:id" exact component={CharacterDetail} />
        </Switch>
      </section>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;

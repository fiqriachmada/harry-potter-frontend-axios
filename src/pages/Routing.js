import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Footer from './templates/Footer';

import CharacterList from '../components/character/CharacterList';
import CharacterDetail from '../components/character/CharacterDetail';
import CharacterEdit from '../components/character/CharacterEdit';
import ProtectedRoute from './ProtectedRoute';
import CharacterAdd from '../components/character/CharacterAdd';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import LoginUser from '../components/user/UserLogin';
import RegisterUser from '../components/user/UserRegister';
import Navigation from './templates/Navigation.jsx';
import ProfileUser from '../components/user/UserProfile';
import UserEdit from '../components/user/UserEdit';

const Routing = ({
  isAuthenticated,
  setIsAuthenticated,
  userProfile,
  setUserProfile,
}) => {
  return (
    <BrowserRouter>
      <Navigation
        userProfile={userProfile}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <section className="py-5 container mt-5">
        <Switch>
          <Route path="/login">
            {isAuthenticated ? (
              <Redirect to="/" />
            ) : (
              <LoginUser
                setIsAuthenticated={setIsAuthenticated}
                setUserProfile={setUserProfile}
              />
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
          <ProtectedRoute
            path="/characters/:id"
            exact
            component={CharacterDetail}
            isAuthenticated={isAuthenticated}
          />
          ;
          <Route
            path={'/profile/edit'}
            isAuthenticated={isAuthenticated}
            render={() =>
              isAuthenticated ? (
                <UserEdit userProfile={userProfile} />
              ) : (
                <LoginUser
                  setIsAuthenticated={setIsAuthenticated}
                  setUserProfile={setUserProfile}
                />
              )
            }
          />
          <Route
            path={'/profile'}
            isAuthenticated={isAuthenticated}
            render={() =>
              isAuthenticated ? (
                <ProfileUser userProfile={userProfile} />
              ) : (
                <LoginUser
                  setIsAuthenticated={setIsAuthenticated}
                  setUserProfile={setUserProfile}
                />
              )
            }
          />
        </Switch>
      </section>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;

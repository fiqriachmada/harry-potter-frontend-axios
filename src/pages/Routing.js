import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./templates/Navigation";
import Home from "./Home";
import Footer from "./templates/Footer";

import CharacterList from "../components/character/CharacterList";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <section className="py-5 container mt-5">
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/characters" exact component={CharacterList} />

          {/* <Route path="/books/:id" exact component={BookDetail} /> */}
        </Switch>
      </section>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;

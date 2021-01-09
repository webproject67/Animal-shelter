import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Welcome from "../welcome/welcome.jsx";
import Pets from "../pets/pets.jsx";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Welcome/>
      </Route>
      <Route exact path="/pets">
        <Pets/>
      </Route>
    </Switch>
  </BrowserRouter>
);

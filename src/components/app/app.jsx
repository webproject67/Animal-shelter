import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Footer from "../footer/footer.jsx";
import Welcome from "../welcome/welcome.jsx";
import Pets from "../pets/pets.jsx";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Footer>
          <Welcome/>
        </Footer>
      </Route>
      <Route exact path="/pets">
        <Footer>
          <Pets/>
        </Footer>
      </Route>
    </Switch>
  </BrowserRouter>
);

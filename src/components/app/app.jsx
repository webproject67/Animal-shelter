import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Footer from "../footer/footer.jsx";
import Welcome from "../welcome/welcome.jsx";
import Pets from "../pets/pets.jsx";
import PropTypes from "prop-types";

const App = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Footer>
          <Welcome base={props.base}/>
        </Footer>
      </Route>
      <Route exact path="/pets">
        <Footer>
          <Pets base={props.base}/>
        </Footer>
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  base: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

export default App;
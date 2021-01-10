import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Footer from "../footer/footer.jsx";
import Welcome from "../welcome/welcome.jsx";
import Pets from "../pets/pets.jsx";
import PropTypes from "prop-types";

const App = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact 
        path="/"
        render={({history}) => (
          <Footer>
            <Welcome 
              base={props.base}
              onButtonClick={() => history.push('/pets')}
            />
          </Footer>
        )}
      />
      <Route exact 
        path="/pets"
        render={({history}) => (
          <Footer>
            <Pets 
              base={props.base}
              onButtonClick={() => history.push('/')}
            />
          </Footer>
        )}
      />
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
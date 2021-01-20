import * as React from "react";
import {Switch, Route, HashRouter} from "react-router-dom";
import Footer from "../footer/footer";
import Welcome from "../welcome/welcome";
import Pets from "../pets/pets";

interface Props {
  base: Answer[];
}

interface Answer {
  name: string;
  src: string;
}

const App: React.FunctionComponent<Props> = (props: Props) => (
  <HashRouter hashType={'noslash'}>
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
  </HashRouter>
);

export default App;
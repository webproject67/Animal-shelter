import * as React from "react";
import * as renderer from "react-test-renderer";
import Welcome from "./welcome";

const base = [
  {name: 'Katrine',
  src: `1`}
];

it(`Render Welcome`, () => {
  const root = renderer.create(<Welcome 
    base={base}
    onButtonClick={() => {}}
  />).toJSON();

  expect(root).toMatchSnapshot();
});
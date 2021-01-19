import * as React from "react";
import * as renderer from "react-test-renderer";
import Pets from "./pets";

const base = [
  {name: 'Katrine',
  src: `1`}
];

it(`Render Pets`, () => {
  const root = renderer.create(<Pets 
    base={base}
    onButtonClick={() => {}}
  />).toJSON();

  expect(root).toMatchSnapshot();
});
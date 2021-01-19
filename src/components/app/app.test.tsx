import * as React from "react";
import * as renderer from "react-test-renderer";
import App from "./app";

const base = [
  {name: 'Katrine',
  src: `1`}
];

it(`Render App`, () => {
  const root = renderer.create(<App base={base}/>).toJSON();

  expect(root).toMatchSnapshot();
});
import * as React from "react";
import * as renderer from "react-test-renderer";
import Modal from "./modal";

const base = {
  name: 'Katrine',
  src: `1`
};

it(`Render Modal`, () => {
  const root = renderer.create(<Modal 
    base={base}
    onButtonClick={() => {}}
  />).toJSON();

  expect(root).toMatchSnapshot();
});
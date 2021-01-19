import * as React from "react";
import * as renderer from "react-test-renderer";
import Map from "./map";

it(`Render Map`, () => {
  const root = renderer.create(<Map 
    src={`1`}
    onButtonClick={() => {}}
  />).toJSON();
 
  expect(root).toMatchSnapshot();
});
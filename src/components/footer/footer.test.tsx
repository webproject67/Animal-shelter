import * as React from "react";
import * as renderer from "react-test-renderer";
import Footer from "./footer";

it(`Render Footer`, () => {
  const children = <div className="children-component" />;

  const root = renderer.create(<Footer>
    {children}
  </Footer>).toJSON();

  expect(root).toMatchSnapshot();
});
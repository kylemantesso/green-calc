import React from "react";

import renderer from "react-test-renderer";
import { Column } from "./Column";

test("renders correctly", () => {
  const tree = renderer.create(<Column />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";

import renderer from "react-test-renderer";
import { Display } from "./Display";

test("renders correctly", () => {
  const digits = "123";
  const tree = renderer.create(<Display digits={digits}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

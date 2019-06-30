import React from "react";

import renderer from "react-test-renderer";
import { ButtonLayout } from "./ButtonLayout";

test("renders correctly", () => {
  const handler = jest.fn();
  const tree = renderer.create(<ButtonLayout handler={handler} />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";

import renderer from "react-test-renderer";
import {AppContextProvider} from "./AppContext";

// Add more tests here, especially handler function
describe('AppContext', () => {
  it("has default state", () => {
    const view = renderer.create(<AppContextProvider /> as any).root;
    expect(view.instance.state.integers).toEqual([]);
    expect(view.instance.state.operators).toEqual([]);
    expect(view.instance.state.handler).toBeDefined();
  });
});


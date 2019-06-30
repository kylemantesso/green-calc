/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import { Calculator } from "./components/Calculator/Calculator";
import {
  AppContextProvider,
} from "./AppContext";

export default class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <Calculator />
      </AppContextProvider>
    );
  }
}

import * as React from "react";
import { calc } from "./services/calculator";
import {
  ButtonLabelType,
  DIGITS,
  OPERATORS
} from "./components/Buttton/Button";

export interface IAppContext {
  handler: (label: ButtonLabelType) => void;
  integers: string[];
  operators: string[];
  displayDigits?: string;
  lastButton?: ButtonLabelType;
}

export const AppContext = React.createContext({});

export class AppContextProvider extends React.Component<{}, IAppContext> {
  constructor(props: {}, state: IAppContext) {
    super(props, state);
    this.state = {
      integers: [],
      operators: [],
      handler: this.handler
    };
  }

  clear = () => {
    this.setState({
      integers: [],
      operators: [],
      lastButton: undefined,
      displayDigits: undefined
    });
  };

  // This is a big, ugly function. Given more time would break it up further to better unit test
  handler = (label: ButtonLabelType) => {
    if (DIGITS.includes(label)) {
      let displayDigits = this.state.displayDigits || "";

      // If last action was operator, clear digits
      if (this.state.lastButton && OPERATORS.includes(this.state.lastButton)) {
        displayDigits =  "";
      }

      displayDigits += label;
      this.setState({
        displayDigits
      });
    } else if (OPERATORS.includes(label)) {
      if (label === "C") {
        this.clear();
        return;
      }

      this.setState({ lastButton: label });

      const integers = [
        ...this.state.integers,
        this.state.displayDigits || "0"
      ];

      const operators = [...this.state.operators, label];
      this.setState({
        operators,
        integers
      });

      if (label === "=") {
        this.clear();
        const result = calc(integers, operators);
        this.setState({ displayDigits: result   });
        console.log(result);
      }
    }
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppContextConsumer = (props: any) => (
  <AppContext.Consumer>{props.children}</AppContext.Consumer>
);

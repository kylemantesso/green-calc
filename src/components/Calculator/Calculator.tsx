import * as React from "react";
import { ButtonLayout } from "../ButtonLayout/ButtonLayout";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { AppContext, AppContextConsumer, IAppContext } from "../../AppContext";
import { Column } from "../Column/Column";
import { useContext } from "react";
import { Display } from "../Display/Display";
import {Colours} from "../../style/Colours";

const CalculatorLayout = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  background: ${Colours.GREEN};
`;

export const Calculator = () => {
  const context = useContext(AppContext) as IAppContext;

  return (
    <CalculatorLayout>
        <Display digits={ context.displayDigits || "0"} />
        <ButtonLayout lastButton={context.lastButton} handler={context.handler} />
    </CalculatorLayout>
  );
};

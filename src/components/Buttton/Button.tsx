import * as React from "react";

import styled from "styled-components/native";
import {Colours} from "../../style/Colours";

export const DIGITS = ["0","1","2","3","4","5"];
export const OPERATORS = ["=","+","-","/","X","C"];

export type ButtonLabelType = typeof DIGITS[number] | typeof OPERATORS[number] ;

const ButtonElement = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
  flex: 1;
  border: 5px ${Colours.DARK_GREEN} solid;
  border-radius: 10px;
  margin: 4px;
  background: ${({selected}: {selected?: boolean}) => selected ? Colours.GREEN_HIGHLIGHT : Colours.WHITE };
`;

const ButtonLabel = styled.Text`
  font-size: 38px;
  color: ${Colours.GREY};
`;

interface Props {
  label: ButtonLabelType;
  handler: (buttonLabel: ButtonLabelType) => void;
  selected?: boolean;
}

export const Button = ({ handler, label, selected }: Props) => (
  <ButtonElement selected={selected} onPress={() => handler(label)}>
    <ButtonLabel>{label}</ButtonLabel>
  </ButtonElement>
);


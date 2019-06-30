import styled from "styled-components/native";
import React from "react";
import {Colours} from "../../style/Colours";

const DisplayText = styled.Text`
  font-size: 58px;
  padding: 16px;
`;

const DisplayContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Colours.LIGHT_GREEN};
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Display = ({ digits }: { digits: string }) => (
  <DisplayContainer>
    <DisplayText>{digits}</DisplayText>
  </DisplayContainer>
);

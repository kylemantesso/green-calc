import * as React from "react";
import styled from "styled-components/native";
import { Button, ButtonLabelType, OPERATORS } from "../Buttton/Button";
import { Column } from "../Column/Column";

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

interface Props {
  handler: (label: ButtonLabelType) => void;
  lastButton?: ButtonLabelType;
}

const ButtonRow = ({
  handler,
  lastButton,
  labels
}: Props & { labels: ButtonLabelType[] }) => (
  <Row>
    {labels.map((label, ix) => (
      <Button
        key={`${label}-${ix}`}
        handler={handler}
        label={label}
        selected={lastButton !== "=" && lastButton === label && OPERATORS.includes(label)}
      />
    ))}
  </Row>
);

export const ButtonLayout = ({ handler, lastButton }: Props) => {
  return (
    <Column>
      <ButtonRow
        handler={handler}
        lastButton={lastButton}
        labels={["C", "+", "-", "X"]}
      />
      <ButtonRow
        handler={handler}
        lastButton={lastButton}
        labels={["0", "1", "2", "/"]}
      />
      <ButtonRow
        handler={handler}
        lastButton={lastButton}
        labels={["3", "4", "5", "="]}
      />
    </Column>
  );
};

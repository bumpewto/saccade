import React from "react";
import styled from "styled-components";

import { theme } from "../globals";

const marginCases = margin => {
  switch (margin) {
    case "S":
      return theme.spacing.S;
    case "M":
      return theme.spacing.M;
    case "L":
      return theme.spacing.L;
    default:
      return 0;
  }
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => marginCases(props.height)}px ${props => marginCases(props.width)}px;
`;

export const Box = props => (
  <Div width={props.width} height={props.height}>
    {props.children}
  </Div>
);

import React from "react";
import styled from "styled-components";

import { TextInput } from "./";
import { theme } from "../globals";

const StyledFormField = styled.label`
  display: block;
  margin-bottom: ${theme.spacing.S}px;
`;
const Div = styled.div`
  margin-bottom: ${theme.spacing.M}px;
`;

export const FormField = ({ label = "", id = "", children }) => (
  <Div>
    <StyledFormField htmlFor={id}>{label}</StyledFormField>
    {children}
  </Div>
);

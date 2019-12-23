import React from "react";
import styled from "styled-components";

import { theme } from "../globals";

const StyledFooter = styled.footer`
  margin-top: ${theme.spacing.M};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  text-align: center;
`;

export const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>;

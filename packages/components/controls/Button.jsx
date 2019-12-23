import styled from "styled-components";
import { theme } from "../globals";

export const Button = styled.button`
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  border: none;
  border-radius: ${theme.borderRadius}px;
  padding: ${theme.spacing.S}px ${theme.spacing.M}px;

  font-size: ${theme.heading4.fontSize};
  font-weight: ${theme.heading4.fontWeight};

  color: ${theme.neutral1};
  background-color: ${theme.green4};

  :hover {
  }
  :active {
  }
`;

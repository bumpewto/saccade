import React from "react";
import styled from "styled-components";
import { theme } from "../globals";

const StyledInput = styled.input`
  border: none;
  background: transparent;
  width: 15rem;
  border-bottom: 2px solid ${theme.neutral3};
  color: ${theme.neutral5};
  outline: none;

  ::placeholder {
    color: ${theme.neutral3};
  }
  :focus {
    border-bottom: 2px solid ${theme.neutral5};
    ::placeholder {
      color: ${theme.neutral4};
    }
  }
`;

export const TextInput = ({ value, onChange, placeholder, type }) => (
  <StyledInput value={value} onChange={onChange} placeholder={placeholder} type={type} />
);

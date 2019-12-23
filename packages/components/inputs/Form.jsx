import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

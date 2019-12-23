import React from "react";
import styled from "styled-components";

import { Box } from "../layout";

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  z-index: 9;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Navbar = ({ logoPlace, navPlace }) => (
  <StyledNav>
    <Box width="S" height="S">
      {logoPlace}
    </Box>
    <Box width="S" height="S">
      {navPlace}
    </Box>
  </StyledNav>
);

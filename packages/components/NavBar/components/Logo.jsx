import React from "react";
import styled from "styled-components";

import { Anchor } from "../../controls";

const StyledAnchor = styled(Anchor)`
  font-weight: 600;
  font-size: 1.5rem;
`;

export const Logo = ({ name }) => <StyledAnchor>{name}</StyledAnchor>;

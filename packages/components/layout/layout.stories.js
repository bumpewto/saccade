import React from "react";
import { storiesOf } from "@storybook/react";

import { Box } from "./Box";
import { Paragraph, H1 } from "../text";
import { theme } from "../globals";

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo magni veniam
error soluta, aliquam numquam pariatur doloremque delectus distinctio? Quam deleniti
consequuntur in optio nostrum magnam, quo unde modi?`;

const sizes = Object.keys(theme.spacing);

storiesOf("Elements|Layout/Box", module)
  .add("default", () => <Box />)
  .add("with children", () => (
    <Box>
      <Paragraph>{lorem}</Paragraph>
    </Box>
  ))
  .add("with width", () => (
    <>
      {sizes.map(size => (
        <Box width={size}>
          <H1>Size {size}</H1>
          <Paragraph>{lorem}</Paragraph>
        </Box>
      ))}
    </>
  ))
  .add("with height", () => (
    <>
      {sizes.map(size => (
        <Box height={size}>
          <H1>Size {size}</H1>
          <Paragraph>{lorem}</Paragraph>
        </Box>
      ))}
    </>
  ))
  .add("with width and height", () => (
    <>
      {sizes.map(size => (
        <Box width={size} height={size}>
          <H1>Size {size}</H1>
          <Paragraph>{lorem}</Paragraph>
        </Box>
      ))}
    </>
  ));

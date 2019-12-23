import React from "react";
import { storiesOf } from "@storybook/react";

import { H1, H2, H3, Paragraph } from "./";

storiesOf("Elements|Text", module)
  .add("H1", () => <H1>Heading 1</H1>)
  .add("H2", () => <H2>Heading 2</H2>)
  .add("H3", () => <H3>Heading 3</H3>)
  .add("Paragraph", () => <Paragraph>Paragraph</Paragraph>);

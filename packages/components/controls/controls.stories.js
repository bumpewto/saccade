import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Anchor } from "./";
import { Button } from "./Button";

storiesOf("Elements|Controls", module).add("Anchor", () => <Anchor>Anchor</Anchor>);
storiesOf("Elements|Controls/Button", module)
  .add("default", () => <Button>Button</Button>)
  .add("with click", () => <Button onClick={action("button-click")}>Button</Button>);

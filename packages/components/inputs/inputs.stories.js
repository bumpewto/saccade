import React from "react";
import { storiesOf } from "@storybook/react";

import { TextInput } from "./TextInput";
import { FormField } from "./FormField";
import { Form } from "./Form";
import { Button } from "../controls";

storiesOf("Elements|Inputs/TextInput", module)
  .add("default", () => <TextInput />)
  .add("with placeholder", () => <TextInput placeholder="placeholder" />);

storiesOf("Elements|Inputs/FormField", module)
  .add("default", () => (
    <FormField>
      <TextInput id="Label" />
    </FormField>
  ))
  .add("with label", () => (
    <FormField label="Label">
      <TextInput id="Label" />
    </FormField>
  ))
  .add("with id", () => (
    <FormField label="Label" id="Label">
      <TextInput id="Label" />
    </FormField>
  ));

storiesOf("Elements|Inputs/Form", module).add("default", () => (
  <Form>
    <FormField label="Label">
      <TextInput id="Label" />
    </FormField>
    <Button type="submit">Submit</Button>
  </Form>
));

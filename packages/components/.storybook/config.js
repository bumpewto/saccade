import { addParameters, addDecorator, configure } from "@storybook/react";
import { GlobalStyle } from "../globals";
import React from "react";

function loadStories() {
  const req = require.context("../", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(children => (
  <>
    <GlobalStyle />
    {children()}
  </>
));
addParameters({
  viewport: {
    defaultViewport: "iphonex"
  }
});
configure(loadStories, module);

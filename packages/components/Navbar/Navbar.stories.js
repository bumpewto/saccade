import React from "react";
import { storiesOf } from "@storybook/react";

import { Navbar } from "./Navbar";
import { LogoWrapper, Logo } from "./components";

storiesOf("Components|Navbar", module).add("default", () => {
  const LogoPlace = () => (
    <LogoWrapper element="div">
      <Logo name="logo" />
    </LogoWrapper>
  );

  return <Navbar logoPlace={<LogoPlace />} navPlace="nav" />;
});
storiesOf("Components|Navbar", module).add("LogoWrapper example", () => (
  <LogoWrapper element="div">I'm a wrapper</LogoWrapper>
));

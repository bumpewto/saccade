import React from "react";
import { storiesOf } from "@storybook/react";

import { colorPalette, neutralsPalette, semanticPalette } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";

storiesOf("Globals|Colors", module)
  .add("Brand Colors", () => (
    <>
      {Object.entries(colorPalette).map(([color, value]) => (
        <div style={{ display: "flex", paddingBottom: 6 }}>
          <div style={{ backgroundColor: value, height: 24, width: 64, marginRight: 12 }} />
          {color}
        </div>
      ))}
    </>
  ))
  .add("Neutrals", () => (
    <>
      {Object.entries(neutralsPalette).map(([color, value]) => (
        <div style={{ display: "flex", paddingBottom: 6 }}>
          <div style={{ backgroundColor: value, height: 24, width: 64, marginRight: 12 }} />
          {color}
        </div>
      ))}
    </>
  ))
  .add("Semantic", () => (
    <>
      {Object.entries(semanticPalette).map(([color, value]) => (
        <div style={{ display: "flex", paddingBottom: 6 }}>
          <div style={{ backgroundColor: value, height: 24, width: 64, marginRight: 12 }} />
          {color}
        </div>
      ))}
    </>
  ));

storiesOf("Globals|Typography", module).add("Text", () => (
  <>
    {Object.entries(typography).map(([type, value]) => (
      <div style={{ fontSize: value.fontSize, fontWeight: value.fontWeight, paddingBottom: 6 }}>
        {type}
      </div>
    ))}
  </>
));

storiesOf("Globals|Spacing", module).add("Spacing sizes", () => (
  <>
    {Object.entries(spacing).map(([space, value]) => (
      <>
        {" "}
        <div
          style={{
            height: value,
            backgroundColor: colorPalette.rose2,
            marginBottom: 12,
            textAlign: "center"
          }}
        />
        <div>{`${space} ${value}px`}</div>
      </>
    ))}
  </>
));

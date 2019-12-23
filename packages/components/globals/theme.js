import { colorPalette, neutralsPalette, semanticPalette } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";

export const theme = {
  ...colorPalette,
  ...neutralsPalette,
  ...semanticPalette,
  ...typography,
  spacing,
  borderRadius: spacing.S
};

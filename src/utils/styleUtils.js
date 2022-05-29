import { css } from "@emotion/react";

export const COLORS = {
  blue: "#1976D2",
  white: "#FFFFFF",
  gray: "#697488",
  lightGray: "#E5E5E5",
  moreLightGray: "E0E0E0",
  black: "#525252",
};

export const FONT_WEIGHT = {
  bold: 600,
};

export const GLOBAL_STYLE = {
  mb: (size) => css`
    margin-bottom: ${size}px;
  `,
};

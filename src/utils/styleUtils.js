import { css } from "@emotion/react";

export const COLORS = {
  blue: "#1976D2",
  white: "#FFFFFF",
  gray: "#697488",
  grayBold: "#6F6F6F",
  grayMoreBold: "#C4C4C4",
  lightGray: "#E5E5E5",
  moreLightGray: "E0E0E0",
  black: "#525252",
  lightBlack: "#F4F4F4",
  boldBlack: "#191919",
  lightPink: "#F2F0FD",
};

export const FONT_WEIGHT = {
  bold: 600,
};

export const GLOBAL_STYLE = {
  mt: (size) => css`
    margin-top: ${size}px;
  `,
  mb: (size) => css`
    margin-bottom: ${size}px;
  `,
  mr: (size) => css`
    margin-right: ${size}px;
  `,
  ml: (size) => css`
    margin-left: ${size}px;
  `,
  bg: (color) => css`
    background-color: ${color};
  `,
};

import { css } from "@emotion/react";
import * as utils from "../../utils/styleUtils";

export const wrapper = css`
  background-color: ${utils.COLORS.blue};
`;

export const container = css`
  height: 76px;
  display: flex;
  justify-content: flex-end;
`;

export const bag = css`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right:
`;

export const bagTitle = css`
  font-size: 14px;
  font-weight: ${utils.FONT_WEIGHT.bold};
  color: ${utils.COLORS.white};
`;

export const bagSvg = css`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  color: ${utils.COLORS.white};
`;

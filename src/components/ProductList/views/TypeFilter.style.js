import { css } from "@emotion/react";
import * as utils from "../../../utils/styleUtils";

export const wrapper = css`
  display: flex;
  justify-content: space-between;
  width: 140px;
  margin-top: 16px;
`;

export const button = css`
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${utils.FONT_WEIGHT.bold};
  padding: 6px 16px;
  color: ${utils.COLORS.blue};
  background-color: ${utils.COLORS.lightPink};
  &:hover {
    cursor: pointer;
  }
`;

export const activeButton = css`
  color: ${utils.COLORS.white};
  background-color: ${utils.COLORS.blue};
`;

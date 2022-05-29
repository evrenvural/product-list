import { css } from "@emotion/react";
import * as utils from "../../../utils/styleUtils";

export const item = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const title = css`
  color: ${utils.COLORS.boldBlack};
  font-size: 14px;
`;

export const price = css`
  margin-top: 4px;
  color: ${utils.COLORS.blue};
  font-size: 14px;
  font-weight: ${utils.FONT_WEIGHT.bold};
`;

export const button = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const count = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: ${utils.COLORS.blue};
  color: ${utils.COLORS.white};
  font-weight: 700;
  font-size: 15px;
`;

export const upperAndLower = css`
  color: ${utils.COLORS.blue};
  font-weight: 700;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const line = css`
  height: 1px;
  background-color: ${utils.COLORS.lightBlack};
`;

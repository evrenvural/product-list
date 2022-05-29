import { css } from "@emotion/react";
import * as utils from "../../../utils/styleUtils";

export const wrapper = css`
  // background-color: ${utils.COLORS.blue};
`;

export const imageContainer = css`
  height: 124px;
  border-radius: 12px;
  border: 2px solid ${utils.COLORS.lightGray};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const imagePlaceHolder = css`
  width: 92px;
  height: 92px;
  background-color: ${utils.COLORS.grayMoreBold};
`;

export const price = css`
  color: ${utils.COLORS.blue};
  font-size: 14px;
  margin-top: 7px;
  line-height: 20px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: ${utils.FONT_WEIGHT.bold};
`;

export const title = css`
  font-weight: ${utils.FONT_WEIGHT.bold};
  color: ${utils.COLORS.boldBlack};
`;

export const button = css`
  margin-top: 9px;
  background-color: ${utils.COLORS.blue};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${utils.FONT_WEIGHT.bold};
  color: ${utils.COLORS.white};
  font-size: 12px;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;

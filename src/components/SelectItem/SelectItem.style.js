import { css } from "@emotion/react";
import * as utils from "../../utils/styleUtils";

export const wrapper = css`
  padding: 10px 22px;
  border: 5px solid ${utils.COLORS.blue};
  background-color: ${utils.COLORS.white};
`;

export const totalPriceContainer = css`
  display: flex;
  justify-content: flex-end;
`;

export const totalPrice = css`
  border: 2px solid ${utils.COLORS.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${utils.FONT_WEIGHT.bold};
  color: ${utils.COLORS.blue};
  font-size: 14px;
  padding: 17px 24px;
`;

import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./SelectItem.style";
import { GLOBAL_STYLE } from "../../utils/styleUtils";
import Item from "./views/Item";
import _ from "lodash";

function SelectItem({
  selectedItems,
  decreaseButtonClicked,
  increaseButtonClicked,
  totalPrice,
}) {
  return (
    <div css={style.wrapper}>
      {_.map(selectedItems, (item, index) => (
        <Item
          key={index}
          decreaseButtonClicked={decreaseButtonClicked}
          increaseButtonClicked={increaseButtonClicked}
          item={item}
        />
      ))}

      <div css={[style.totalPriceContainer, GLOBAL_STYLE.mt(18)]}>
        <div css={style.totalPrice}>₺{_.round(totalPrice, 2)}</div>
      </div>
    </div>
  );
}

export default SelectItem;

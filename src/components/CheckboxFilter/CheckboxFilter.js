import React, { useState } from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./CheckboxFilter.style";
import { Radio, Input, Checkbox } from "@mantine/core";
import { GLOBAL_STYLE } from "../../utils/styleUtils";
import _ from "lodash";

function CheckboxFilter({
  onChange,
  values,
  label,
  options,
  searchPlaceholder,
}) {
  const [filteredOptions, setFilteredOptions] = useState(options);

  const onChanged = (event) => {
    const { name, checked } = event.currentTarget;

    const newValues = (() => {
      if (checked) {
        return [...values, name];
      } else {
        return _.remove(values, (checkedItem) => checkedItem !== name);
      }
    })();

    onChange(newValues);
  };

  const onAllSelected = () => {
    onChange([]);
  };

  const searchOptions = (event) => {
    const { value } = event.currentTarget;

    const filtered = _.filter(options, (option) =>
      _.includes(_.lowerCase(option.label), _.lowerCase(value))
    );

    setFilteredOptions(filtered);
  };

  return (
    <div css={style.wrapper}>
      <label css={style.title}>{label}</label>
      <div css={style.filterContainer}>
        <Input
          css={[style.input, GLOBAL_STYLE.mb(18)]}
          placeholder={searchPlaceholder}
          onChange={searchOptions}
        />
        <div css={style.checkboxContainer}>
          <Checkbox
            css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
            label="All"
            name="all"
            onChange={onAllSelected}
            checked={_.isEmpty(values)}
          />
          {_.map(filteredOptions, ({ label, value }) => (
            <Checkbox
              key={value}
              css={[style.checkboxInput, GLOBAL_STYLE.mb(18)]}
              label={label}
              name={value}
              onChange={onChanged}
              checked={_.includes(values, value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CheckboxFilter;

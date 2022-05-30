import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./ProductList.style";
import TypeFilter from "./views/TypeFilter";
import Pagination from "./views/Pagination";
import Card from "./views/Card";
import { Container, Grid } from "@mantine/core";
import _ from "lodash";

function ProductList({
  list,
  totalListLength,
  onPageChanged,
  page,
  onTypeFilterChange,
  typeFilterValue,
}) {
  return (
    <div css={style.wrapper}>
      <label css={style.title}>Products</label>
      <TypeFilter onChange={onTypeFilterChange} value={typeFilterValue} />
      <Grid css={style.list}>
        {_.map(list, (item, index) => (
          <Grid.Col key={index} xs={6} sm={4} md={3}>
            <Card price={item.price} name={item.name} />
          </Grid.Col>
        ))}
      </Grid>
      <Pagination
        onPageChanged={onPageChanged}
        page={page}
        totalCount={totalListLength}
      />
    </div>
  );
}

export default ProductList;

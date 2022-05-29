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

function ProductList() {
  return (
    <div css={style.wrapper}>
      <label css={style.title}>Products</label>
      <TypeFilter />
      <Grid css={style.list}>
        <Grid.Col xs={6} sm={4} md={3}>
          <Card />
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={3}>
          <Card />
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={3}>
          <Card />
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={3}>
          <Card />
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={3}>
          <Card />
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={3}>
          <Card />
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={3}>
          <Card />
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={3}>
          <Card />
        </Grid.Col>
        <Grid.Col xs={6} sm={4} md={3}>
          <Card />
        </Grid.Col>
      </Grid>
      <Pagination />
    </div>
  );
}

export default ProductList;

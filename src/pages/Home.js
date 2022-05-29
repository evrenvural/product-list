// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import * as style from "./Home.style";
import * as itemActions from "../redux/item/item.actions";
import { useDispatch } from "react-redux";
import RadioFilter from "../components/RadioFilter/RadioFilter";
import CheckboxFilter from "../components/CheckboxFilter/CheckboxFilter";
import SelectItem from "../components/SelectItem/SelectItem";
import ProductList from "../components/ProductList/ProductList";
import { Container, Grid } from "@mantine/core";
import { GLOBAL_STYLE } from "../utils/styleUtils";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemActions.GetItems.request());
  }, []);

  return (
    <Container size="xl" css={style.container}>
      <Grid>
        <Grid.Col md={12} lg={3}>
          <RadioFilter />
          <div css={GLOBAL_STYLE.mb(24)} />
          <CheckboxFilter />
          <div css={GLOBAL_STYLE.mb(24)} />
          <CheckboxFilter />
        </Grid.Col>
        <Grid.Col md={12} lg={6}>
          <ProductList />
        </Grid.Col>
        <Grid.Col md={12} lg={3}>
          <SelectItem />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Home;

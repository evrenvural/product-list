// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import * as style from "./Home.style";
import * as itemActions from "../redux/item/item.actions";
import { useDispatch } from "react-redux";
import RadioFilter from "../components/RadioFilter/RadioFilter";
import { Container, Grid } from "@mantine/core";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemActions.GetItems.request());
  }, []);

  return (
    <Container size="xl" css={style.container}>
      <Grid>
        <Grid.Col span={3}>
          <RadioFilter />
        </Grid.Col>
        <Grid.Col span={6}>2</Grid.Col>
        <Grid.Col span={3}>3</Grid.Col>
      </Grid>
    </Container>
  );
}

export default Home;

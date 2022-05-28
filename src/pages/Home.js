// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import * as style from "./Home.style";
import * as itemActions from "../redux/item/item.actions";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemActions.GetItems.request());
  }, []);

  return <div css={style.container}>Hello Home!</div>;
}

export default Home;

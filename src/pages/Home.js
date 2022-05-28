// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as style from "./Home.style";

function Home() {
  return <div css={style.container}>Hello Home!</div>;
}

export default Home;

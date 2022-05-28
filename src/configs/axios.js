import axios from "axios";
import URL from "../utils/env";

const instance = axios.create({
  baseURL: URL,
  timeout: 1000,
});

export default instance;

import axios from "axios";
import URL from "../utils/env";

const instance = axios.create({
  baseURL: URL,
});

export default instance;

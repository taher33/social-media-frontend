import axios from "axios";
import { server_url } from "../constants";

export const axios_instance = (withCredentials = false) =>
  axios.create({
    baseURL: server_url,
    withCredentials: withCredentials,
  });

import axios from "axios";
import { getToken } from "../functions/TokenManager";

const BASE_URL = process.env.REACT_APP_PUBLIC_BASE_URL;

const instance = axios.create({
  baseURL: "https://port-0-qrc-3prof2llkxojagg.sel4.cloudtype.app/",
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken = await getToken().accessToken;

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default instance;

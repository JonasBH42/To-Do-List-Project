import axios from "axios";
import { API_URL } from "../../environment";

axios.defaults.withCredentials = true;

export const api = axios.create({ baseURL: "http://localhost:5000" });

export const getQueryData = async ({ queryKey: [path] }) => {
  const res = await api
    .get(`/${path}`)
    .then((response) => response);

  return res;
};

export const updateQueryData = async ({ method, path, data }) => {
  const res = await api({ method, url: `/${path}`, data }).then(
    (response) => response
  );

  return res;
};

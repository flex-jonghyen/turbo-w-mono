import axios, { AxiosRequestConfig } from "axios";
import { from, throwError } from "rxjs";
import { map, retry } from "rxjs/operators";

const fetch = axios.request;

export const request = (config: AxiosRequestConfig) => {
  return from(fetch(config)).pipe(
    map(({ data }) => data),
    retry(2)
  );
};

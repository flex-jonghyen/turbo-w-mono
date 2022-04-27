import { from } from "rxjs";
import { map, retry, mergeMap } from "rxjs/operators";

export const get = (url: string) => {
  return from(fetch(url, { method: "GET" })).pipe(
    mergeMap(({ json }) => json()),
    map((data) => data),
    retry(2)
  );
};

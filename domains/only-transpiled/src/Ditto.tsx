import { useEffect, useState } from "react";
import { request } from "./fetcher";

export const Ditto = () => {
  const [ditto, setDitto] = useState();

  useEffect(() => {
    const subscription = request({
      url: "https://pokeapi.co/api/v2/pokemon/ditto",
      method: "GET",
    }).subscribe((data) => {
      setDitto(data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <div>{JSON.stringify(ditto)}</div>;
};

import { useEffect, useState } from "react";
import { get } from "./fetcher";

export const Ditto = () => {
  const [ditto, setDitto] = useState();

  useEffect(() => {
    const subscription = get(
      "https://pokeapi.co/api/v2/pokemon/ditto"
    ).subscribe((data) => {
      setDitto(data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <div>{JSON.stringify(ditto)}</div>;
};

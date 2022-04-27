import data from "@emoji-mart/data/sets/13.1/apple.json";
import { Picker } from "emoji-mart";
import { useEffect, useRef } from "react";

export const EmojiPicker = (props: Record<string, unknown>) => {
  const ref = useRef(null);

  useEffect(() => {
    new Picker({ ...props, data, ref });
  }, []);

  return <div ref={ref} />;
};

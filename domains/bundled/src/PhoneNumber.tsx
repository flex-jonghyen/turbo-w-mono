import { AsYouType } from "libphonenumber-js";
import { ChangeEvent, useRef, useState } from "react";

export const PhoneNumber = () => {
  const formatter = useRef(new AsYouType());
  const [value, setValue] = useState("");

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const result = formatter.current.input(event.target.value);
    setValue(result);
  };

  return <input type="text" value={value} onChange={handleOnChange} />;
};

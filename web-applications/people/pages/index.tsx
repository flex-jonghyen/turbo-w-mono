import type { NextPage } from "next";
import { PhoneNumber, useHookForm } from "@flexteam/bundled";
import { useForm } from "react-hook-form";

const Home: NextPage = () => {
  useHookForm();
  useForm();
  return (
    <div>
      123
      <PhoneNumber />
    </div>
  );
};

export default Home;

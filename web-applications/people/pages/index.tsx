import type { NextPage } from "next";
import { PhoneNumber, useHookForm } from "@flexteam/bundled";

const Home: NextPage = () => {
  useHookForm();
  return (
    <div>
      123
      <PhoneNumber />
    </div>
  );
};

export default Home;

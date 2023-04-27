import { atom } from "recoil";
import { v4 } from "uuid";

export const isModalState = atom({
  key: `state${v4()}`,
  default: "",
});

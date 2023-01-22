import { atom } from "recoil";

export const commentsState = atom<Array<string | undefined>>({
  key: "commentsState",
  default: [],
});

import type { Gender } from "@types";
import { GENDER } from "@shared/constants";

const getGender = (gender: Gender) => {
  return GENDER[gender];
};

export default getGender;

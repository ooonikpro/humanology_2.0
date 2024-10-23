import type { Gender } from "@types";

export enum GenderEnum {
  male = "male",
  female = "female",
}

export const GENDER: Record<Gender, string> = {
  male: "Мужской",
  female: "Женский",
};

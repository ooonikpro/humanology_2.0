import type { SociotypeIdType } from "@types";
import { GenderEnum } from "@shared/constants";
import getSociotypeBy from "./getSociotypeBy";

const getGenderByYung = (sociotypeId: SociotypeIdType) => {
  return getSociotypeBy(sociotypeId).yungs.includes("logic")
    ? GenderEnum.male
    : GenderEnum.female;
};

export default getGenderByYung;

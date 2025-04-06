import type { ClubIdType } from "@types";
import { CLUBS } from "../../config";

const getClubData = (clubId: ClubIdType) => {
  return CLUBS[clubId];
};

export default getClubData;

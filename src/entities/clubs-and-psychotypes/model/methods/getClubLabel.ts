import type { ClubIdType } from "@types";
import getClubData from "./getClubData";

const getClubLabel = (clubId: ClubIdType): string => {
  return getClubData(clubId).label;
};

export default getClubLabel;

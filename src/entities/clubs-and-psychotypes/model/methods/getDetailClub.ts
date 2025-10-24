import type { ClubIdType } from "@types";
import getAllDetailClubs from "./getAllDetailClubs";

const getDetailClub = (clubId: ClubIdType | string) => {
  return getAllDetailClubs().find(({ club }) => clubId === club);
};

export default getDetailClub;

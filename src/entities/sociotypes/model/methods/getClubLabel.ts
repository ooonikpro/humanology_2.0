import type { ClubType } from "@types";
import { CLUBS } from "../../config";

const getClubLabel = (club: ClubType): string => {
  return CLUBS[club];
};

export default getClubLabel;

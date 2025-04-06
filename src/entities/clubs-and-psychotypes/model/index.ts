import getClubData from "./methods/getClubData";
import getClubLabel from "./methods/getClubLabel";
import getPsychotypeData from "./methods/getPsychotypeData";
import getPsychotypeLabel from "./methods/getPsychotypeLabel";
import getClubsInOrder from "./methods/getClubsInOrder";
import getPsychotypesInOrder from "./methods/getPsychotypesInOrder";

const clubsAndGroupsModel = {
  getClubsInOrder,
  getPsychotypesInOrder,
  getClubData,
  getClubLabel,
  getPsychotypeData,
  getPsychotypeLabel,
} as const;

export type ClubsAndGroupsModelType = typeof clubsAndGroupsModel;
export default clubsAndGroupsModel;

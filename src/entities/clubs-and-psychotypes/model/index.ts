import getClubData from "./methods/getClubData";
import getClubLabel from "./methods/getClubLabel";
import getPsychotypeData from "./methods/getPsychotypeData";
import getPsychotypeLabel from "./methods/getPsychotypeLabel";
import getClubsInOrder from "./methods/getClubsInOrder";
import getPsychotypesInOrder from "./methods/getPsychotypesInOrder";
import getAllDetailPsychotypes from "./methods/getAllDetailPsychotypes";
import getDetailPsychotype from "./methods/getDetailPsychotype";
import getAllDetailClubs from "./methods/getAllDetailClubs";
import getDetailClub from "./methods/getDetailClub";
import getAllPsychotypes from "./methods/getAllPsychotypes";

const clubsAndGroupsModel = {
  getClubsInOrder,
  getPsychotypesInOrder,
  getClubData,
  getClubLabel,
  getPsychotypeData,
  getPsychotypeLabel,
  getAllDetailPsychotypes,
  getDetailPsychotype,
  getAllDetailClubs,
  getDetailClub,
  getAllPsychotypes,
} as const;

export type ClubsAndGroupsModelType = typeof clubsAndGroupsModel;
export default clubsAndGroupsModel;

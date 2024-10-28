import type {
  ClubType,
  DichotomyType,
  PsychotypeType,
  QuadrasType,
  RoleType,
  SociotypeDataType,
  SociotypeIdType,
  TarotType,
} from "@types";
import { GenderEnum } from "@shared/constants";
import {
  SOCIOTYPES,
  ROLES,
  QUADRAS,
  TAROT,
  PSYCHOTYPES,
  CLUBS,
  YUNGS_DICHTOMIES,
} from "../config";

const getSociotypeIds = <R extends Array<SociotypeIdType>>(): R => {
  return Object.keys(SOCIOTYPES) as R;
};

const getSociotype = (id: SociotypeIdType): SociotypeDataType => {
  return SOCIOTYPES[id];
};

const getRoleQuadra = (role: RoleType): QuadrasType => {
  return ROLES[role].quadra;
};

const getRoleLabel = (role: RoleType): string => {
  return ROLES[role].label;
};

const getQuadraLabel = (qudra: QuadrasType): string => {
  return QUADRAS[qudra];
};

const getTarotLabel = (tarot: TarotType): string => {
  return TAROT[tarot];
};

const getPsychotypeLabel = (psychotype: PsychotypeType): string => {
  return PSYCHOTYPES[psychotype];
};

const getClubLabel = (club: ClubType): string => {
  return CLUBS[club];
};

const getYungDichotomyLabel = (yung: DichotomyType): string => {
  return YUNGS_DICHTOMIES[yung];
};

const getPortraitSrc = (id: SociotypeIdType, gender: GenderEnum) => {
  const imagesSrc = "/public/assets/images/portraits";

  return `${imagesSrc}/${id.toLowerCase()}-${gender}.png`;
};

export default {
  getSociotypeIds,
  getSociotype,
  getRoleQuadra,
  getRoleLabel,
  getQuadraLabel,
  getTarotLabel,
  getPsychotypeLabel,
  getClubLabel,
  getYungDichotomyLabel,
  getPortraitSrc,
};

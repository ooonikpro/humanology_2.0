import getSociotypeBy from "./methods/getSociotypeBy";
import getRoleQuadra from "./methods/getRoleQuadra";
import getRoleLabel from "./methods/getRoleLabel";
import getQuadraLabel from "./methods/getQuadraLabel";
import getQuadras from "./methods/getQuadras";
import getQuadraSubtitles from "./methods/getQuadraSubtitles";
import getTarotLabel from "./methods/getTarotLabel";
import getPsychotypeLabel from "./methods/getPsychotypeLabel";
import getClubLabel from "./methods/getClubLabel";
import getYungDichtomyLabel from "./methods/getYungDichtomyLabel";
import getPortraitSrc from "./methods/getPortraitSrc";
import getSociotypesByQuadra from "./methods/getSociotypesByQuadra";
import getOppositeYungDichtomyLabel from "./methods/getOppositeYungDichtomyLabel";
import getReininLabel from "./methods/getReininLabel";
import getOppositeReininLabel from "./methods/getOppositeReininLabel";
import getTemperament from "./methods/getTemperament";
import getCommunicationStyle from "./methods/getCommunicationStyle";
import getMotivation from "./methods/getMotivation";
import getCompanion from "./methods/getCompanion";
import getMindset from "./methods/getMindset";
import getAlignment from "./methods/getAlignment";
import getGender from "./methods/getGender";
import getBodyImageSrc from "./methods/getBodyImageSrc";
import getFaceImageSrc from "./methods/getFaceImageSrc";
import getIntertypeRelations from "./methods/getIntertypeRelations";
import getFunctions from "./methods/getFunctions";
import getAspectByFunction from "./methods/getAspectByFunction";
import getAspectVariantByFunction from "./methods/getAspectVariantByFunction";
import getGenderByYung from "./methods/getGenderByYung";
import getPrevSociotypeId from "./methods/getPrevSociotypeId";
import getNextSociotypeId from "./methods/getNextSociotypeId";

const model = {
  getSociotypeBy,
  getRoleQuadra,
  getRoleLabel,
  getQuadraLabel,
  getQuadras,
  getQuadraSubtitles,
  getTarotLabel,
  getPsychotypeLabel,
  getClubLabel,
  getYungDichtomyLabel,
  getOppositeYungDichtomyLabel,
  getPortraitSrc,
  getSociotypesByQuadra,
  getReininLabel,
  getOppositeReininLabel,
  getGender,
  getAlignment,
  getCommunicationStyle,
  getCompanion,
  getMindset,
  getMotivation,
  getTemperament,
  getBodyImageSrc,
  getFaceImageSrc,
  getIntertypeRelations,
  getFunctions,
  getAspectByFunction,
  getAspectVariantByFunction,
  getGenderByYung,
  getPrevSociotypeId,
  getNextSociotypeId,
};

export default model;
export type SociotypeModelType = typeof model;

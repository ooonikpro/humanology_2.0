import { alignmentsModel } from "@entities/alignments";
import { aspectModel } from "@entities/aspects";
import { clubsAndPsychotypesModel } from "@entities/clubs-and-psychotypes";
import { functionsModel } from "@entities/functions-and-blocks";
import { intertypeModel } from "@entities/intertypes";
import { mindsModel } from "@entities/mindsets";
import { quadrasModel } from "@entities/quadras";
import { reininsModel } from "@entities/reinins";
import { ringsModel } from "@entities/rings";
import { rolesModel } from "@entities/roles";
import { suitsModel } from "@entities/suits";
import { yungDichotomiesModel } from "@entities/yung-dichotomies";
import type {
  DetailValueType,
  DetailCardType,
  CharacteristicType,
} from "@types";

const detailGetters: Record<
  CharacteristicType,
  (val: DetailValueType | string) => DetailCardType | undefined
> = {
  function: functionsModel.getDetailFunction,
  role: rolesModel.getDetailRole,
  worldview: alignmentsModel.getDetailAlignment,
  aspect: aspectModel.getDetailAspect,
  block: functionsModel.getDetailBlock,
  ring: ringsModel.getDetailRing,
  quadra: quadrasModel.getDetailQuadra,
  tarot: suitsModel.getDetailSuit,
  club: clubsAndPsychotypesModel.getDetailClub,
  psychotype: clubsAndPsychotypesModel.getDetailPsychotype,
  mindset: mindsModel.getDetailMind,
  intertype: intertypeModel.getDetailIntertype,
  yung: yungDichotomiesModel.getDetailYung,
  reinin: reininsModel.getDetailReinin,
};

export default detailGetters;

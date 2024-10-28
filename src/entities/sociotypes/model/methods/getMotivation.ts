import { MOTIVATION } from "../../config";
import type { StimulantType } from "@types";

const getMotivation = (stimulant: StimulantType) => MOTIVATION[stimulant];

export default getMotivation;

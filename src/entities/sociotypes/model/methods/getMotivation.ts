import { MOTIVATION } from "../../config";
import type { Stimulant } from "@types";

const getMotivation = (stimulant: Stimulant) => MOTIVATION[stimulant];

export default getMotivation;

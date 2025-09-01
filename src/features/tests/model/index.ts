import determineSociotype from "./determineSociotype";
import createAnswers from "./createAnswers";
import isAllAnswered from "./isAllAnswered";
import isTallyPoleActive from "./isTallyPoleActive";
import isTallyPoleNeutral from "./isTallyPoleNeutral";
import calculateTallyByAnswers from "./calculateTallyByAnswers";
import getFirstSentence from "./getFirstSentence";
import getRestOfText from "./getRestOfText";

const model = {
  determineSociotype,
  createAnswers,
  isAllAnswered,
  isTallyPoleActive,
  isTallyPoleNeutral,
  calculateTallyByAnswers,
  getFirstSentence,
  getRestOfText,
} as const;

export default model;

import { sociotypeModel } from "@entities/sociotypes";
import type { DichotomyType, TallyKeyType, TallyType } from "@types";

const calculateTallyByAnswers = (answers: DichotomyType[]) => {
  return answers.reduce<TallyType>(
    (result, dichotomy) => {
      if (result.hasOwnProperty(dichotomy)) {
        result[dichotomy as TallyKeyType] += 1;
      } else {
        const key = sociotypeModel.getOppositeYungDichotomy(dichotomy);
        result[key as TallyKeyType] -= 1;
      }
      return result;
    },
    {
      rational: 0,
      logic: 0,
      sensory: 0,
      extravert: 0,
    },
  );
};

export default calculateTallyByAnswers;

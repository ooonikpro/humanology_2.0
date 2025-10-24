import type { TallyKeyType, TallyType } from "@types";

const isTallyPoleNeutral = (tally: TallyType, key: TallyKeyType) => {
  return tally[key] === 0;
};

export default isTallyPoleNeutral;

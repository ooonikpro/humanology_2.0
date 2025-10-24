import type { TallyPoleType, TallyKeyType, TallyType } from "@types";

const isTallyPoleActive = (
  pole: TallyPoleType,
  tally: TallyType,
  key: TallyKeyType,
) => {
  return pole === "left" ? tally[key] < 0 : tally[key] > 0;
};

export default isTallyPoleActive;

import type { DichotomyType, SociotypeIdType, TallyType } from "@types";
import { typeMap } from "../config/typeToSociotypeMap";

const determineSociotype = (results: TallyType): SociotypeIdType => {
  const { rational, logic, sensory, extravert } = results;

  const rationality = rational > 0 ? "rational" : "irrational";
  const logicality = logic > 0 ? "logic" : "ethic";
  const sensitivity = sensory > 0 ? "sensory" : "intuit";
  const sociability = extravert > 0 ? "extravert" : "introvert";

  type Key =
    `${Extract<DichotomyType, "rational" | "irrational">}-${Extract<DichotomyType, "logic" | "ethic">}-${Extract<DichotomyType, "sensory" | "intuit">}-${Extract<DichotomyType, "extravert" | "introvert">}`;
  const key: Key = `${rationality}-${logicality}-${sensitivity}-${sociability}`;

  return typeMap[key];
};

export default determineSociotype;

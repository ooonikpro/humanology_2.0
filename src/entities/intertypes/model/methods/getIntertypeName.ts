import type { IntertypeIdType } from "@types";
import getIntertype from "./getIntertype";

const getIntertypeName = (
  intertypeId: IntertypeIdType,
  alternative?: boolean,
) => {
  return getIntertype(intertypeId)[alternative ? "alternativeName" : "name"];
};

export default getIntertypeName;

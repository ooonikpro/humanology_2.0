import type { ReininSignType } from "@types";
import getAllDetailReinins from "./getAllDetailReinins";

const getDetailReinin = (reininSign: ReininSignType | string) => {
  return getAllDetailReinins().find(({ reinin }) => reinin === reininSign);
};

export default getDetailReinin;

import type { RingType } from "@types";
import getAllDetailRings from "./getAllDetailRings";

const getDetailRing = (ring: RingType | string) => {
  return getAllDetailRings().find(({ ring: ch }) => ch === ring);
};

export default getDetailRing;

import type { SociotypeIdType } from "@types";
import type { SociotypeTabNameType } from "../config";

const parseSociotypeRoute = (path: string) => {
  const segments = /^\/([sk])/.test(path) ? path.split("/") : [];

  return {
    id: segments?.[2]?.toUpperCase() as SociotypeIdType,
    tabName: segments?.[3] as SociotypeTabNameType,
  };
};

export default parseSociotypeRoute;

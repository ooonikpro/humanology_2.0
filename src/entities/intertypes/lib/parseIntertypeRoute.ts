import type { IntertypeIdType } from "@types";

const parseIntertypeRoute = (path: string) => {
  const id = path.match(/\/t\/i\/([^/]+)/)?.[1] as IntertypeIdType;

  return {
    id,
  };
};

export default parseIntertypeRoute;

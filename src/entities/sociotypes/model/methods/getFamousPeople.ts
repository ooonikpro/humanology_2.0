import { FAMOUS_PEOPLE } from "../../config";
import type { FamousPersonType } from "@types";

const getFamousPeople = (
  ...filters: Array<(person: FamousPersonType) => boolean>
) => {
  return filters.reduce((prevResult, filter) => {
    return prevResult.filter(filter);
  }, FAMOUS_PEOPLE);
};

export default getFamousPeople;

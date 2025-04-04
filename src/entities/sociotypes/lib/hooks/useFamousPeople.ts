import type { FamousPersonType, SociotypeIdType } from "@types";
import famousPeople from "../../config/famousPeople";

const useFamousPeople = (filterBySociotypeId?: SociotypeIdType) => {
  const predicate = filterBySociotypeId
    ? (p: FamousPersonType) => p.id === filterBySociotypeId
    : () => true;

  return {
    data: famousPeople.filter(predicate),
  };
};

export default useFamousPeople;

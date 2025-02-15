import { computed, toValue } from "vue";
import type { FamousPersonType } from "@types";
import * as state from "../state";

const getFamousPeople = (
  ...filters: Array<(person: FamousPersonType) => boolean>
) => {
  return computed(() =>
    filters.reduce((prevResult, filter) => {
      return prevResult.filter(filter);
    }, toValue(state.famousPeople)),
  );
};

export default getFamousPeople;

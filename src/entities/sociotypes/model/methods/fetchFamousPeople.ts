import * as state from "../state";
import { ref } from "vue";
import type { FamousPersonType } from "@types";

const isLoading = ref(false);

const fetchFamousPeople = () => {
  isLoading.value = true;

  import("../../config/famousPeople")
    .then(
      (data) => (state.famousPeople.value = data.default as FamousPersonType[]),
    )
    .finally(() => (isLoading.value = false));

  return isLoading;
};

export default fetchFamousPeople;

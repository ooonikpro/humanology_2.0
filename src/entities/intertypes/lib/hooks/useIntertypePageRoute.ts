import { useRoute } from "vue-router";
import type { IntertypeIdType } from "@types";

import parseIntertypeRoute from "../parseIntertypeRoute";

const useIntertypePageRoute = () => {
  const route = useRoute();

  const routeParams = computed(() => parseIntertypeRoute(route.path));

  const intertypeId = computed<IntertypeIdType>(
    (oldVal) => routeParams.value.id ?? oldVal,
  );

  return {
    intertypeId,
  };
};

export default useIntertypePageRoute;

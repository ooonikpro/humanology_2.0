import { useInjectAppRoutes } from "@shared/hooks/useAppRoutes";
import type { SociotypeIdType } from "@types";

function useCharacteristicSheet(sociotypeId: () => SociotypeIdType) {
  const appRoutes = useInjectAppRoutes();

  const goToSheet = (characteristic: string, value: string | string[]) => {
    const v = Array.isArray(value) ? value.join("+") : value;
    return `${appRoutes.sociotypeCard(sociotypeId())}?ch=${characteristic}&v=${v}`;
  };

  return {
    goToSheet,
  };
}

export default useCharacteristicSheet;

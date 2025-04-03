import model from "@entities/sociotypes/model";
import { useSociotypePageRoute } from "@entities/sociotypes";

const useSociotypesIdAround = () => {
  const { sociotypeId, activeTab } = useSociotypePageRoute();

  const prevSociotype = computed(() => {
    return model.getSociotypeBy(model.getPrevSociotypeId(toValue(sociotypeId)));
  });
  const currentSociotype = computed(() =>
    model.getSociotypeBy(toValue(sociotypeId)),
  );

  const nextSociotype = computed(() =>
    model.getSociotypeBy(model.getNextSociotypeId(toValue(sociotypeId))),
  );

  return {
    activeTab,
    prevSociotype,
    currentSociotype,
    nextSociotype,
  };
};

export default useSociotypesIdAround;

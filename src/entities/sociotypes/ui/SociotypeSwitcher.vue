<script lang="ts" setup>
import type { SociotypeIdType } from "@types";
import type { SociotypeTabNameType } from "../config";
import model from "../model";
import SociotypeQuadraIconsBlock from "./quadras/SociotypeQuadraIconsBlock.vue";

const props = defineProps<{
  sociotypeId: SociotypeIdType;
  sociotypeTabName: SociotypeTabNameType;
}>();

const prevSociotype = computed(() => {
  return model.getSociotypeBy(model.getPrevSociotypeId(props.sociotypeId));
});
const sociotype = computed(() => model.getSociotypeBy(props.sociotypeId));

const nextSociotype = computed(() =>
  model.getSociotypeBy(model.getNextSociotypeId(props.sociotypeId)),
);
</script>

<template>
  <div class="sociotype-switcher">
    <NuxtLink
      :to="$appRoutes.sociotypeTab(prevSociotype.id, props.sociotypeTabName)"
      class="sociotype-switcher__link"
    >
      <UiText force-tag="span" preset="small" color="dark-grey">
        ← {{ prevSociotype.name }}
      </UiText>
    </NuxtLink>

    <NuxtLink :to="$appRoutes.sociotypes" class="sociotype-switcher__link">
      <SociotypeQuadraIconsBlock :activeQuadra="sociotype.quadra" />
    </NuxtLink>

    <NuxtLink
      :to="$appRoutes.sociotypeTab(nextSociotype.id, props.sociotypeTabName)"
      class="sociotype-switcher__link"
    >
      <UiText force-tag="span" preset="small" color="dark-grey">
        {{ nextSociotype.name }} →
      </UiText>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-switcher {
  padding: 0 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 32px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: colors.$beige;

  &__link:first-child {
    justify-content: flex-start;
  }

  &__link:last-child {
    justify-content: flex-end;
  }
}
</style>

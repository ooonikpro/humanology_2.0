<script lang="ts" setup>
import type { SociotypeIdType } from "@types";
import model from "../model";
import SociotypeQuadraIconsBlock from "./quadras/SociotypeQuadraIconsBlock.vue";

const props = defineProps<{ sociotypeId: SociotypeIdType }>();

const prevSociotype = computed(() =>
  model.getSociotypeBy(model.getPrevSociotypeId(props.sociotypeId)),
);
const sociotype = computed(() => model.getSociotypeBy(props.sociotypeId));

const nextSociotype = computed(() =>
  model.getSociotypeBy(model.getNextSociotypeId(props.sociotypeId)),
);
</script>

<template>
  <div class="sociotype-switcher">
    <NuxtLink
      :to="$appRoutes.sociotypeCard(prevSociotype.id)"
      class="sociotype-switcher__link"
    >
      <UiText force-tag="span" preset="small" color="dark-grey">
        ← {{ prevSociotype.name }}
      </UiText>
    </NuxtLink>

    <SociotypeQuadraIconsBlock :activeQuadra="sociotype.quadra" />

    <NuxtLink
      :to="$appRoutes.sociotypeCard(nextSociotype.id)"
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

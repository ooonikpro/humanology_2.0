<script lang="ts" setup>
import { computed, defineProps } from "vue";
import type {
  IntertypeRelations,
  IntertypeRelationsGroupNameType,
  SociotypeIdType,
} from "@types";
import { UiText } from "@shared/ui";
import {
  SociotypeIntertypeProvider,
  SociotypeIntertypeCard,
  sociotypeModel,
  SociotypeCard,
  SociotypeCardHeader,
  SociotypeCardGroupsAndQuadras,
  SociotypeProvider,
} from "@entities/sociotypes";

const {
  intertypeOrder = () => ["quadral", "favorable", "neutral", "unfavorable"],
  ...props
} = defineProps<{
  sociotypeId: SociotypeIdType;
  intertypeOrder?: () => IntertypeRelationsGroupNameType[];
}>();

const intertypeRelations = computed(() => {
  return sociotypeModel.getIntertypeRelations(props.sociotypeId);
});
</script>

<template>
  <div class="sociotypes-compatibility-widget">
    <section
      v-for="group in intertypeOrder()"
      :key="group"
      class="sociotypes-compatibility-widget__section"
    >
      <SociotypeIntertypeProvider :intertype-group="group">
        <hr class="sociotypes-compatibility-widget__separator" />
        <UiText
          force-tag="h3"
          preset="large"
          color="intertype"
          class="sociotypes-compatibility-widget__title"
        >
          {{ sociotypeModel.getIntertypeRelationGroupName(group) }}
        </UiText>
      </SociotypeIntertypeProvider>

      <SociotypeIntertypeProvider
        v-slot="{ intertypeData }"
        v-for="(relationSociotypeId, intertypeId) in intertypeRelations[
          group
        ] as Record<IntertypeRelations, SociotypeIdType>"
        :key="relationSociotypeId"
        :intertype-id="intertypeId"
        :intertype-group="group"
      >
        <SociotypeIntertypeCard v-bind="intertypeData">
          <SociotypeProvider
            v-slot="{ data: sociotypeData }"
            :id="relationSociotypeId"
          >
            <SociotypeCard :data="sociotypeData" mini>
              <template #header>
                <SociotypeCardHeader :data="sociotypeData" mini />
              </template>

              <template #groups-and-quadras>
                <SociotypeCardGroupsAndQuadras v-bind="sociotypeData" mini />
              </template>
            </SociotypeCard>
          </SociotypeProvider>
        </SociotypeIntertypeCard>
      </SociotypeIntertypeProvider>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotypes-compatibility-widget {
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;

  &__section {
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  }

  &__separator {
    background-color: var(--color-intertype-group);
  }

  &__title {
    color: var(--color-intertype-group);
  }
}
</style>

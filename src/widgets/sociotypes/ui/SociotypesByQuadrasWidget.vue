<script lang="ts" setup>
import { useRouter } from "vue-router";
import {
  SociotypeCard,
  SociotypeCardHeader,
  SociotypeProvider,
  SociotypeQuadras,
  SociotypeSquashedQuadra,
  sociotypeModel,
} from "@entities/sociotypes";
import SociotypesCardGroupsAndQuadrasWidget from "./SociotypesCardGroupsAndQuadrasWidget.vue";

const router = useRouter();

const isExpanded = ref(false);
const expandButtonTitle = computed(() =>
  isExpanded.value ? "Свернуть квадры" : "Развернуть квадры",
);

const quadrasList = sociotypeModel.getQuadras();
</script>

<template>
  <article class="sociotype-by-qadras-widget">
    <template
      v-for="(quadra, $index) in quadrasList"
      :key="`quadra-group-${quadra}`"
    >
      <SociotypeQuadras
        v-if="$index === 0 || isExpanded"
        :active-quadra="quadra"
        :only-active-quadra="isExpanded"
      >
        <template v-slot="quadraProps">
          <SociotypeProvider
            v-slot="{ data }"
            :id="quadraProps.id"
            @click="router.push($appRoutes.sociotypeCard(quadraProps.id))"
          >
            <SociotypeCard
              :data="data"
              :gender="sociotypeModel.getGenderByYung(data.id)"
              mini
            >
              <template #header>
                <SociotypeCardHeader :data="data" mini />
              </template>

              <template #groups-and-quadras>
                <SociotypesCardGroupsAndQuadrasWidget v-bind="data" />
              </template>
            </SociotypeCard>
          </SociotypeProvider>
        </template>
      </SociotypeQuadras>

      <SociotypeSquashedQuadra v-else :quadra="quadra" />
    </template>

    <button
      class="sociotype-by-qadras-widget__expand-button"
      @click="isExpanded = !isExpanded"
    >
      <UiSvg
        :name="isExpanded ? 'chevron-up' : 'chevron-down'"
        color="accent"
        size="24"
      />
      <UiText force-tag="span" color="accent">{{ expandButtonTitle }}</UiText>
    </button>
  </article>
</template>

<style scoped lang="scss">
.sociotype-by-qadras-widget {
  display: flex;
  flex-flow: column nowrap;
  gap: 2px;

  &__expand-button {
    padding: 2px;
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
    cursor: pointer;
  }
}
</style>

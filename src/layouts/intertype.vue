<script lang="ts" setup>
import { OpenShareDialog } from "@features/open-share-dialog";
import {
  IntertypeGraph,
  IntertypeProvider,
  useIntertypePageRoute,
} from "@entities/intertypes";

const { intertypeId } = useIntertypePageRoute();
</script>

<template>
  <NuxtLayout name="default">
    <IntertypeProvider
      v-slot="intertypeData"
      :intertypeId="intertypeId"
      class="intertype-description-page"
    >
      <div class="intertype-description-page__header">
        <div class="intertype-description-page__header-double-icon">
          <NuxtLink :to="$appRoutes.intertypes">
            <UiSvg name="chevron-left" color="black" size="24" />
          </NuxtLink>
          <OpenShareDialog color="black" />
        </div>
        <UiSvg
          :name="intertypeData.id"
          size="128"
          color="intertype"
          class="intertype-description-page__header-icon"
        />
        <UiText preset="title" color="black">
          {{ intertypeData.name }}
        </UiText>
      </div>

      <div class="intertype-description-page__tags">
        <UiBadge
          v-for="tag in intertypeData.positiveTags"
          :key="tag"
          bg="intertype"
        >
          {{ tag }}
        </UiBadge>

        <UiBadge v-for="tag in intertypeData.negativeTags" :key="tag" bg="grey">
          {{ tag }}
        </UiBadge>
      </div>

      <hr class="intertype-description-page__separator" />

      <IntertypeGraph :intertypeId="intertypeData.id" class="graph" />

      <NuxtPage :intertypeId="intertypeData.id" />
    </IntertypeProvider>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.intertype-description-page {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 176px;
    padding: 12px;
    border-bottom: solid 1px colors.$intertype;
    background-color: colors.$bg-intertype;

    &-double-icon {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    &-icon {
      position: absolute;
      top: 24px;
      right: 44px;
    }
  }

  &__separator {
    background-color: colors.$intertype;
  }

  &__tags {
    display: flex;
    opacity: 0.75;
    flex-wrap: wrap;
    gap: 4px;
  }

  .graph {
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
  }
}
</style>

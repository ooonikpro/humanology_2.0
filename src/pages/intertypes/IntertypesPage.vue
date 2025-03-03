<script lang="ts" setup>
import PageHeaderWidget from "@widgets/PageHeaderWidget.vue";
import { UiText } from "@shared/ui";
import {
  IntertypeCard,
  IntertypeGroupProvider,
  intertypeModel,
  IntertypeProvider,
} from "@entities/intertypes";
</script>

<template>
  <div class="intertype-page">
    <PageHeaderWidget iconName="square-2" title="Интертипные отношения" />
    <UiText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque
      cupiditate debitis enim fugit ipsa pariatur, quae quis? Iure obcaecati
      possimus praesentium, quam ratione rem similique sit soluta suscipit
      tempora.
    </UiText>

    <UiText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque
      cupiditate debitis enim fugit ipsa pariatur, quae quis? Iure obcaecati
      possimus praesentium, quam ratione rem similique sit soluta suscipit
      tempora.
    </UiText>

    <UiText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque
      cupiditate debitis enim fugit ipsa pariatur, quae quis? Iure obcaecati
      possimus praesentium, quam ratione rem similique sit soluta suscipit
      tempora.
    </UiText>

    <IntertypeGroupProvider
      v-slot="{ intertypeGroupName, intertypeOrder }"
      v-for="intertypeGroupId in intertypeModel.getIntertypeGroupOrder()"
      :key="intertypeGroupId"
      :intertypeGroupId="intertypeGroupId"
      class="intertype-page__intertypes"
    >
      <hr class="intertype-page__intertypes-separator" />
      <UiText
        force-tag="h3"
        preset="large"
        color="intertype"
        class="intertype-page__intertypes-title"
      >
        {{ intertypeGroupName }}
      </UiText>

      <IntertypeProvider
        v-slot="intertypeData"
        v-for="intertypeId in intertypeOrder"
        :key="intertypeId"
        :intertypeId="intertypeId"
      >
        <IntertypeCard v-bind="intertypeData" />
      </IntertypeProvider>
    </IntertypeGroupProvider>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.intertype-page {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__intertypes {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 32px;

    &-separator {
      background-color: colors.$intertype;
    }

    &-title {
      text-align: left;
    }
  }
}
</style>

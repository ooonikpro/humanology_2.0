<script lang="ts" setup>
import { TabLink } from "@entities/navigation";
import { tabs } from "./config";
import { UiRandomImg, UiSvg } from "@shared/ui";
</script>

<template>
  <nav class="main-nav">
    <TabLink
      v-for="{ to, iconName, label, size, isPremium, isWithImg } in tabs"
      :key="to + iconName"
      class="main-nav__tab"
      :class="{
        'main-nav__tab--with-img': isWithImg,
        'main-nav__tab--premium': isPremium,
      }"
      :to="to"
      :iconName="iconName"
      :size="size"
    >
      <UiSvg class="main-nav__tab-ruble" v-if="isPremium" name="ruble-square" />
      <span class="main-nav__tab-title">{{ label }}</span>
      <UiRandomImg class="main-nav__tab-imgs" v-if="isWithImg" />
    </TabLink>
  </nav>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$gap: 8px;

.main-nav {
  padding: 8px;
  display: flex;
  flex-flow: row wrap;
  gap: $gap;

  &__tab {
    border: 1px solid colors.$grey;

    &--with-img {
      display: grid;
      grid-template-columns: max-content 1fr;
      grid-template-rows: 1fr max-content;
      align-items: end;
      height: max-content;
    }

    &--with-img > &-imgs {
      grid-column: 2/2;
      grid-row: 1/3;
      justify-self: end;

      max-width: 90%;
    }

    &--premium {
      display: grid;
      grid-template-columns: 1fr max-content;
      grid-template-rows: 1fr 1fr;
      align-items: start;
      justify-content: space-between;
    }
    &-ruble {
      color: colors.$fire;
    }
    &--premium &-title {
      grid-column: 1/1;
      grid-row: 2/2;
    }
  }
}
</style>

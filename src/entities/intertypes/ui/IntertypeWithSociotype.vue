<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { UiBadge, UiSvg, UiText } from "@shared/ui";
import type { IntertypeDataType } from "@types";

const router = useRouter();
const props = defineProps<IntertypeDataType>();
</script>

<template>
  <article class="intertype-with-sociotype">
    <div
      class="intertype-with-sociotype__info"
      @click="router.push($appRoutes.intertypeDescription(props.id))"
    >
      <UiSvg
        color="intertype"
        name="intertype-bg"
        class="intertype-with-sociotype__info-bg"
      />
      <UiBadge bg="intertype" class="intertype-with-sociotype__info-lvl">
        {{ props.lvl }}
      </UiBadge>
      <UiSvg
        :name="props.id"
        size="64"
        color="intertype"
        class="intertype-with-sociotype__info-icon"
      />
      <div class="intertype-with-sociotype__info-footer">
        <UiText
          force-tag="h4"
          preset="large"
          class="intertype-with-sociotype__info-name"
        >
          {{ props.name }}
        </UiText>
        <UiText
          preset="body"
          color="dark-grey"
          class="intertype-with-sociotype__info-alternative-name"
        >
          {{ props.alternativeName }}
        </UiText>
      </div>
    </div>

    <div class="intertype-with-sociotype__sociotype-card">
      <slot />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

$space-for-bg: 4px;
$gap: 8px;

.intertype-with-sociotype {
  padding: $gap;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 40% 60%;
  background-color: colors.$bg-intertype;

  &__info {
    padding: $space-for-bg 0;
    display: grid;
    grid-template-columns: 1fr 64px + 12px;
    grid-template-rows: max-content max-content;
    align-content: space-between;

    position: relative;

    &-bg {
      width: 100%;
      height: calc(100% + $space-for-bg);
      opacity: 0.5;

      position: absolute;
      top: 0;
      left: 0;
    }

    &-lvl {
      margin-bottom: auto;
    }

    &-footer {
      grid-column: 1/3;
    }
  }
}
</style>

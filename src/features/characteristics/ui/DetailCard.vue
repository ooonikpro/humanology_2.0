<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";
import type { DetailCardType, IconNameType } from "@types";
import DetailCardHeader from "./DetailCardHeader.vue";
import DetailCardShowMore from "./DetailCardShowMore.vue";

const props = defineProps<{
  iconName?: IconNameType;
  data: DetailCardType;
  link?: RouteLocationRaw;
}>();
</script>

<template>
  <article :class="[`detail-card--${props.data.type}`]" class="detail-card">
    <DetailCardHeader
      :title="props.data.title"
      :subtitle="props.data.subtitle"
      :tags="props.data.tags"
    >
      <template #icon>
        <UiSvg
          v-if="props.iconName"
          :name="props.iconName"
          size="64"
          color="accent"
        />
      </template>
    </DetailCardHeader>

    <UiText
      v-for="paragraph in props.data.content"
      :key="paragraph"
      preset="body"
    >
      {{ paragraph }}
    </UiText>

    <DetailCardShowMore :link="props.link" class="detail-card__show-more" />
  </article>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.detail-card {
  padding: 12px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  border-radius: 12px;
  background-color: colors.$beige;

  &__show-more {
    margin-top: 8px;
  }
}
</style>

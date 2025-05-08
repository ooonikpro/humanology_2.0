<script lang="ts" setup>
import type { PsychotypeIdType } from "@types";

import model from "../model";

const props = defineProps<{ psychotypeId: PsychotypeIdType }>();
const data = model.getPsychotypeData(props.psychotypeId);
const style = {
  "--color-psychotype": `var(--color-psychotype-${data.id})`,
  "--ui-article-card-border-color": `var(--color-psychotype-${data.id})`,
};
</script>

<template>
  <UiArticleCard
    :icon-name="data.id"
    :title="data.title"
    :subtitle="data.subtitle"
    :tags="data.tags"
    :description="data.description"
    :style="style"
    theme-color="psychotype"
  />
</template>

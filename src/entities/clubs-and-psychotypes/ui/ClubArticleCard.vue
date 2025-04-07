<script lang="ts" setup>
import type { ClubIdType } from "@types";
import model from "../model";

const props = defineProps<{ clubId: ClubIdType }>();

const data = model.getClubData(props.clubId);
</script>

<template>
  <UiArticleCard
    :icon-name="data.id"
    :title="data.title"
    :subtitle="data.subtitle"
    :tags="data.tags"
    :description="data.description"
  />
</template>

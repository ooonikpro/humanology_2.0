<script setup lang="ts">
import { ref } from "vue";
import type { OptionType, OptionWithIconType, OptionWithSubtitleType } from "@types";
import SociotypesByQadrasWidget from "@widgets/sociotypes/SociotypesByQadrasWidget.vue";
import MainNavigationWidget from "@widgets/MainNavigationWidget.vue";
import { UiSwitcher } from "@shared/ui";

const switcherData = ref<OptionType[]>([
  {
    label: "20-25",
    value: "20-25",
  },
  {
    label: "10-15",
    value: "10-15",
  },
  {
    label: "5-10",
    value: "5-10",
  },
]);

const switcherWithSubtitleData = ref<OptionWithSubtitleType[]>(
  switcherData.value.map((option, index) => ({
    ...option,
    subtitle: `Subtitle ${index}`,
  })),
);

const switcherWithIconData = ref<OptionWithIconType[]>(
  switcherData.value.map((option) => ({
    ...option,
    iconName: "wands",
  })),
);

const picked = ref<string>(switcherData.value[1].value);
const pickedWithSubtitle = ref<string>(switcherWithSubtitleData.value[1].value);
const pickedWithIcon = ref<string>(switcherWithIconData.value[1].value);
</script>

<template>
  <div>
    <SociotypesByQadrasWidget />
    <MainNavigationWidget />
    <UiSwitcher :options="switcherData" type="text" v-model="picked" />
    <UiSwitcher
      :options="switcherWithSubtitleData"
      type="textWithSubtitle"
      v-model="pickedWithSubtitle"
    />
    <UiSwitcher
      :options="switcherWithIconData"
      type="textWithIcon"
      v-model="pickedWithIcon"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SociotypesByQadrasWidget from "@widgets/sociotypes/SociotypesByQadrasWidget.vue";
import MainNavigationWidget from "@widgets/MainNavigationWidget.vue";
import { UiSwitcher, type DataItemType } from "@shared/ui";
import { GenderEnum } from "@shared/constants";

const switcherData = ref<DataItemType[]>([
  {
    label: "20-25",
    value: "20-25",
  },
  {
    label: "Мужчина",
    value: GenderEnum.male,
    iconName: "male",
  },
  {
    label: "Велта Микелсоне",
    value: 10,
    subtitle: "10 минут",
  },
]);

type SwitcherValueType = (typeof switcherData.value)[number]["value"];

const picked = ref<SwitcherValueType>(switcherData.value[1].value);
</script>

<template>
  <div>
    <SociotypesByQadrasWidget />
    <MainNavigationWidget />
    <UiSwitcher name="switcher-test-some" :data="switcherData" v-model="picked" />
  </div>
</template>

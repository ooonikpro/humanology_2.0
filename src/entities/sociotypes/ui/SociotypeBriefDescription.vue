<script lang="ts" setup>
import { defineProps } from "vue";
import type { SociotypeDataType } from "@types";

import { UiText } from "@shared/ui";

import model from "../model";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

const props = defineProps<SociotypeDataType>();
const sociotypeBriefDescriprionById = model.getBriefDescriptionById(props.id);
</script>

<template>
  <SociotypeSignsBlock
    class="sociotype-short-desctiption"
    title="Краткое описание"
  >
    <UiText
      class="sociotype-short-desctiption__person-attributes"
      tag="h5"
      color="role"
    >
      {{ sociotypeBriefDescriprionById.personAttributes }}
    </UiText>

    <UiText
      class="sociotype-short-desctiption__person-description"
      v-for="(
        description, index
      ) in sociotypeBriefDescriprionById.personDesctiption"
      :key="index"
      tag="p"
      color="black"
    >
      {{ description }}
    </UiText>
  </SociotypeSignsBlock>
</template>

<style lang="scss" scoped>
.sociotype-short-desctiption {
  &__person-attributes {
    font-size: 18px;
    line-height: 133%;
  }
  &__person-description {
    font-size: 15px;
    line-height: 133%;
  }
}
</style>

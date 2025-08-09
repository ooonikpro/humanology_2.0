<script lang="ts" setup>
import type { SociotypeDataType } from "@types";
import { sociotypeModel } from "@entities/sociotypes";

const props = defineProps<{ data: SociotypeDataType }>();

// Получаем названия аспектов для данного социотипа
const aspectNames = computed(() => {
  return props.data.yungs.map(yung => sociotypeModel.getYungDichtomyLabel(yung));
});
</script>

<template>
  <div class="sociotype-aspects-row">
    <UiText
      v-for="(aspectName, index) in aspectNames"
      :key="index"
      :color="index === 0 ? 'role' : 'black'"
      :class="[
        'sociotype-aspects-row__aspect',
        { 'sociotype-aspects-row__aspect--secondary': index !== 0 }
      ]"
      preset="body"
    >
      {{ aspectName }}
    </UiText>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-aspects-row {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px 12px;
  gap: 8px;
  background-color: colors.$white;

  &__aspect {
    text-align: center;
    
    &--secondary {
      opacity: 0.5;
    }
  }
}
</style>

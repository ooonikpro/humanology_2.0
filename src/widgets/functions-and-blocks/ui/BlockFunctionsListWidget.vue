<script lang="ts" setup>
import type { SociotypeIdType } from "@types";
import { computed } from "vue";
import { sociotypeModel } from "@entities/sociotypes";
import { intertypeModel } from "@entities/intertypes";

import * as config from "../config";
import BlockFunctions from "./BlockFunctions.vue";

const props = defineProps<{
  sociotypeId: SociotypeIdType;
}>();

const relationRole = computed(() => {
  return sociotypeModel.getSociotypeBy(
    sociotypeModel.getIntertypeRelations(
      props.sociotypeId,
      intertypeModel.getIntertypeOrder("quadral")[0],
    ),
  ).role;
});

const style = computed(() => ({
  "--function-quadral-role-color": `var(--color-quadra-${sociotypeModel.getRoleQuadra(relationRole.value)})`,
}));

// Функция для получения цвета аспекта
const getAspectColor = (functionName: "limit" | "back" | "role" | "suggestive" | "activate") => {
  const aspect = sociotypeModel.getAspectByFunction(props.sociotypeId, functionName);
  
  switch (aspect) {
    case "logic":
    case "business":
      return "#f6c0b1"; // $pink для логики
    case "people":
    case "emotions":
      return "#d7dd93"; // $green для этики
    case "ideas":
    case "time":
      return "#b6d1c5"; // $turquoise для интуиции
    case "will":
    case "comfort":
      return "#fece30"; // $yellow для сенсорики (исправлен!)
    default:
      return "#e0e0e0"; // Fallback
  }
};

// Цвета для соединителей (цвет маленькой функции в паре)
const connector1Color = computed(() => getAspectColor("limit")); // Базовая(1)-Защитная(7) -> цвет защитной
const connector2Color = computed(() => getAspectColor("back")); // Творческая(2)-Фоновая(8) -> цвет фоновой
const connector3Color = computed(() => getAspectColor("activate")); // Болевая(4)-Активационная(6) -> цвет активационной  
const connector4Color = computed(() => getAspectColor("suggestive")); // Ролевая(3)-Суггестивная(5) -> цвет суггестивной
</script>

<template>
  <div :style="style" class="block-functions-list">
    <!-- Эго блок -->
    <BlockFunctions
      :sociotypeId="props.sociotypeId"
      :blockName="config.BLOCKS_ORDER[0]"
    />
    
    <!-- Соединители между Эго и Суперэго -->
    <div class="function-connectors">
      <!-- Базовая (1) - Защитная (7) -->
      <svg 
        class="function-connector function-connector--left"
        :style="{ color: connector1Color }"
        width="32" 
        height="8" 
        viewBox="0 0 32 8" 
        fill="none"
      >
        <path d="M32 0C29.7909 0 28 1.79086 28 4C28 6.20914 29.7909 8 32 8H0C2.20914 8 4 6.20914 4 4C4 1.79086 2.20914 0 0 0H32Z" fill="currentColor"/>
      </svg>
      <!-- Творческая (2) - Фоновая (8) -->
      <svg 
        class="function-connector function-connector--right"
        :style="{ color: connector2Color }"
        width="32" 
        height="8" 
        viewBox="0 0 32 8" 
        fill="none"
      >
        <path d="M32 0C29.7909 0 28 1.79086 28 4C28 6.20914 29.7909 8 32 8H0C2.20914 8 4 6.20914 4 4C4 1.79086 2.20914 0 0 0H32Z" fill="currentColor"/>
      </svg>
    </div>
    
    <!-- Суперэго блок -->
    <BlockFunctions
      :sociotypeId="props.sociotypeId"
      :blockName="config.BLOCKS_ORDER[1]"
    />
    
    <!-- Ид блок -->
    <BlockFunctions
      :sociotypeId="props.sociotypeId"
      :blockName="config.BLOCKS_ORDER[2]"
    />
    
    <!-- Соединители между Ид и Суперид -->
    <div class="function-connectors">
      <!-- Болевая (4) - Активационная (6) -->
      <svg 
        class="function-connector function-connector--left"
        :style="{ color: connector3Color }"
        width="32" 
        height="8" 
        viewBox="0 0 32 8" 
        fill="none"
      >
        <path d="M32 0C29.7909 0 28 1.79086 28 4C28 6.20914 29.7909 8 32 8H0C2.20914 8 4 6.20914 4 4C4 1.79086 2.20914 0 0 0H32Z" fill="currentColor"/>
      </svg>
      <!-- Ролевая (3) - Суггестивная (5) -->
      <svg 
        class="function-connector function-connector--right"
        :style="{ color: connector4Color }"
        width="32" 
        height="8" 
        viewBox="0 0 32 8" 
        fill="none"
      >
        <path d="M32 0C29.7909 0 28 1.79086 28 4C28 6.20914 29.7909 8 32 8H0C2.20914 8 4 6.20914 4 4C4 1.79086 2.20914 0 0 0H32Z" fill="currentColor"/>
      </svg>
    </div>
    
    <!-- Суперид блок -->
    <BlockFunctions
      :sociotypeId="props.sociotypeId"
      :blockName="config.BLOCKS_ORDER[3]"
    />
  </div>
</template>

<style lang="scss" scoped>
.block-functions-list {
  display: flex;
  flex-direction: column;
  gap: 0; // Убираем gap, чтобы коннекторы примыкали к функциям
  
  // Добавляем отступы только между блоками (не коннекторами)
  > :not(.function-connectors) + :not(.function-connectors) {
    margin-top: 8px;
  }
}



.function-connectors {
  height: 8px; // Высота равна gap между блоками
  position: relative;
}

.function-connector {
  width: 32px;
  height: 8px;
  position: absolute;
  opacity: 0.5; // 50% прозрачности для всех соединителей
  
  &--left {
    // Соединители для левых функций (1->7, 4->6)
    left: 64px; // Отступ от левого края 64px
  }
  
  &--right {
    // Соединители для правых функций (2->8, 3->5)  
    right: 64px; // Отступ от правого края 64px
  }
}
</style>


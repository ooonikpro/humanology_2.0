<script lang="ts" setup>
import type { LocationQuery } from "vue-router";

import { sociotypeModel, SociotypeProvider } from "@entities/sociotypes";
import { OpenBottomSheetByQuery } from "@features/open-bottom-sheet-by-query";
import { FunctionLevel, functionsModel } from "@entities/functions-and-blocks";
import { AspectDescription, aspectModel } from "@entities/aspects";
import BlockFunctions from "./BlockFunctions.vue";

const routePredicate = (query: LocationQuery) => {
  return query.hasOwnProperty("f");
};
</script>

<template>
  <OpenBottomSheetByQuery
    v-slot="{ isOpen, data, handleClose, handleAfterClose }"
    :predicate="routePredicate"
  >
    <SociotypeProvider :id="data.id">
      <UiBottomSheet
        :isOpen="isOpen"
        @close="handleClose"
        @afterClose="handleAfterClose"
      >
        <template #title>
          <div class="bottom-sheet-title-group">
            <UiText color="quadra">
              {{ functionsModel.getName(data.f) }} функция
            </UiText>
            <UiText>{{ functionsModel.getLevelName(data.f) }}</UiText>
            <FunctionLevel :lvl="functionsModel.getLevel(data.f)" />
          </div>
        </template>

        <template #default>
          <div class="bottom-sheet-content">
            <BlockFunctions
              :sociotypeId="data.id"
              :blockName="functionsModel.getBlockName(data.f)"
              :activeFunctionName="data.f"
            />

            <hr class="bottom-sheet-content__divinder" />

            <slot v-bind="{ sociotypeId: data.id, functionName: data.f }" />

            <AspectDescription
              :iconName="
                aspectModel.getAspectIconName(
                  sociotypeModel.getAspectByFunction(data.id, data.f),
                )
              "
              :title="
                aspectModel.getAspectName(
                  sociotypeModel.getAspectByFunction(data.id, data.f),
                )
              "
              :subtitle="
                aspectModel.getAspectLabel(
                  sociotypeModel.getAspectByFunction(data.id, data.f),
                )
              "
              :tags="
                aspectModel.getAspectTags(
                  sociotypeModel.getAspectByFunction(data.id, data.f),
                )
              "
              :to="
                $appRoutes.aspectCard(
                  sociotypeModel.getAspectByFunction(data.id, data.f),
                )
              "
            />

            <AspectDescription
              :title="functionsModel.getName(data.f)"
              :tags="functionsModel.getTags(data.f)"
              :to="$appRoutes.functionCard(data.f)"
            >
              {{ functionsModel.getDescription(data.f) }}
            </AspectDescription>
          </div>
        </template>
      </UiBottomSheet>
    </SociotypeProvider>
  </OpenBottomSheetByQuery>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.bottom-sheet-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
  color: colors.$quadra;
}

.bottom-sheet-content {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__divinder {
    background-color: colors.$role;
    border-bottom: 1px dotted colors.$white;
    margin-bottom: 8px;
  }
}
</style>

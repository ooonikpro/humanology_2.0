<script lang="ts" setup>
import type { SociotypeIdType } from "@types";

import { sociotypeModel } from "@entities/sociotypes";
import { FunctionLevel, functionsModel } from "@entities/functions-and-blocks";
import { AspectDescription, aspectModel } from "@entities/aspects";
import { SociotypeBottomSheetByQuery } from "@features/open-bottom-sheet-by-query";

import BlockFunctions from "./BlockFunctions.vue";
import FunctionInsideBottomSheetContent from "./FunctionInsideBottomSheetContent.vue";

const props = defineProps<{ sociotypeId: SociotypeIdType }>();
</script>

<template>
  <SociotypeBottomSheetByQuery
    :sociotype-id="props.sociotypeId"
    :accepted-query="['f']"
  >
    <template #title="{ data }">
      <UiText color="quadra">
        {{ functionsModel.getName(data.f) }} функция
      </UiText>
      <UiText>{{ functionsModel.getLevelName(data.f) }}</UiText>
      <FunctionLevel :lvl="functionsModel.getLevel(data.f)" />
    </template>

    <template #default="{ data }">
      <div class="bottom-sheet-content">
        <BlockFunctions
          :sociotypeId="props.sociotypeId"
          :blockName="functionsModel.getBlockName(data.f)!"
          :activeFunctionName="data.f"
        />

        <hr class="bottom-sheet-content__divider" />

        <FunctionInsideBottomSheetContent
          :sociotype-id="props.sociotypeId"
          :function-name="data.f"
        />

        <br />

        <hr />

        <AspectDescription
          :title="functionsModel.getName(data.f)"
          :tags="functionsModel.getTags(data.f)"
          :to="$appRoutes.functionCard(data.f)"
        >
          {{ functionsModel.getDescription(data.f) }}
        </AspectDescription>

        <AspectDescription
          :iconName="
            aspectModel.getAspectIconName(
              sociotypeModel.getAspectByFunction(props.sociotypeId, data.f),
            )
          "
          :title="
            aspectModel.getAspectName(
              sociotypeModel.getAspectByFunction(props.sociotypeId, data.f),
            )
          "
          :subtitle="
            aspectModel.getAspectLabel(
              sociotypeModel.getAspectByFunction(props.sociotypeId, data.f),
            )
          "
          :tags="
            aspectModel.getAspectTags(
              sociotypeModel.getAspectByFunction(props.sociotypeId, data.f),
            )
          "
          :to="
            $appRoutes.aspectCard(
              sociotypeModel.getAspectByFunction(props.sociotypeId, data.f),
            )
          "
        />
      </div>
    </template>
  </SociotypeBottomSheetByQuery>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.bottom-sheet-content {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__divider {
    background-color: colors.$role;
    border-bottom: 1px dotted colors.$white;
    margin-bottom: 12px;
  }
}
</style>

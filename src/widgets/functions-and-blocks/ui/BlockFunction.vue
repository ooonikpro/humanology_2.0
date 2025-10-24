<script lang="ts" setup>
import type { AspectType, HumanFunctionType, SociotypeIdType } from "@types";
import { FunctionCard } from "@entities/functions-and-blocks";
import { sociotypeModel } from "@entities/sociotypes";
import { aspectModel, useAspectColors } from "@entities/aspects";

const props = defineProps<{
  sociotypeId: SociotypeIdType;
  functionName: HumanFunctionType;
  isDisabled?: boolean;
  withSeparator?: boolean;
  type: "left" | "right";
}>();

const currentAspect = computed(() => {
  return sociotypeModel.getAspectByFunction(
    props.sociotypeId,
    props.functionName,
  );
});

const { aspectElementIcon, aspectIcon } = useAspectIcons(currentAspect);

const aspectName = toRef(() => aspectModel.getAspectName(currentAspect.value));

const aspectVariant = computed(() => {
  return sociotypeModel.getAspectVariantByFunction(
    props.sociotypeId,
    props.functionName,
  );
});

const colors = useAspectColors(currentAspect);

// inline composables
function useAspectIcons(aspect: MaybeRefOrGetter<AspectType>) {
  const aspectElementIcon = computed(() => {
    return aspectModel.getAspectElementIcon(toValue(aspect));
  });

  const aspectIcon = computed(() => {
    return aspectModel.getAspectIconName(toValue(aspect));
  });

  return {
    aspectElementIcon,
    aspectIcon,
  };
}
</script>

<template>
  <div class="block-function">
    <UiSvg
      v-if="props.withSeparator"
      :style="colors"
      :class="[`block-function__separator--${props.type}`]"
      name="function-separator"
      color="aspect"
      class="block-function__separator"
    />
    <FunctionCard
      :style="colors"
      :function="props.functionName"
      :aspect-element-icon="aspectElementIcon"
      :aspect-name="aspectName"
      :aspect-icon="aspectIcon"
      :aspect-variant="aspectVariant"
      :disabled="props.isDisabled"
    />
  </div>
</template>

<style lang="scss" scoped>
.block-function {
  position: relative;

  &__separator {
    width: 32px;
    height: 8px;
    opacity: 0.5;

    position: absolute;
    top: -8px;

    &--right {
      right: 64px;
    }

    &--left {
      left: 64px;
    }
  }
}
</style>

<script lang="ts" setup>
import { testsModel } from "@features/tests";
import { clampPercent } from "@shared/lib/clampPercent";
import type {
  TallyPoleType,
  TallyKeyType,
  TallyType,
  TextColorType,
} from "@types";

const props = defineProps<{
  tally: TallyType;
  tallyKey: TallyKeyType;
  tallyPole: TallyPoleType;
  maxPerPair: number;
  color: TextColorType;
  label: string;
}>();

const isPoleActive = computed(() => {
  return testsModel.isTallyPoleActive(
    props.tallyPole,
    props.tally,
    props.tallyKey,
  );
});

const isPoleNeutral = computed(() => {
  return testsModel.isTallyPoleNeutral(props.tally, props.tallyKey);
});

const percentHalf = computed(() => {
  if (isPoleActive.value) {
    return clampPercent(
      (Math.abs(props.tally[props.tallyKey]) / props.maxPerPair) * 100,
    );
  }

  return 0;
});

const isLeft = computed(() => props.tallyPole == "left");

const isPreferredZero = computed(() => {
  return ["rational", "sensory"].includes(props.tallyKey) === isLeft.value;
});

const { isTitleColored, titleColor } = useTitleColor(
  () => props.color,
  isPoleActive,
  isPoleNeutral,
  isPreferredZero,
);

const labelWithPoints = computed(() => {
  const points = Math.abs(props.tally[props.tallyKey]);

  if (isPoleNeutral.value && isPreferredZero.value) {
    return `${props.label} 0`;
  }

  return isPoleActive.value ? `${props.label} +${points}` : props.label;
});

// inline composables
function useTitleColor(
  color: MaybeRefOrGetter<TextColorType>,
  isPoleActive: MaybeRefOrGetter<boolean>,
  isPoleNeutral: MaybeRefOrGetter<boolean>,
  isPreferredZero: MaybeRefOrGetter<boolean>,
) {
  const isTitleColored = computed(() => {
    return (
      (toValue(isPoleNeutral) && toValue(isPreferredZero)) ||
      toValue(isPoleActive)
    );
  });

  const titleColor = computed<TextColorType>(() => {
    return isTitleColored.value ? toValue(color) : "white";
  });

  return {
    isTitleColored,
    titleColor,
  };
}
</script>

<template>
  <UiText
    :color="titleColor"
    :class="[
      {
        'scale-title--inactive': !isTitleColored,
      },
      `scale-title--${props.tallyPole}`,
    ]"
    preset="small"
  >
    {{ labelWithPoints }}
  </UiText>
  <UiProgressBar
    v-slot="{ colorClass }"
    :percent="percentHalf"
    :color="props.color"
    :is-reversed="isLeft"
    class="scale-bar"
  >
    <div
      v-if="isPoleNeutral && isPreferredZero"
      :class="[colorClass, `scale-dot--${props.tallyPole}`]"
      class="scale-dot"
    />
  </UiProgressBar>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.scale-title {
  font-size: 12px;
  color: colors.$white;

  &--inactive {
    opacity: 0.5;
  }

  &--left {
    justify-self: start;
  }

  &--right {
    justify-self: end;
  }
}

.scale-bar {
  border-radius: 2px;
  background-color: rgba(colors.$white, 0.2);
}

.scale-dot {
  flex: 0 0 6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;

  &--left {
    margin-right: 2px;
  }

  &--right {
    margin-left: 2px;
  }
}
</style>

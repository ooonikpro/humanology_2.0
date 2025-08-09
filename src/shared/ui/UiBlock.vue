<script setup lang="ts">
type ButtonVariant = "accent" | "secondary" | "ghost" | "white" | "black";

const { variant = "accent", ...props } = defineProps<{
  variant?: ButtonVariant;
  isInactive?: boolean;
}>();
</script>

<template>
  <slot
    :classes="{
      'ui-block--inactive': props.isInactive,
      [`ui-block ui-block--${variant}`]: true,
    }"
  />
</template>

<style lang="scss">
@use "@shared/styles/variables/colors";

.ui-block {
  padding: 0 12px;
  height: 44px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  border: 1px solid transparent;
  border-radius: 4px;

  user-select: none;
  cursor: pointer;
}

.ui-block--accent {
  background-color: colors.$accent;
  color: colors.$white;
}

.ui-block--secondary {
  background-color: colors.$white;
  color: colors.$black;
  opacity: 0.75;
}

.ui-block--ghost {
  background-color: transparent;
  color: colors.$accent;
}

.ui-block--white {
  background-color: colors.$white;
  color: colors.$black;
  border-color: rgba(colors.$black, 0.1);
}

.ui-block--white.ui-block--inactive {
  opacity: 1;
}

.ui-block--black {
  background-color: colors.$black;
  color: colors.$white;
}

.ui-block--inactive {
  opacity: 0.6;
  pointer-events: none;
}
</style>

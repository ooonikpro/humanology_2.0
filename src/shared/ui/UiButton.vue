<script setup lang="ts">
import { computed } from 'vue';

defineOptions({ name: 'UiButton' });

type ButtonVariant = 'accent' | 'secondary' | 'ghost' | 'white' | 'black';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonTag = 'button' | 'span' | 'div';

const props = withDefaults(defineProps<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  block?: boolean;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  href?: string;
  as?: ButtonTag;
  ariaLabel?: string;
}>(), {
  variant: 'accent',
  size: 'medium',
  disabled: false,
  block: false,
  type: 'button',
  as: 'button',
});

const isRouterLink = computed(() => Boolean(props.to));
const isHrefLink = computed(() => Boolean(props.href));

const rootClasses = computed(() => [
  'ui-button',
  `ui-button--${props.variant}`,
  `ui-button--${props.size}`,
  { 'ui-button--block': props.block, 'ui-button--disabled': props.disabled },
]);
</script>

<template>
  <!-- NuxtLink mode -->
  <NuxtLink
    v-if="isRouterLink"
    :to="props.to!"
    :aria-label="ariaLabel"
    :class="rootClasses"
  >
    <slot />
  </NuxtLink>

  <!-- Anchor mode -->
  <a
    v-else-if="isHrefLink"
    :href="props.href!"
    :aria-label="ariaLabel"
    :class="rootClasses"
  >
    <slot />
  </a>

  <!-- Plain tag mode (default) -->
  <component
    :is="props.as"
    v-else
    :aria-label="ariaLabel"
    :disabled="props.as === 'button' ? props.disabled : undefined"
    :type="props.as === 'button' ? props.type : undefined"
    :class="rootClasses"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 4px;
  border: 1px solid transparent;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;

  &--block { width: 100%; }

  &--small { padding: 0 12px; height: 44px; font-size: 18px; border-radius: 4px; }
  &--medium { padding: 0 12px; height: 44px; font-size: 18px; border-radius: 4px; }
  &--large { padding: 0 12px; height: 44px; font-size: 18px; border-radius: 4px; }

  &--accent {
    background-color: colors.$accent;
    color: colors.$white;
  }

  &--secondary { background-color: colors.$white; color: colors.$black; opacity: 0.75; }

  &--ghost {
    background-color: transparent;
    color: colors.$accent;
  }

  /* neutral white button */
  &--white {
    background-color: colors.$white;
    color: colors.$black;
    border-color: rgba(colors.$black, 0.1);
  }

  /* keep white variant visible even when disabled (for promo blocks) */
  &--white.ui-button--disabled { opacity: 1; }

  &--black { background-color: colors.$black; color: colors.$white; }

  &--disabled {
    opacity: 0.6;
    pointer-events: none;
  }
}
</style>




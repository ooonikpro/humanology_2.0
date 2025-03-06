<script lang="ts" setup>
import type { SociotypeDataType } from "@types";

const props = defineProps<SociotypeDataType>();
</script>

<template>
  <div class="sociotype-card-footer">
    <div class="sociotype-card-footer__info-tower">
      <UiSvg :name="props.quadra" size="16" color="quadra" />
      <UiSvg :name="props.role" size="16" color="role" />
      <UiSvg :name="props.tarot" size="16" color="dark-grey" />
    </div>

    <UiText preset="small" color="role">
      {{ props.name }}
    </UiText>
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";

.sociotype-card-footer {
  position: relative;
  height: 24px;
  border-top: 1px solid colors.$role;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::before {
    content: "";
    inset: 0;
    position: absolute;
    opacity: 0.1;
    background-color: colors.$role;
  }

  &__info-tower {
    display: flex;
    align-items: center;
  }
}
</style>

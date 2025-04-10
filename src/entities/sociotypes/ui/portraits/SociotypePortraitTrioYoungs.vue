<script lang="ts" setup>
import SociotypePortrait from "./SociotypePortrait.vue";
import { YOUNGS } from "../../config";

const youngs = YOUNGS[0];
</script>

<template>
  <figure class="sociotype-portrait-trio-youngs">
    <SociotypePortrait
      v-for="young in youngs"
      :key="young[0]"
      :gender="young[1]"
      :age="young[2]"
      :id="young[0]"
      class="sociotype-portrait-trio-youngs__img"
    />
  </figure>
</template>

<style lang="scss" scoped>
.sociotype-portrait-trio-youngs {
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: flex-end;

  &__img {
    --width: clamp(118px, 33%, 200px);
    position: relative;
    flex: 0 0 var(--width);
    width: var(--width);

    &:nth-child(1) {
      transform: translateX(115%);
    }

    &:nth-child(2) {
      transform: translateX(65%);
    }

    &:nth-child(3) {
      transform: translateX(15%);
    }
  }
}
</style>

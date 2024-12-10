<script lang="ts" setup>
import { random } from "@shared/lib";
import SociotypePortrait from "./SociotypePortrait.vue";
import { KIDS } from "../../config";

const kids = KIDS[random(KIDS.length - 1)];
</script>

<template>
  <figure class="sociotype-portrait-trio-kids">
    <SociotypePortrait
      v-for="kid in kids"
      :key="kid[0]"
      :gender="kid[1]"
      :age="kid[2]"
      :id="kid[0]"
      class="sociotype-portrait-trio-kids__img"
    />
  </figure>
</template>

<style lang="scss" scoped>
.sociotype-portrait-trio-kids {
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: flex-end;

  &__img {
    --width: clamp(90px, 33%, 200px);
    position: relative;
    flex: 0 0 var(--width);
    width: var(--width);

    &:nth-child(1) {
      transform: translateX(120%);
    }

    &:nth-child(2) {
      transform: translateX(70%);
    }

    &:nth-child(3) {
      transform: translateX(20%);
    }
  }
}
</style>

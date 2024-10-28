<script lang="ts" setup>
import { random } from "@shared/lib";
import SociotypePortrait from "./SociotypePortrait.vue";
import { KIDS } from "../../config";

const kids = KIDS[random(KIDS.length - 1)];
</script>

<template>
  <figure class="sociotype-portrait-trio-kids">
    <SociotypePortrait
      class="sociotype-portrait-trio-kids__img"
      v-for="kid in kids"
      :key="kid[0]"
      :id="kid[0]"
      :gender="kid[1]"
      :age="kid[2]"
    />
  </figure>
</template>

<style lang="scss" scoped>
.sociotype-portrait-trio-kids {
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  height: max-content;

  &__img {
    --width: clamp(90px, 33%, 200px);
    flex: 0 0 var(--width);
    width: var(--width);
  }
}
</style>

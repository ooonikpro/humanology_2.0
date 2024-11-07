<script lang="ts" setup>
import {
  type Gender,
  type SociotypeDataType,
  type SociotypeIdType,
} from "@types";
import { SociotypeModel } from "@entities/sociotypes";
const getRandomIndex = <T,>(arr: Array<T>) =>
  arr[Math.floor(Math.random() * arr.length)];

const sociotypes = SociotypeModel.getAllSociotypes();

const randomKids = () => {
  const ids = [];
  for (let i = 0; i < 3; i++) {
    const {id, gender} = getRandomIndex<SociotypeDataType>(sociotypes)
    ids[i] = {id: id.toLowerCase(), gender};
  }
  return ids as {id: Lowercase<SociotypeIdType>, gender: Gender}[]
};

const kids = randomKids();
console.log(kids);
const key = ({
  id,
  gender,
}: {
  id: Lowercase<SociotypeIdType>;
  gender: Gender;
}) => `${id}-${gender}-kid`;
</script>

<template>
  <figure class="img-set">
    <img
      class="img-set__img"
      v-for="{ id, gender } in kids"
      :src="`/assets/images/portraits/${key({ id, gender })}.png`"
      :alt="key({ id, gender })"
      :key="key({ id, gender })"
    />
  </figure>
</template>

<style lang="scss" scoped>
.img-set {
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  height: max-content;
  &__img {
    --width: clamp(90px, 33%, 200px);
    flex: 0 0 var(--width);
    width: var(--width);
    aspect-ratio: 1/1;

    &:not(:first-child) {
      margin-left: -20px;
    }
  }
}
</style>

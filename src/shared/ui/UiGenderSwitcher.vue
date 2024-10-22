<template>
  <div
    class="switcher"
    :class="{ male: gender === 'male', female: gender === 'female' }"
    @click="switchGender"
  >
    <div class="circle">
      <img
        v-if="gender === 'male'"
        src="/assets/icons/masculine.svg"
        alt="Male"
      />
      <img
        v-else
        src="/assets/icons/feminine.svg"
        alt="Female"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'UiGenderSwitcher',
  props: {
    initialGender: {
      type: String as () => 'male' | 'female',
      default: 'male',
    },
  },
  emits: ['switch'],
  setup(props, { emit }) {
    const gender = ref<'male' | 'female'>(props.initialGender);

    const switchGender = () => {
      gender.value = gender.value === 'male' ? 'female' : 'male';
      emit('switch', gender.value);
    };

    return {
      gender,
      switchGender,
    };
  },
});
</script>

<style scoped lang="scss">
@import '@shared/styles/colors.scss';

.switcher {
  display: flex;
  align-items: center;
  width: 32px;
  height: 20px;
  border-radius: 10px;
  background-color: $color-basic-black;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: $color-basic-white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4px;
    transition: left 0.3s ease;

  }

  &.female .circle {
    left: calc(100% - 20px); /* Перемещение вправо для женского пола */
  }
}
</style>

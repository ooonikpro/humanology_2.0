<script lang="ts" setup>
import type { Gender, SociotypeAgeType, SociotypeDataType } from "@types";
import { GenderEnum } from "@shared/constants";
import { useInjectAppRoutes } from "@shared/hooks/useAppRoutes";

import SociotypeQuadraCircle from "../quadras/SociotypeQuadraCircle.vue";
import SociotypePortrait from "../portraits/SociotypePortrait.vue";
import SociotypeCardRationalsBlock from "./SociotypeCardRationalsBlock.vue";

const $appRoutes = useInjectAppRoutes();
const router = useRouter();

const { age = "young", ...props } = defineProps<{
  mini?: boolean;
  gender?: Gender | GenderEnum;
  age?: SociotypeAgeType;
  data: SociotypeDataType;
  isShowToggle?: boolean;
  bordered?: boolean;
}>();

const genderModel = ref(toValue(props.gender) ?? GenderEnum.male);

const handleClick = () => {
  const targetRoute =
    age === "kid"
      ? $appRoutes.kidsCard(props.data.id)
      : $appRoutes.sociotypeCard(props.data.id);

  if (targetRoute !== router.currentRoute.value.fullPath) {
    router.push(targetRoute);
  }
};
</script>

<template>
  <div
    :class="{
      'sociotype-card--mini': props.mini,
      'sociotype-card--bordered': props.bordered,
    }"
    class="sociotype-card"
    role="button"
    tabindex="0"
    data-no-image-processing
    data-yandex-disable-smart-reader
    data-turbo="false"
    @click="handleClick"
    @contextmenu.prevent
  >
    <div class="sociotype-card__content">
      <SociotypeCardRationalsBlock
        :mind-key="props.data.mindKey"
        class="sociotype-card__rationals"
      />

      <slot name="header" />

      <template v-if="!$slots.photo">
        <UiText
          preset="title-alternative"
          color="role"
          class="sociotype-card__title"
        >
          {{ props.data.name }}
        </UiText>

        <slot name="groups-and-quadras"></slot>

        <slot name="population"></slot>
      </template>

      <template v-else>
        <div class="sociotype-card__photo">
          <slot name="photo" />
        </div>
      </template>

      <SociotypeQuadraCircle
        :id="props.data.id"
        class="sociotype-card__quadra-circle"
      />

      <SociotypePortrait
        :gender="genderModel"
        :age="age"
        :id="props.data.id"
        class="sociotype-card__portrait"
      />

      <UiGenderToggle
        v-if="props.isShowToggle && !props.mini"
        class="sociotype-card__gender-switcher"
        v-model="genderModel"
      />
    </div>

    <slot name="footer" />
  </div>
</template>

<style lang="scss" scoped>
@use "@shared/styles/variables/colors";
@use "@shared/styles/mixins/bem";

.sociotype-card {
  position: relative;
  border-radius: 12px;
  background: colors.$white;
  user-select: none;
  -webkit-user-drag: none;


  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
    padding: 12px 12px 12px 12px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, colors.$role 0%, colors.$quadra 100%);
      opacity: 0.1;
      z-index: 0;
    }
  }

  &__rationals {
    position: absolute;
    right: 12px;
    top: 12px;
    z-index: 1;
  }

  &__photo {
    width: 96px;
    height: 96px;
    margin: 8px 8px 0;
  }

  &__title {
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    z-index: 1;
  }

  &__groups-quadras {
    margin-top: 8px;
    position: relative;
    z-index: 1;
  }

  &__population {
    position: relative;
    z-index: 1;
  }

  &__quadra-circle,
  &__portrait {
    position: absolute;
    height: min(50vw, 90%);
    aspect-ratio: 1/1;
    bottom: 0;
  }

  &__quadra-circle {
    top: 0;
    right: 8px;
    margin: auto;
  }

  &__portrait {
    right: 0;
    z-index: 1;
  }

  &__gender-switcher {
    position: absolute;
    right: 12px;
    bottom: 12px;
    z-index: 1;
  }

  &--bordered {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    
    // Если нет слотов groups-and-quadras и population, карточка становится компактной
    &:not(:has(.sociotype-card__groups-quadras)):not(:has(.sociotype-card__population)) {
      .sociotype-card__content {
        height: 96px;
      }
    }
  }



  &--mini {
    border-radius: 12px;
    box-shadow: 0 1px 1px 0 colors.$shadow;
    cursor: pointer;
  }

  @include bem.modificatorForChildren("mini") {
    &__content {
      border-radius: 12px;
    }
    
    &__title {
      font-size: min(7vw, 28px);
      margin: 0 0 8px;
    }

    &__quadra-circle,
    &__portrait {
      height: min(32vw, 80%);
    }
  }
}
</style>

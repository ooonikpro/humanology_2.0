<script setup lang="ts">
import { computed, defineProps, toValue } from "vue";
import type { SociotypeDataType, Temperament } from "@types";

// import UiColumnDual from "@shared/ui/UiColumnDual.vue";
import UiText from "@shared/ui/UiText.vue";
import UiSvg from "@shared/ui/UiSvg.vue";

import model from "../model";
import { TemperamentEnum } from "../config";
import useSociotypeColors from "../lib/hooks/useSociotypeColors";

import SociotypeSignsBlock from "./SociotypeSignsBlock.vue";

const props = defineProps<SociotypeDataType>();

const quadra = computed(() => toValue(props).quadra);
const role = computed(() => toValue(props).role);
const colors = computed(() => useSociotypeColors({ quadra, role }));

const data = computed(() => model.getTemperanment(props.temperament));
const motivation = computed(() => model.getMotivation(props.stimulant));
const communicationStyle = computed(() =>
  model.getCommunicationStyle(props.communication),
);
const companion = computed(() => model.getCompanion(props.companion));
const mindset = computed(() => model.getMindset(props.mindset));
const alignment = computed(() => model.getAlignment(props.alignment));
const gender = computed(() => model.getGender(props.gender));
const zaps = computed(() => TemperamentEnum[props.temperament]);

// const bg = colors.value["--color-quadra"];
// const clr = colors.value["--bg-quadra"];
// const rl = colors.value["--color-role"];
</script>

<template>
  <!--
    holeric - 0
    flegmatic - 1
    melanholic - 2
    sanguine - 3
  -->

  <SociotypeSignsBlock class="sociotype-mentality" title="Ментальность">
    <div>
      <!-- 1 -->
      <div>
        <UiText tag="h4" class="title">Темперамент</UiText>
        <div class="wrapper">
          <UiText
            tag="span"
            class="text"
            :style="{ color: colors.value['--color-role'] }"
          >
            {{ data.type }}
          </UiText>
          <div class="icons">
            <UiSvg
              v-for="n in 4"
              :style="[
                n <= zaps
                  ? { color: colors.value['--color-role'] }
                  : { color: 'inherit' },
              ]"
              :key="n"
              name="zap"
            />
          </div>
        </div>
        <UiText tag="p" class="description">
          {{ data.label }}
        </UiText>
      </div>
    </div>

    <!-- 2 дуал -->
    <hr />
    <div class="ui-column-dual">
      <div>
        <UiText tag="h4" class="ui-column-dual__title">Стимул</UiText>
        <UiText
          tag="p"
          class="ui-column-dual__text"
          :style="{ color: colors.value['--color-role'] }"
        >
          {{ motivation }}
        </UiText>
      </div>
      <div>
        <UiText tag="h4" class="ui-column-dual__title">Характер</UiText>
        <UiText tag="p" class="ui-column-dual__text">
          <UiText tag="span">{{ gender }} </UiText>
          <UiSvg name="male" class="icon" />
        </UiText>
      </div>
    </div>
    <!-- 3 дуал -->
    <hr />
    <div class="ui-column-dual">
      <div>
        <UiText tag="h4" class="title">Стиль общения</UiText>
        <UiText tag="p" class="ui-column-dual__text"
          >``
          {{ communicationStyle }}
        </UiText>
      </div>
      <div>
        <UiText tag="h4" class="title">Собеседник</UiText>
        <UiText tag="p" class="ui-column-dual__text">{{ companion }}</UiText>
      </div>
    </div>
    <!-- 4 -->
    <hr />
    <div>
      <UiText tag="h4" class="title">Мышление</UiText>
      <UiText tag="p" class="ui-column-dual__text">
        {{ mindset }}
      </UiText>
    </div>
    <!-- 5 -->
    <hr />
    <div>
      <UiText tag="h4" class="title">Мировоззрение</UiText>
      <UiText tag="p" class="ui-column-dual__text">{{ alignment }}</UiText>
    </div>
  </SociotypeSignsBlock>
</template>

<style scoped lang="scss">
@use "@shared/styles/variables/colors";

.sociotype-mentality {
  .wrapper {
    display: flex;
    align-items: center;
    gap: 2px;

    .icons {
      display: inline-flex;
      height: 20px;
    }
  }
  .title {
    font-size: 15px;
    line-height: 20px;
    opacity: 0.5;
    color: colors.$black;
  }

  .text {
    font-size: 18px;
    line-height: 24px;
    // color: v-bind('colors.value[ "--color-role"]');
  }

  .description {
  }

  hr {
    opacity: 0.1;
    margin: 8px 0;
  }
}

.ui-column-dual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;

  &__title {
    font-size: 15px;
    line-height: 20px;
    opacity: 0.5;
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 4px;
    color: colors.$black;

    .icon {
      width: 20px;
      height: 20px;
    }
  }
  &__description {
  }
}
</style>

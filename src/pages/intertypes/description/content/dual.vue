<script lang="ts" setup>
import { SociotypesDuoByIntertypeWidget } from "@widgets/sociotypes";
import type { IntertypeIdType } from "@types";
import { UiText } from "@shared/ui";

const props = defineProps<{ intertypeId: IntertypeIdType }>();
</script>

<template>
  <div>
    <UiText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
      accusantium consequatur consequuntur eaque exercitationem iusto, magni
      minus mollitia neque nostrum perferendis possimus quam quas, quasi
      quibusdam sit totam voluptates voluptatibus!
    </UiText>

    <br />

    <UiText>
      <UiText force-tag="span" color="fire">Lorem</UiText>
      ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium
      consequatur consequuntur eaque exercitationem iusto, magni minus mollitia
      neque nostrum perferendis possimus quam quas, quasi quibusdam sit totam
      voluptates
      <span class="g-color--water">voluptatibus</span>
      !
    </UiText>
    <UiText>Это пример как потом использовать эту штуку</UiText>
    <br />

    <SociotypesDuoByIntertypeWidget
      :intertypeId="props.intertypeId"
      leftSociotypeId="ENTP"
      leftGender="male"
      rightSociotypeId="ISFP"
      rightGender="female"
    />
  </div>
</template>

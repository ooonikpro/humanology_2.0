<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute, useRouter, type LocationQuery } from "vue-router";

const props = defineProps<{
  predicate: (query: LocationQuery) => boolean;
}>();

const route = useRoute();
const router = useRouter();

const isOpen = ref(false);

const handleOpen = () => {
  isOpen.value = true;
};
const handleClose = () => {
  isOpen.value = false;
};
const handleAfterClose = () => {
  router.replace(route.path.split("?")?.[0] ?? route.path);
};

watch(
  () => route.query,
  (newQuery) => {
    if (props.predicate(newQuery)) {
      handleOpen();
    } else {
      handleClose();
    }
  },
  { immediate: true },
);
</script>

<template>
  <Teleport to="body">
    <slot
      v-bind="{
        isOpen,
        data: {
          ...route.params,
          ...route.query,
        },
        handleOpen,
        handleClose,
        handleAfterClose,
      }"
    ></slot>
  </Teleport>
</template>

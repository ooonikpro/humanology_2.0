<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute, useRouter, type LocationQueryRaw } from "vue-router";

defineSlots<{
  default(props: {
    isOpen: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>;
    handleOpen: () => void;
    handleClose: () => void;
    handleAfterClose: () => void;
  }): unknown;
}>();

const props = defineProps<{
  predicate: (query: LocationQueryRaw) => boolean;
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
  router.replace(route.fullPath);
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

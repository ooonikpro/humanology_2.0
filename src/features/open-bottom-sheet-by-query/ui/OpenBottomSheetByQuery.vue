<script lang="ts" setup>
import { useRoute, useRouter } from "@kitbag/router";
import { ref, watch } from "vue";

const props = defineProps<{ predicate: (query: URLSearchParams) => boolean }>();

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  router.replace(route.href.split("?")?.[0] ?? route.href);
};

watch(
  () => route.query,
  () => {
    if (props.predicate(route.query)) {
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
          ...Object.fromEntries(route.query.entries()),
        },
        handleOpen,
        handleClose,
        handleAfterClose,
      }"
    ></slot>
  </Teleport>
</template>

import type { MaybeRefOrGetter, ShallowRef } from "vue";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

const disableScroll = (container: HTMLElement) => {
  document.documentElement.style.overflow = "hidden";
  disableBodyScroll(container);
};

const useBodyScrollLock = <T extends HTMLElement>(
  needDisable: Exclude<MaybeRefOrGetter<boolean>, boolean>,
  containerRef: Readonly<ShallowRef<T | null>>,
) => {
  onMounted(() => {
    if (toValue(needDisable) && containerRef.value) {
      disableScroll(containerRef.value);
    }

    onUnmounted(clearAllBodyScrollLocks);
  });

  watch(needDisable, (isTrue) => {
    if (isTrue) {
      nextTick(() => {
        disableScroll(containerRef.value as T);
      });
    } else {
      enableBodyScroll(containerRef.value as T);
      document.documentElement.style.overflow = "";
    }
  });
};

export default useBodyScrollLock;

import type { ShallowRef } from "vue";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

const useBodyScrollLock = <T extends HTMLElement>(
  watchSourceFn: () => boolean,
  containerRef: Readonly<ShallowRef<T | null>>,
) => {
  onMounted(() => {
    watch(
      watchSourceFn,
      (isTrue) => {
        if (isTrue) {
          document.documentElement.style.overflow = "hidden";
          disableBodyScroll(containerRef.value as T);
        } else {
          enableBodyScroll(containerRef.value as T);
          document.documentElement.style.overflow = "";
        }
      },
      {
        immediate: true,
      },
    );
  });

  onUnmounted(() => {
    clearAllBodyScrollLocks();
  });
};

export default useBodyScrollLock;

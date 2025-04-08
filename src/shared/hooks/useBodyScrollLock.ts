import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";

const useBodyScrollLock = (watchSourceFn: () => boolean) => {
  onMounted(() => {
    watch(
      watchSourceFn,
      (isTrue) => {
        if (isTrue) {
          disableBodyScroll(document.body);
        } else {
          enableBodyScroll(document.body);
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

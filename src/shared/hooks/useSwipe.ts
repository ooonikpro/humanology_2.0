import { computed, ref, type ComputedRef, type Ref } from "vue";

type UseSwipeReturns = {
  isSwiping: Ref<boolean>;
  swipeValue: Ref<number>;
  swipePercentValue: ComputedRef<`${number}%`>;
  handleSwipeStart: (e: PointerEvent) => void;
  handleSwipe: (e: PointerEvent) => void;
  handleSwipeEnd: (e: PointerEvent) => void;
};

/**
 * Composable для работы с pointer events
 * @param pushToBottomCondition - функция, которая будет вызвана в момент, когда пользователь убрал палец, чтобы решить, какое значение является пограничным для докрутки вверх/вниз
 * @example (value) => value > 35 // -> push to top
 * @param pushToBottomHandle - функция, которая будет вызвана в момент, когда пользователь убрал палец, если pushToTopCondition сработает
 * @example // pushToHandle
 * () => hideBottomSheet();
 * // функция, в которой вызывается pushToHandle
 * const pushToBySwipeValue = () => {
    isSwiping.value = false;
    if (pushToBottomCondition(swipeValue.value)) pushToHandle();
    else swipeValue.value = 0;
  };
 * @returns { UseSwipeReturns }
 * @example
 * const {
    isSwiping,
    swipeValue,
    swipePercentValue,
    handleSwipeStart,
    handleSwipe,
    handleSwipeEnd,
  } = useSwipe((value) => value > 35, () => hideBottomSheet())
 */

export const useSwipe = (
  pushToBottomCondition: (value: number) => boolean,
  pushToBottomHandle: () => void,
): UseSwipeReturns => {
  const isSwiping = ref(false);

  const swipeValue = ref(0);

  const swipePercentValue = computed<`${number}%`>(() => {
    if (swipeValue.value < 0) return "0%";
    return `${swipeValue.value}%`;
  });

  const pushToBySwipeValue = () => {
    isSwiping.value = false;
    if (pushToBottomCondition(swipeValue.value)) pushToBottomHandle();
    else swipeValue.value = 0;
  };

  const swipe = (e: PointerEvent) => (swipeValue.value += e.movementY / 5);

  const handleSwipeStart = (e: PointerEvent) => {
    isSwiping.value = true;
    swipe(e);
  };

  const handleSwipe = (e: PointerEvent) => swipe(e);

  const handleSwipeEnd = (e: PointerEvent) => {
    isSwiping.value = false;
    swipe(e);
    pushToBySwipeValue();
  };

  return {
    isSwiping,
    swipeValue,
    swipePercentValue,
    handleSwipeStart,
    handleSwipe,
    handleSwipeEnd,
  };
};

import { scrollTabContainerToElementByIndex } from "@shared/lib";
import type { ShallowRef } from "vue";

type FnType = (id: string) => void;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
export const useVariousContentContainer = ({
  containerRef,
  defaultContentId,
  syncWithUrl = false,
}: {
  containerRef: Readonly<ShallowRef<HTMLElement | null>>;
  defaultContentId: string;
  syncWithUrl?: boolean;
}) => {
  const route = useRoute();
  const router = useRouter();

  const content = ref<string[]>([]);
  const currentContentId = ref<string | null>(defaultContentId);

  const currentContentElementIndex = computed(() =>
    toValue(content).indexOf(toValue(currentContentId) as string),
  );

  const setCurrentContentId = (id: string | null) => {
    currentContentId.value = id;
  };
  const showContentWithId = (id: string) => {
    if (syncWithUrl) {
      router.push({ hash: `#${id}` });
    }

    setCurrentContentId(id);
  };
  const addContent = (id: string) => content.value.push(id);
  const removeContent = (id: string) => {
    content.value = content.value.filter((v) => v !== id);
  };

  provide("currentContentId", currentContentId);
  provide("showContentWithId", showContentWithId);
  provide("addContent", addContent);
  provide("removeContent", removeContent);

  watchEffect(() => {
    if (syncWithUrl) {
      const hashContentId = route.hash.replace("#", "");

      if (content.value.includes(hashContentId)) {
        setCurrentContentId(hashContentId);
      }
    }
  });
  watchEffect(() => {
    scrollTabContainerToElementByIndex(
      toValue(containerRef),
      toValue(currentContentElementIndex),
    );
  });
};
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
export const useVariousTabContent = (contentId: string) => {
  const addContent = inject<FnType>("addContent");
  const currentContentId = inject<Ref<string> | undefined>("currentContentId");

  addContent?.(contentId);

  return computed(() => contentId === currentContentId?.value);
};
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
export const useVariousTab = (contentId: string) => {
  const showContentWithId = inject<FnType>("showContentWithId");
  const currentContentId = inject<Ref<string> | undefined>("currentContentId");

  return {
    setOwnContentId: () => showContentWithId?.(contentId),
    isSelected: computed(() => contentId === currentContentId?.value),
  };
};

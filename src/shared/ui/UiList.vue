<script lang="ts">
import type { IconNameType, IconSizeType, TextColorType } from "@types";
import {
  defineComponent,
  h,
  mergeProps,
  type PropType,
  type VNode,
  type VNodeNormalizedChildren,
  type VNodeTypes,
} from "vue";
import UiSvg from "./UiSvg.vue";

const isCommentVNode = (type: VNodeTypes) =>
  type.toString() === "Symbol(v-cmt)";
const isVForVNode = (type: VNodeTypes) => type.toString() === "Symbol(v-fgt)";

type RenderListItemPropsType = {
  name: IconNameType;
  color: TextColorType;
  size: IconSizeType;
  children: VNodeNormalizedChildren;
  props: {
    [key: string]: unknown;
  } | null;
};

const listDefaultProps = {
  class: "ui-list",
} as const;

const listItemDefaultProps = {
  class: "ui-list__item",
} as const;

const renderListItem = ({
  color,
  name,
  size,
  children,
  props,
}: RenderListItemPropsType) => {
  const slots = {
    default: () => [h(UiSvg, { name, color, size }), children],
  };

  return h("li", props, slots);
};

const renderListContent = (
  content: VNode[],
  {
    color,
    name,
    size,
  }: Pick<RenderListItemPropsType, "name" | "color" | "size">,
) => {
  return content.map((element) => {
    const { type, children } = element;

    if (isVForVNode(type))
      return (children as VNode[])!.map((vForEl) => {
        if (!isCommentVNode(vForEl.type)) {
          return renderListItem({
            color,
            name,
            size,
            props: mergeProps(
              vForEl.component?.props ?? {},
              listItemDefaultProps,
            ),
            children: vForEl.children,
          });
        }
      });

    if (!isCommentVNode(type)) {
      return renderListItem({
        color,
        name,
        size,
        props: mergeProps(element.component?.props ?? {}, listItemDefaultProps),
        children,
      });
    }
  });
};

export default defineComponent({
  name: "UiList",
  props: {
    iconName: { type: String as PropType<IconNameType>, required: true },
    iconColor: { type: String as PropType<TextColorType>, required: true },
    iconSize: {
      type: String as PropType<Extract<IconSizeType, "16" | "24">>,
      required: true,
    },
  },
  setup(props, { slots }) {
    return () =>
      h("ul", mergeProps({}, listDefaultProps), {
        default: () => [
          slots.title?.(),
          renderListContent(slots.default?.() ?? [], {
            color: props.iconColor,
            name: props.iconName,
            size: props.iconSize,
          }),
        ],
      });
  },
});
</script>

<style lang="scss" scoped>
.ui-list {
  list-style: none;

  > *:not(:first-child) {
    margin-top: 10px;
  }

  &__item {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
  }
}
</style>

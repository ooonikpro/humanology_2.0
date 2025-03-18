const scrollContainerToElementByIndex = (
  container: HTMLElement | null,
  index: number,
  behavior: ScrollBehavior = "smooth",
): void => {
  if (container) {
    const element = container.children[index];

    if (element) {
      element.scrollIntoView({
        inline: "center",
        block: "nearest",
        behavior,
      });
    }
  }
};

export default scrollContainerToElementByIndex;

const scrollContainerToElementByIndex = (
  container: HTMLElement | null,
  index: number,
): void => {
  if (container) {
    const element = container.children[index];

    if (element) {
      element.scrollIntoView({
        inline: "center",
        block: "center",
        behavior: "smooth",
      });
    }
  }
};

export default scrollContainerToElementByIndex;

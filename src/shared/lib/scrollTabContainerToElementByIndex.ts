const scrollTabContainerToElementByIndex = (
  container: HTMLElement | null,
  index: number,
  behavior: ScrollBehavior = "smooth",
): void => {
  if (container) {
    let scrollLeft;
    const element = container.children[index] as HTMLElement;
    const elementScrollLeft = element.offsetLeft - container.offsetLeft;

    if (elementScrollLeft + element.clientWidth > container.clientWidth) {
      scrollLeft = elementScrollLeft / 2;
    } else {
      scrollLeft = elementScrollLeft - element.clientWidth;
    }

    container.scrollTo({
      left: scrollLeft,
      behavior,
    });
  }
};

export default scrollTabContainerToElementByIndex;

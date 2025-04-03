const scrollTabContainerToElementByIndex = (
  container: HTMLElement | null,
  index: number,
  behavior: ScrollBehavior = "smooth",
): void => {
  if (container) {
    const element = container.children[index] as HTMLElement;

    const childOffsetLeft = element.offsetLeft - element.offsetWidth;
    const containerScrollLeft = container.scrollLeft + container.offsetWidth;

    let scrollLeft = container.scrollLeft;

    if (container.scrollLeft > element.offsetLeft) {
      scrollLeft = element.offsetLeft;
    }

    if (containerScrollLeft < childOffsetLeft) {
      scrollLeft = container.scrollLeft + childOffsetLeft - containerScrollLeft;
    }

    container.scrollTo({
      left: scrollLeft,
      behavior,
    });
  }
};

export default scrollTabContainerToElementByIndex;

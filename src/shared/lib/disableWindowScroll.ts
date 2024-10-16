const disableWindowScroll = () => {
  window.addEventListener("scroll", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  });
};

export default disableWindowScroll;

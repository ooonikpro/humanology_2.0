const debounce = <F extends Function>(fn: F, timeout = 0) => {
  let timer = setTimeout(() => {});

  // @ts-expect-error
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), timeout);
  };
};

export default debounce;

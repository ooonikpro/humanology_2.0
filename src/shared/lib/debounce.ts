// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const debounce = <F extends Function>(fn: F, timeout = 0) => {
  let timer = setTimeout(() => {});

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), timeout);
  };
};

export default debounce;

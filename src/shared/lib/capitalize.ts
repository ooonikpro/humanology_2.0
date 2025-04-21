const capitalize = (word: string) => {
  const w = word.toLowerCase();
  return `${w[0].toUpperCase()}${w.substring(1)}`;
};

export default capitalize;

const getFirstSentence = (text: string) => {
  const firstSentenceEnd = text.indexOf(". ");
  return firstSentenceEnd !== -1
    ? text.substring(0, firstSentenceEnd + 1)
    : text;
};

export default getFirstSentence;

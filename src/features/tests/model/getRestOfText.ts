const getRestOfText = (text: string) => {
  const firstSentenceEnd = text.lastIndexOf(". ");
  return firstSentenceEnd !== -1 ? text.substring(firstSentenceEnd + 1) : text;
};

export default getRestOfText;

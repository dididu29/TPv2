export const createTitle = (level, text) => {
  if (level < 1 || level > 6) {
    throw new Error("Invalid heading level. Level should be between 1 and 6.");
  }

  const title = document.createElement(`h${level}`);
  title.textContent = text;
  return title;
};

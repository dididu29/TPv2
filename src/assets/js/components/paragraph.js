export const createParagraph = (text) => {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
};

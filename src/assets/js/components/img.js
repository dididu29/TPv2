export const createImage = (src, alt) => {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  return image;
};

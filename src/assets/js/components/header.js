import { createNav } from "./nav";

export const createHeader = () => {
  const header = document.createElement("header");

  const title = document.createElement("h1");
  title.textContent = "MovieBuzzPalace";

  const nav = createNav();

  header.appendChild(title);
  header.appendChild(nav);

  return header;
};

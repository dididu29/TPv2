export const createNav = () => {
  const nav = document.createElement("nav");

  const link1 = document.createElement("a");
  link1.href = "#";
  link1.textContent = "Home";

  const link2 = document.createElement("a");
  link2.href = "#";
  link2.textContent = "Movies";

  const link3 = document.createElement("a");
  link3.href = "#";
  link3.textContent = "Series";

  const link4 = document.createElement("a");
  link4.href = "#";
  link4.textContent = "Profil";

  nav.appendChild(link1);
  nav.appendChild(link2);
  nav.appendChild(link3);
  nav.appendChild(link4);

  return nav;
};

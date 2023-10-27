export const createList = (items) => {
  const ul = document.createElement("ul");
  items.forEach((itemText) => {
    const li = document.createElement("li");
    li.textContent = itemText;
    ul.appendChild(li);
  });
  return ul;
};

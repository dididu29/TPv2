import { createHeader } from "../components/header";

export const headerPage = () => {
  const header = createHeader();

  document.body.prepend(header);
};

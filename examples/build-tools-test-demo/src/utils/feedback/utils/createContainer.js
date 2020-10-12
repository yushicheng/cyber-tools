import { v4 as uuidv4 } from "uuid";

export default function createContainer() {
  const oContainer = document.createElement("div");
  oContainer.className = uuidv4();
  return oContainer;
};
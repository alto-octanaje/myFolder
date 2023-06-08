import { OPEN_MENU, CLEAR_MENU } from "./typeAction";

export const openMenu = () => {
  return { type: OPEN_MENU, payload: true };
};
export const clearMenu = () => {
  return { type: CLEAR_MENU, payload: false };
};

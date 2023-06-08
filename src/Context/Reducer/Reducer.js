import { OPEN_MENU, CLEAR_MENU } from "../Action/typeAction";
const initialState = {
  menu: false,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      console.log(action.payload);
      return { ...state, menu: action.payload };
    case CLEAR_MENU:
      return { ...state, menu: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;

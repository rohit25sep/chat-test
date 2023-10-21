import { SET_APP_THEME } from "../actionConstants";

const INITIAL_STATE = {
  isDarkMode: false,
};

const themeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_APP_THEME: {
      return {
        ...state,
        isDarkMode: action.payload,
      };
    }
    default:
      return state;
  }
};
export default themeReducer;

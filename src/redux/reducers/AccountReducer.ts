import { SET_USER_DATA } from "../actionConstants";

const INITIAL_STATE = {
  userData: {},
  loading: true,
};

const accountReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      };
    }

    default:
      return state;
  }
};
export default accountReducer;

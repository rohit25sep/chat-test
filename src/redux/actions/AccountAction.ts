import { User } from "models/UserModel";
import { SET_USER_DATA } from "../actionConstants";
import { IApiResponse } from "models/IApiResponse";

export const setAllUsers = (user: IApiResponse<User>) => {
  return {
    type: SET_USER_DATA,
    payload: user,
  };
};

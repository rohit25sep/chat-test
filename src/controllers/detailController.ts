import APIConstants from "core/ApiConstants";
import { User } from "models/UserModel";
import { sendGetRequest } from "services/network/Network";

export const getUserDetail = async () => {
  try {
    return await sendGetRequest<User>(APIConstants.GetUser);
  } catch (e) {
    console.log(e, "", "Error");
  }
};

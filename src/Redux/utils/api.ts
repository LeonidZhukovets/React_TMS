import { create } from "apisauce";
import { RegisterUserPayload } from "../Types/auth";

const API = create({ baseURL: "https://studapi.teachmeskills.by" });

const registerUser = (data: RegisterUserPayload) => {
  return API.post("/auth/users/", data);
};

export default {
  registerUser,
};

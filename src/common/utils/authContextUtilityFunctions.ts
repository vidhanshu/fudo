import { IAuthState, IUser } from "../contexts/auth/types";

export const getUserFromLocalStorage = (): IAuthState => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    if (user) {
      return {
        user: JSON.parse(user),
      };
    }
  }
  return {
    user: null,
  };
};

export const setUserToLocalStorage = (user: IUser) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.token);
  }
};

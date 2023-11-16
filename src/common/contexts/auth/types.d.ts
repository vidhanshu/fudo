import React from "react";

export interface IAuthState {
  user: IUser | null;
}

export interface IAuthContext {
  state: IAuthState;
  dispatch: React.Dispatch<IActionType>;
}

export interface IActionType {
  type: IAuthActions;
  payload: IAuthState;
}

export type IAuthActions = "SET_USER" | "REMOVE_USER";

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
  token: string;
}

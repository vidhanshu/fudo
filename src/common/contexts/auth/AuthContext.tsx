import { FC, createContext, useReducer } from "react";
import { IActionType, IAuthContext, IAuthState } from "./types";
import { getUserFromLocalStorage } from "../../utils/authContextUtilityFunctions";

const INITAL_STATE: IAuthState = {
  user: null,
};

const reducer = (state: IAuthState, action: IActionType) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "REMOVE_USER":
      return INITAL_STATE;
    default:
      return state;
  }
};

export const AuthContext = createContext<IAuthContext>({
  dispatch: () => {},
  state: INITAL_STATE,
});

const AuthContextProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getUserFromLocalStorage());
  
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

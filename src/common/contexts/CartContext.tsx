import { Dispatch, FC, createContext, useContext, useReducer } from "react";
import { ICartType, PaymentMethodType } from "../type";
import { ICartItem } from "@/src/menu/type";
import { AddToCart, ChangePaymentMethod, DecreaseItemCount, IncreaseItemCount, RemoveFromCart , GetCartFromLocalStorage} from "../utils/CartContextReducerFunctions";

export const INITIAL_VALUE: ICartType = {
    items: [],
    paymentMethod: "cash"
}

type ActionType = "ADD_TO_CART" | "REMOVE_FROM_CART" | "DECREASE_ITEM_COUNT" | "INCREASE_ITEM_COUNT" | "CHANGE_PAYMENT_METHOD";

interface IAction {
    type: ActionType;
    payload: ICartItem | string;
}
const reducer = (state: ICartType, action: IAction): ICartType => {
    switch (action.type) {
        case "ADD_TO_CART":
            if (typeof action.payload === 'string') throw new Error("paload can't be string");
            return AddToCart(state, action.payload);
        case "INCREASE_ITEM_COUNT":
            if (typeof action.payload === 'string') throw new Error("paload can't be string");
            return IncreaseItemCount(state, action.payload);
        case "DECREASE_ITEM_COUNT":
            if (typeof action.payload === 'string') throw new Error("paload can't be string");
            return DecreaseItemCount(state, action.payload);
        case "REMOVE_FROM_CART":
            if (typeof action.payload !== 'string') throw new Error("payload has to be string");
            return RemoveFromCart(state, action.payload);
        case "CHANGE_PAYMENT_METHOD":
            if (typeof action.payload !== 'string') throw new Error("payload has to be string");
            console.log("call to hua")
            return ChangePaymentMethod(state, action.payload as PaymentMethodType);
        default:
            return state;
    }
}

interface ICartContext extends ICartType {
    dispatch: Dispatch<IAction>;
}
export const CartContext = createContext<ICartContext>({ ...INITIAL_VALUE, dispatch: () => { } });

export const CartContextProvider: FC<{
    children: React.ReactNode
}> = ({
    children
}) => {
        const [state, dispatch] = useReducer(reducer, GetCartFromLocalStorage());

        return (
            <CartContext.Provider value={{ ...state, dispatch }}>
                {
                    children
                }
            </CartContext.Provider>
        );
    }
import { ICartItem } from "@/src/menu/type";
import { ICartType, PaymentMethodType } from "../type";
import { INITIAL_VALUE } from "../contexts/cart/CartContext";

export const AddToCart = (currentState: ICartType, payload: ICartItem) => {
  const newState = {
    ...currentState,
    items: [...currentState.items, payload],
  };
  SaveCartToLocalStorage(newState);
  return newState;
};

export const RemoveFromCart = (currentState: ICartType, payload: string) => {
  let newState: ICartType = {} as ICartType;
  if (currentState.items.length > 0) {
    newState = {
      ...currentState,
      items: currentState.items.filter((item) => item._id !== payload),
    };
  } else {
    newState = currentState;
  }
  SaveCartToLocalStorage(newState);
  return newState;
};

export const IncreaseItemCount = (
  currentState: ICartType,
  payload: ICartItem
) => {
  const doesExists = currentState.items.find((i) => i._id === payload._id);
  let newState: ICartType = {} as ICartType;
  if (doesExists) {
    newState = {
      ...currentState,
      items: currentState.items.map((item) => {
        if (item._id === payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    };
  } else {
    newState = AddToCart(currentState, payload);
  }
  SaveCartToLocalStorage(newState);
  return newState;
};

export const DecreaseItemCount = (
  currentState: ICartType,
  payload: ICartItem
) => {
  const doesExists = currentState.items.find((i) => i._id === payload._id);
  let newState: ICartType = {} as ICartType;
  if (doesExists) {
    if (doesExists.quantity == 1) {
      newState = RemoveFromCart(currentState, payload._id);
    } else {
      newState = {
        ...currentState,
        items: currentState.items.map((item) => {
          if (item._id === payload._id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    }
  } else {
    newState = currentState;
  }
  SaveCartToLocalStorage(newState);
  return newState;
};

export const ChangePaymentMethod = (
  currentState: ICartType,
  payload: PaymentMethodType
) => {
  const newState = {
    ...currentState,
    paymentMethod: payload as PaymentMethodType,
  };
  SaveCartToLocalStorage(newState);
  return newState;
};

// LocalStorage
export const SaveCartToLocalStorage = (cart: ICartType) => {
  if(typeof window !== "undefined")
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const GetCartFromLocalStorage = () => {
  if(typeof window !== "undefined")
    {
      const cart = localStorage.getItem("cart");
      if (cart) {
        return JSON.parse(cart);
      }
    }
  return INITIAL_VALUE;
};

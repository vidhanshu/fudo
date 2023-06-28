import { ICartItem } from "../menu/type";

export type PaymentMethodType = "cash" | "card" | "upi";

export interface ICartType {
  items: ICartItem[];
  paymentMethod: PaymentMethodType;
}

export interface IMenu {
  _id: string;
  name: string;
  description?: string;
  price: number;
  available: number;
  sold: number;
  image: string;
  tags: string[];
  offer?: number;
  category: string;
}

export interface ICategory {
  _id: string;
  emote: string;
  name: string;
  count: number;
}

export interface ICartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export interface IBillDetail {
  item: number;
  subtotal: number;
  discount: number;
  tax: number;
}
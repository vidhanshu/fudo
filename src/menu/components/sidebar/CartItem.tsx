import React, { FC } from "react";
import { ICartItem } from "../../type";
import Image from "next/image";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useCartContext } from "@/src/common/contexts/useCartContext";

const CartItem: FC<{
  item: ICartItem
}> = ({
  item
}) => {
    const { dispatch } = useCartContext();
    const { image, name, category, quantity, price } = item;

    return (
      <>
        <div className="flex gap-4">
          <Image
            className="rounded-lg"
            src={image}
            alt={name}
            width={150}
            height={200}
          />
          <div className="flex flex-col justify-between">
            <h4 className="typo-title-sm">{name}</h4>
            <small className="text-sm text-gray-500">{category}</small>
            <div className="flex gap-5 items-center">
              <div className="flex gap-3 items-center">
                <button className="p-2 rounded-md bg-gray-200">
                  <BiMinus onClick={() => dispatch({
                    type: "DECREASE_ITEM_COUNT",
                    payload: item
                  })} size={20} />
                </button>
                <h4 className="typo-title-xs">{quantity}</h4>
                <button className="p-2 rounded-md bg-primary-main text-white">
                  <BiPlus onClick={() => dispatch({
                    type: "INCREASE_ITEM_COUNT",
                    payload: item
                  })} size={20} />
                </button>
              </div>
              <span className="text-lg font-semibold text-primary-main">
                {quantity} x {price}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };

export default CartItem;

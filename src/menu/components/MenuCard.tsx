import Image from "next/image";
import { FC, useMemo } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";


import { IMenu } from "../type";
import { useCartContext } from "@/src/common/contexts/cart/useCartContext";
import NoSSR from "@/src/common/components/NoSSR";
import { StringShortener } from "@/src/common/utils/utils";
import Link from "next/link";

const MenuCard: FC<{
  item: IMenu
}> = ({
  item
}) => {
    const isDownMd = useMediaQuery({ query: "(max-width:764px)" });
    const { dispatch, items } = useCartContext();
    const { available, category, image, name, price, sold, tags, description, offer, _id } = item;

    const count: number = useMemo(() => (items.find((item) => item._id === _id)?.quantity ?? 0), [items])

    return (
      <NoSSR>
        <div className="bg-white rounded-lg p-4 border-[1.5px] border-gray-100">
          <Link href={`/menu/${_id}`}>
            <div className="flex-row flex gap-4">
              <div className="relative">
                <Image src="/home/pancake.jpeg" width={200} height={200} alt="" className="rounded-xl" />
                {offer && <span className="bg-primary-main text-white px-2 text-sm rounded-full absolute top-2 left-2">{offer}% off</span>}
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-sm md:text-base">{name}</h3>
                <p className="text-xs text-gray-400">{StringShortener(description || '', isDownMd ? 30 : 50)}</p>
                <p className="typo-detail-sm"><b>{available}</b> available . <b>{sold}</b> sold</p>
                <small className="typo-detail-xs">{isDownMd ? tags.slice(0, 2).join(", ") : tags.join(", ")}</small>
              </div>
            </div>
          </Link>

          <div className="mt-2 flex justify-between items-center">
            <div>
              <small>₹</small><span className="text-lg font-semibold"> 7.49</span> <small>for one</small>
            </div>
            <div className="flex gap-3 items-center">
              <button
                disabled={count === 0}
                onClick={() => dispatch({
                  type: "DECREASE_ITEM_COUNT", payload: {
                    _id, category, image, name, price, quantity: count - 1
                  }
                })}
                className="bg-gray-200 p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <BiMinus size={20} />
              </button>
              <h4 className="typo-title-xs">{count}</h4>
              <button
                onClick={() => dispatch({
                  type: "INCREASE_ITEM_COUNT", payload: {
                    _id, category, image, name, price, quantity: count + 1
                  }
                })}
                className="bg-primary-main p-2 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <BiPlus size={20} />
              </button>
            </div>
          </div>
        </div>
      </NoSSR>
    );
  };

export default MenuCard;

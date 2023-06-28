import React from "react";
import CartItem from "./CartItem";
import BillDetail from "./BillDetail"
import PaymentMethodButtons from "./PaymentMethodButtons";
import { useCartContext } from "@/src/common/contexts/useCartContext";
import { useMemo } from "react";

const PaymentDetailSidebar = () => {
  const { items } = useCartContext();

  const subtotal = useMemo(() => Number(items.reduce((acc, item) => acc + item.price * item.quantity, 0)), [items])

  return (
    <aside className="p-4">
      <h4 className="typo-title-md mb-4">Detail Items</h4>
      {items.map((item, index) => (
        <React.Fragment key={item._id}>
          <CartItem item={item} />
          <hr className="my-4" />
        </React.Fragment>
      ))}
      <BillDetail discount={0} subtotal={subtotal} item={items.length ?? 0} tax={3} />
      <hr className="my-4" />
      <PaymentMethodButtons />
    </aside>
  );
};

export default PaymentDetailSidebar;

import React from "react";
import CartItem from "./CartItem";
import BillDetail from "./BillDetail"
import PaymentMethodButtons from "./PaymentMethodButtons";
import { useCartContext } from "@/src/common/contexts/cart/useCartContext";
import { useMemo } from "react";
import CustomButton from "@/src/common/components/CustomButton";
import { toast } from "react-toastify";

const PaymentDetailSidebar = () => {
  const { items, paymentMethod } = useCartContext();

  const subtotal = useMemo(() => Number(items.reduce((acc, item) => acc + item.price * item.quantity, 0)), [items])

  const handlePlaceOrder = () => {
    if (items.length === 0) return toast.warn("Cart is empty");
    toast.success("This feature yet to be implemented")
  }

  return (
    <aside className="p-4">
      <h4 className="typo-title-md mb-4">Cart</h4>
      {items.map((item, index) => (
        <React.Fragment key={item._id}>
          <CartItem item={item} />
          <hr className="my-4" />
        </React.Fragment>
      ))}
      <BillDetail discount={0} subtotal={subtotal} item={items.length ?? 0} tax={3} />
      <hr className="my-4" />
      <PaymentMethodButtons />
      <CustomButton onClick={handlePlaceOrder} className="w-full mt-4">
        {
          paymentMethod === "cash" ? "Place Order" : "Pay Now"
        }
      </CustomButton>
    </aside>
  );
};

export default PaymentDetailSidebar;

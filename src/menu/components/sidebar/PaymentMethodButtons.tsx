import { useCartContext } from "@/src/common/contexts/useCartContext";
import { BsCashCoin, BsCreditCard2Back, BsQrCodeScan } from "react-icons/bs";


const PaymentMethodButtons = () => {
    const { dispatch, paymentMethod } = useCartContext();
    const active_class = "border-primary-main bg-primary-light text-primary-main";

    return (
        <div>
            <h4 className="typo-title-md mb-5">Payment method</h4>
            <div className="flex justify-between">
                <button
                    onClick={() => dispatch({
                        type: "CHANGE_PAYMENT_METHOD",
                        payload: "cash"
                    })}
                    className={`
                    rounded-lg p-4 w-[100px] h-[90px] border-2 border-[#C9C9C9] bg-white 
                    text-black flex justify-center items-center
                    ${paymentMethod === "cash" ? active_class : ""}
            `}
                >
                    <div className="flex flex-col items-center">
                        <BsCashCoin size={30} />
                        <h5 className="text-lg font-semibold">Cash</h5>
                    </div>
                </button>
                <button
                    onClick={() => dispatch({
                        type: "CHANGE_PAYMENT_METHOD",
                        payload: "card"
                    })}
                    className={`
                    rounded-lg p-4 w-[100px] h-[90px] border-2 border-[#C9C9C9] bg-white
                    text-black flex justify-center items-center
                    ${paymentMethod === "card" ? active_class : ""}
            `}
                >
                    <div className="flex flex-col items-center">
                        <BsCreditCard2Back size={30} />
                        <h5 className="text-lg font-semibold">Card</h5>
                    </div>
                </button>
                <button
                    onClick={() => dispatch({
                        type: "CHANGE_PAYMENT_METHOD",
                        payload: "upi"
                    })}
                    className={`
                    rounded-lg p-4 w-[100px] h-[90px] border-2 border-[#C9C9C9] bg-white
                    text-black flex justify-center items-center
                    ${paymentMethod === "upi" ? active_class : ""}
            `}
                >
                    <div className="flex flex-col items-center">
                        <BsQrCodeScan size={30} />
                        <h5 className="text-lg font-semibold">UPI</h5>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default PaymentMethodButtons
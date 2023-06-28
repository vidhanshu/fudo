import React, { FC, useMemo } from 'react'
import { IBillDetail } from '../../type'

const PaymentDetail: FC<IBillDetail> = ({
    discount,
    item,
    subtotal,
    tax
}) => {
    const computed_tax = useMemo(() => Number((subtotal * (tax / 100)).toFixed(2)), [subtotal, tax]);
    const computed_total = Number((subtotal + computed_tax - discount).toFixed(2));

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
                <p className='text-gray-500'>Item</p>
                <h5 className='typo-title-xs'>{item} (Items)</h5>
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-500'>Subtotal</p>
                <h5 className='typo-title-xs'>{subtotal}</h5>
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-500'>Discount</p>
                <h5 className='typo-title-xs text-primary-main'>-{discount}</h5>
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-500'>Tax({tax} %)</p>
                <h5 className='typo-title-xs'>{computed_tax}</h5>
            </div>
            <hr className='h-0 border-b-[1px] border-dashed border-gray-300 my-4' />
            <div className='flex justify-between'>
                <h5 className='typo-title-xs'>Total</h5>
                <h5 className='typo-title-xs'>{computed_total}</h5>
            </div>
        </div>
    )
}

export default PaymentDetail
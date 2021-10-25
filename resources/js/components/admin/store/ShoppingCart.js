import React from 'react'
import CartPaymentInfo from './CartPaymentInfo';
import CartProductInfo from './CartProductInfo';

export default function ShoppingCart() {
    return (
        <div className="ShoppingCart tw-container tw-mx-auto tw-px-5">
            <p className="tw-text-4xl tw-font-bold tw-text-blue-900 tw-mx-0 tw-my-10">Shopping Cart <sup>(1)</sup></p>
            <div className="tw-grid md:tw-grid-cols-12 xl:tw-grid-cols-12 tw-gap-4 tw-items-center">
                <div className="md:tw-col-span-12 xl:tw-col-span-8 tw-border rounded">
                    <CartProductInfo />
                </div>
                <div className="md:tw-col-span-7 lg:tw-col-span-6 xl:tw-col-span-4 tw-flex-wrap tw-content-evenly"> 
                    <CartPaymentInfo className="d-flex justify-content-center"/>
                </div> 
            </div>
        </div>
    )
}

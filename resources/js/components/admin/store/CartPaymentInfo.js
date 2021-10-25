import React from 'react'

export default function CartPaymentInfo() {
    return (
        <div className="CartPaymentInfo">
            <div className="tw-border rounded p-5">
                <div className="tw-flex tw-justify-between tw-items-center">
                    <p className="tw-font-semibold tw-text-blue-900">Sub-Total</p>
                    <p className="tw-font-bold tw-text-yellow-500 tw-text-base">$ 299</p>
                </div>
                <hr className="tw-w-11/12 mx-auto tw-my-5"/>
                <div className="tw-flex tw-justify-between tw-items-center">
                    <p className="tw-font-semibold tw-text-blue-900">Shipping</p>
                    <p className="tw-font-bold tw-text-yellow-500 tw-text-base">$ 29</p>
                </div>
                <hr className="tw-w-11/12 mx-auto tw-my-5"/>
                <div className="tw-flex tw-justify-between tw-items-center">
                    <p className="tw-font-semibold tw-text-blue-900">Total</p>
                    <p className="tw-font-bold tw-text-yellow-500 tw-text-base">$ 329</p>
                </div>
                <hr className="tw-w-11/12 mx-auto tw-my-5"/>
                <button className="tw-w-full mt-4 tw-py-3 tw-bg-blue-900 hover:tw-bg-yellow-500 tw-rounded tw-text-white tw-font-bold">🛒 Proceed to Pay</button>
            </div>
            
        </div>
    )
}

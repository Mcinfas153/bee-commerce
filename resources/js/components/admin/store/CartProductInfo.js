import React from 'react'

export default function CartProductInfo() {
    return (
        <div className="CartProductInfo">
            <div className="tw-grid tw-grid-cols-12 tw-items-center">
                        <div className="tw-col-span-3">
                            <img src="https://dummyimage.com/180x180/000/fff" alt="" className="rounded img-fluid"/>      
                        </div>
                        <div className="tw-col-span-9 tw-py-0 sm:tw-py-0 tw-px-10 lg:tw-px-0">
                            <div className="tw-grid md:tw-grid-cols-12 tw-gap-1 tw-items-center tw-mb-1 tw-py-1 sm:tw-py-0">
                                <div className="md:tw-col-span-10 tw-items-center">
                                    <p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-hidden sm:tw-block">Apple</p>
                                    <div className="tw-flex tw-justify-between tw-items-center">
                                        <a className="tw-font-bold tw-text-yellow-500 hover:tw-text-blue-900 tw-text-base tw-mr-5" href="#">AirPods Pro Wireless Earphones</a>
                                        <div className="tw-float-right sm:tw-hidden">
                                            <img src="https://img.icons8.com/material-rounded/24/000000/menu-2.png" className="tw-cursor-pointer"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tw-col-span-2 tw-hidden md:tw-block">
                                    <p className="tw-text-xl tw-font-bold tw-text-yellow-500">$ 229</p>
                                </div>
                            </div>
                            <div className="tw-grid md:tw-grid-cols-12 tw-gap-1 tw-items-center">
                                <div className="md:tw-col-span-10 tw-mt-3 tw-hidden md:tw-block">
                                    <p className="tw-font-semibold tw-text-blue-900">Order In <strong className="tw-text-yellow-500 hover:tw-text-blue-900">7 Hourse 30 Minutes</strong></p>
                                    <p className="tw-font-semibold tw-text-blue-900">Free delivery by Tomorrow, Oct 26</p>
                                </div>
                                <div className="tw-col-span-2 tw-hidden md:tw-block">
                                    <select name="#" id="#" className="tw-px-3 tw-py-2 rounded">
                                        <option value="#">1</option>
                                        <option value="#">2</option>
                                        <option value="#">3</option>
                                        <option value="#">4</option>
                                        <option value="#">5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="tw-flex tw-justify-between tw-pr-10 tw-mt-5">
                                <button className="tw-px-5 md:tw-px-10 tw-py-2 hover:tw-bg-blue-900 tw-bg-yellow-500 tw-rounded tw-text-white tw-font-bold tw-hidden sm:tw-block">⛔ Remove</button>
                                <button className="tw-px-5 md:tw-px-10 tw-py-2 tw-bg-blue-900 hover:tw-bg-yellow-500 tw-rounded tw-text-white tw-font-bold tw-hidden sm:tw-block">🛒 Buy Now</button>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

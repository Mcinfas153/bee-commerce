import React from 'react'

export default function Footer() {

    const currentDate = () => {
        let newDate = new Date()
        newDate = newDate.getFullYear()
        return newDate
    }

    return (
        <div className="footer tw-mt-10 tw-bg-gradient-to-r tw-from-green-400 tw-to-blue-500 tw-items-center">
            <div className="tw-grid tw-grid-cols-12 tw-mb-5 md:tw-mb-0">
                <div className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-6 lg:tw-col-span-4 tw-px-10 tw-py-8 md:tw-py-10 md:tw-mx-auto">
                    <p className="tw-text-xl md:tw-text-xl tw-font-semibold tw-text-white tw-pb-4">What is E-BEE?</p>
                    <p className="tw-font-semibold tw-text-blue-900">
                        E-BEE is a leading choice for small business merchants to easily set up a store and start selling fast. No need to abandon your existing site — E-BEE can be added virtually anywhere you have an online presence.
                    </p>
                </div>
                <div className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-6 lg:tw-col-span-3 tw-pb-8 tw-px-10 md:tw-px-10 sm:tw-py-10 md:tw-mx-auto">
                    <p className="tw-text-xl md:tw-text-xl tw-font-semibold tw-text-white tw-pb-4">MORE INFO</p>
                    <ul>
                        <li><a href="#"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">Delivery Information</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">Privacy Policy</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">Terms & Conditions</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">Contact Us</p></a></li>
                    </ul>
                </div>
                <div className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-6 lg:tw-col-span-2 md:tw-ml-10 tw-px-10 tw-pb-8 md:tw-px-0 lg:tw-py-10 md:tw-mx-auto">
                    <p className="tw-text-xl md:tw-text-xl tw-font-semibold tw-text-white tw-pb-4">YOUR DATA</p>
                    <ul>
                        <li><a href="#"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">My Account</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">My Orders</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">My Cart</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">My Wishlist</p></a></li>
                    </ul>
                </div>
                <div className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-6 lg:tw-col-span-3 tw-px-10 md:tw-px-10 lg:tw-py-10 md:tw-mx-auto">
                    <p className="tw-text-xl md:tw-text-xl tw-font-semibold tw-text-white tw-pb-4">CONTACT US</p>
                    <ul>
                        <li><a href="https://goo.gl/maps/ibD5No73BTEakwSQ9"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">Colombo 2, Sri Lanka.</p></a></li>
                        <li><a href="mailto:contact@beeonline.xyz"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">Contact@beeonline.xyz</p></a></li>
                        <li><a href="tel:+94772097406"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">+94-77-209-7406</p></a></li>
                        <li><a href="tel:+94772097406"><p className="tw-font-semibold tw-text-blue-900 hover:tw-text-yellow-500 tw-mb-1.5">+94-77-209-7406</p></a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="tw-py-3 tw-bg-gradient-to-r tw-from-green-400 tw-to-blue-500">
                <div className="tw-grid md:tw-grid-cols-2 tw-gap-4 tw-items-center">
                    <div className="text-center">
                        <p className="tw-font-semibold">
                            © {currentDate()} E-BEE. POWERED BY <a href="https://beeonline.xyz/" className="tw-text-yellow-500 hover:tw-text-blue-900 tw-font-bold">BEE INC.</a>
                        </p>
                    </div>
                    <div className="d-flex tw-items-center mx-auto">
                        <a href="#">
                            <img src="/images/icons/visa.png" className="tw-mx-2" />
                        </a>
                        <a href="#">
                            <img src="/images/icons/master-card.png" className="tw-mx-2" />
                        </a>
                        <a href="#">
                            <img src="/images/icons/paypal.png" className="tw-mx-2" />
                        </a>
                        <a href="#">
                            <img src="/images/icons/union-pay.png" className="tw-mx-2" />
                        </a>
                        <a href="#">
                            <img src="/images/icons/g-pay.png" className="tw-mx-2" />
                        </a>
                        <a href="#">
                            <img src="/images/icons/apple-pay.png" className="tw-mx-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

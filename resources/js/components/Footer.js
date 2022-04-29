import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faEnvelope, faPhoneAlt, faPaperPlane, faExternalLinkAlt, faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    const currentDate = () => {
        let newDate = new Date()
        newDate = newDate.getFullYear()
        return newDate
    }

    return (
        <div className="footer tw-mt-10 tw-items-center tw-bg-gray-700">
            <div className="tw-grid tw-grid-cols-12 tw-mb-5 md:tw-mb-0 lg:tw-pt-14 lg:tw-pb-10">
                <div className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-6 lg:tw-col-span-2 tw-pb-8 tw-px-10 tw-pt-10 sm:tw-py-10 lg:tw-py-0 sm:tw-mx-auto">
                    <p className="tw-text-xl md:tw-text-xl tw-font-semibold tw-text-white tw-pb-2">About Us</p>
                    <ul>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Careers</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Blog</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> About Amazon</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Investor Relations</p></a></li>
                    </ul>
                </div>
                <div className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-6 lg:tw-col-span-3 tw-pb-8 tw-px-10 sm:tw-py-10 lg:tw-py-0 sm:tw-mx-auto">
                    <p className="tw-text-xl md:tw-text-xl tw-font-semibold tw-text-white tw-pb-2">Payment Products</p>
                    <ul>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Shop with Points</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Special offers</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Subscribe our plan</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Reload your Balance</p></a></li>
                    </ul>
                </div>
                <div className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-6 lg:tw-col-span-2 tw-pb-8 tw-px-10 lg:tw-py-0 tw-text-end sm:tw-mx-auto">
                    <p className="tw-text-xl md:tw-text-xl tw-font-semibold tw-text-white tw-pb-2">Let Help You</p>
                    <ul>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Your Account</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Your Orders</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Your Wishlist</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Bee Assistant</p></a></li>
                    </ul>
                </div>
                <div className="tw-col-span-12 sm:tw-col-span-6 md:tw-col-span-6 lg:tw-col-span-3 tw-pb-8 tw-px-10 lg:tw-py-0 sm:tw-mx-auto">
                    <p className="tw-text-xl md:tw-text-xl tw-font-semibold tw-text-white tw-pb-2">Make Money with Us</p>
                    <ul>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Sell on Bee Stores</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Advertise your products</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Self publish with us</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faAngleRight} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> Hsot a Bee Hub</p></a></li>
                    </ul>
                </div>
                <div className="tw-col-span-12 sm:tw-col-span-12 md:tw-col-span-12 lg:tw-col-span-2 tw-pb-8 tw-px-10 lg:tw-py-0 sm:tw-mx-auto">
                    <p className="tw-text-xl tw-font-semibold tw-text-white tw-pb-2">Contact Us</p>
                    <ul>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faMicrophoneAlt} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> +94-76-487-8633</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faPhoneAlt} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> +94-76-487-8633</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faPaperPlane} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> +94-76-487-8633</p></a></li>
                        <li><a href="#"><p className="tw-font-semibold tw-text-xs tw-text-white hover:tw-text-yellow-300 tw-mb-1 tw-ml-2"><FontAwesomeIcon icon={faExternalLinkAlt} className="tw-text-gray-50 tw-text-sm hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" /> beeonline.xyz</p></a></li>
                    </ul>
                </div>                
            </div>
            <hr className='tw-text-white tw-w-9/12 tw-mx-auto mb-2' />
            <div className="tw-py-2 lg:tw-py-3 tw-bg-gray-700">
                <div className="tw-grid lg:tw-grid-cols-12 tw-gap-2 tw-items-center">
                    <div className="lg:tw-col-span-3 text-center">
                        <p className="tw-font-semibold tw-text-white tw-text-xs">
                            © 2020-{currentDate()}, | <a href="https://beeonline.xyz/" target='_blank' className='hover:tw-text-yellow-300'>Bee Inc.</a> | All rights reserved
                        </p>
                    </div>
                    <div className='lg:tw-col-span-1 tw-text-center'>
                        <a href="#" className="tw-font-semibold tw-text-white tw-text-xs">
                            Conditions of Use
                        </a>
                    </div>
                    <div className='lg:tw-col-span-1 tw-text-center'>
                        <a href="#" className="tw-font-semibold tw-text-white tw-text-xs">
                            Privacy Policy
                        </a>
                    </div>
                    <div className="lg:tw-col-span-7 d-flex tw-justify-center lg:tw-justify-end tw-text-xs tw-px-10">
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

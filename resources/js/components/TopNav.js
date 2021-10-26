import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faSignal, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function TopNav() {
    return (
        <div className="tw-grid tw-grid-cols-12 tw-gap-1 tw-bg-white tw-px-5 tw-py-5">
            <div className="tw-col-span-full md:tw-col-span-2 tw-flex tw-justify-center md:tw-justify-start tw-items-center tw-gap-3">
                <Link to="/" className="tw-flex gap-2">
                    <img src="../images/bee.png" className="tw-w-10" />
                    <span className="tw-text-center tw-uppercase tw-text-blue-900 tw-font-extrabold tw-text-3xl"><span className="text-blue-900">E</span>-<span className="tw-text-yellow-500">BEE</span></span>
                </Link>
            </div>
            <div className="tw-col-span-full md:tw-col-span-7 tw-flex tw-flex-col md:tw-flex-row md:tw-flex tw-justify-center md:tw-justify-center tw-items-center tw-gap-5 tw-mt-5 md:tw-mt-0">
                <p className="tw-text-blue-900">Need help? <span className="tw-font-medium">0020 500</span></p>
                <input type="text" className="tw-bg-gray-100 focus:tw-bg-white tw-rounded-full tw-py-2 tw-px-10 searchInput" placeholder="Search for products..." />
            </div>
            <div className="tw-col-span-full md:tw-col-span-3 tw-hidden md:tw-flex tw-justify-center md:tw-justify-end tw-items-center tw-gap-5 tw-mt-5 md:tw-mt-0">
                <Link to="/my-account"><span className="tw-cursor-pointer tw-text-yellow-500 hover:tw-text-blue-900 tw-text-lg"><FontAwesomeIcon icon={faUser} /></span></Link>
                <span className="tw-cursor-pointer tw-text-yellow-500 hover:tw-text-blue-900 tw-text-lg"><FontAwesomeIcon icon={faHeart} /></span>
                <Link to="/cart"><span className="tw-cursor-pointer tw-text-yellow-500 hover:tw-text-blue-900 tw-text-lg"><FontAwesomeIcon icon={faShoppingCart} /></span></Link>
                <span className="tw-cursor-pointer tw-text-yellow-500 hover:tw-text-blue-900 tw-text-lg"><FontAwesomeIcon icon={faSignal} /></span>
            </div>
        </div>
    )
}

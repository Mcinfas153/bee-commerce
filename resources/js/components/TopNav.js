import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faSignal, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function TopNav() {
    return (
        <div className="grid grid-cols-12 gap-1 bg-white px-5 py-5">
            <div className="col-span-full md:col-span-2 flex justify-center md:justify-start items-center gap-5">
                <img src="../images/logo.png" className="w-10" />
                <span className="text-center uppercase text-blue-900 font-extrabold text-3xl"><a className="text-blue-900">E</a>-<a className="text-yellow-500">BEE</a></span>
            </div>
            <div className="col-span-full md:col-span-7 flex flex-col md:flex-row md:flex justify-center md:justify-center items-center gap-5 mt-5 md:mt-0">
                <p className="text-gray-700">Need help? <span className="font-medium">0020 500</span></p>
                <input type="text" className="bg-gray-100 focus:bg-white rounded-full py-2 px-10 searchInput" placeholder="Search for products..." />
            </div>
            <div className="col-span-full md:col-span-3 hidden md:flex justify-center md:justify-end items-center gap-5 mt-5 md:mt-0">
                <span className="cursor-pointer"><FontAwesomeIcon icon={faUser} /></span>
                <span className="cursor-pointer"><FontAwesomeIcon icon={faHeart} /></span>
                <span className="cursor-pointer"><FontAwesomeIcon icon={faSignal} /></span>
                <span className="cursor-pointer"><FontAwesomeIcon icon={faShoppingCart} /></span>
            </div>
        </div>
    )
}

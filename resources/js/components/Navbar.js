import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div className="bg-blue-900 p-3 grid grid-cols-5 gap-10">
            <div className="flex flex-row justify-between align-items-center col-span-full md:col-span-1  md:border-r border-yellow-500 cursor-pointer">
                <p className="uppercase text-yellow-500 text-sm font-bold hover:text-white cursor-pointer">All categories</p>
                <span className="px-3"><FontAwesomeIcon icon={faCaretDown} className="text-yellow-500 text-2xl font-bold -mt-2 hover:text-white cursor-pointer" /></span>
            </div>
            <div className="col-span-full md:col-span-4 hidden md:block">
                <ul className="flex flex-row gap-10 ">
                    <li className="uppercase text-yellow-500 text-sm font-bold hover:text-white cursor-pointer">
                        <Link to="/">Electronics</Link>
                    </li>
                    <li className="uppercase text-yellow-500 text-sm font-bold hover:text-white cursor-pointer">
                        <Link to="/login">Men</Link>
                    </li>
                    <li className="uppercase text-yellow-500 text-sm font-bold hover:text-white cursor-pointer">
                        <Link to="/register">Women</Link>
                    </li>
                    <li className="uppercase text-yellow-500 text-sm font-bold hover:text-white cursor-pointer">
                        <Link to="/register">Home</Link>
                    </li>
                    <li className="uppercase text-yellow-500 text-sm font-bold hover:text-white cursor-pointer">
                        <Link to="/register">Grocery</Link>
                    </li>
                    <li className="uppercase text-yellow-500 text-sm font-bold hover:text-white cursor-pointer">
                        <Link to="/register">Sports</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

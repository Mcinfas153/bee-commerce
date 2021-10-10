import React from 'react'
import { Link } from 'react-router-dom';

export default function TopNav() {
    return (
        <div className="bg-green-400 p-3">
            <ul className="flex flex-row gap-4 ">
                <li>
                    <img src="../images/first-aid-kit.png" className="w-5" />
                </li>
                <li className="">
                    <Link to="/">Home</Link>
                </li>
                <li className="">
                    <Link to="/login">Login</Link>
                </li>
                <li className="">
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </div>
    )
}

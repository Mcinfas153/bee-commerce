import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="bg-green-400 p-3">
            <ul className="flex flex-row gap-4 ">
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

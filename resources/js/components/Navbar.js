import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Offcanvas } from 'react-bootstrap';

export default function Navbar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="tw-bg-blue-900 tw-p-3 tw-grid tw-grid-cols-5 tw-gap-10">
                <div className="tw-flex tw-flex-row tw-justify-between tw-align-items-center tw-col-span-full md:tw-col-span-1  md:tw-border-r tw-border-yellow-500 tw-cursor-pointer" onClick={handleShow}>
                    <p className="tw-uppercase tw-text-gray-50 tw-text-sm tw-font-bold hover:tw-text-white tw-cursor-pointer">All categories</p>
                    <span className="tw-px-3"><FontAwesomeIcon icon={faCaretDown} className="tw-text-gray-50 tw-text-2xl tw-font-bold tw--mt-2 hover:tw-text-white tw-cursor-pointer" /></span>
                </div>
                <div className="tw-col-span-full md:tw-col-span-4 tw-hidden md:tw-block">
                    <ul className="tw-flex tw-flex-row tw-gap-10 ">
                        <li className="tw-uppercase tw-text-white tw-text-sm tw-font-bold hover:tw-text-yellow-500">
                            <Link to="/">Electronics</Link>
                        </li>
                        <li className="tw-uppercase tw-text-white tw-text-sm tw-font-bold hover:tw-text-yellow-500">
                            <Link to="/">Men</Link>
                        </li>
                        <li className="tw-uppercase tw-text-white tw-text-sm tw-font-bold hover:tw-text-yellow-500">
                            <Link to="/">Women</Link>
                        </li>
                        <li className="tw-uppercase tw-text-white tw-text-sm tw-font-bold hover:tw-text-yellow-500">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="tw-uppercase tw-text-white tw-text-sm tw-font-bold hover:tw-text-yellow-500">
                            <Link to="/">Grocery</Link>
                        </li>
                        <li className="tw-uppercase tw-text-white tw-text-sm tw-font-bold hover:tw-text-yellow-500">
                            <Link to="/">Sports</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <Offcanvas className="tw-w-80" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='tw-font-bold tw-text-blue-900'>All Categories</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='tw-px-0 tw-py-0'>
                    <p className='tw-text-lg tw-font-bold'></p>
                    <ul className="">
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to="/">Baby & Toddler</Link>
                        </li>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to="/">Office Supplies</Link>
                        </li>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to="/">Health & Beauty</Link>
                        </li>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to="/">Toys & Games</Link>
                        </li>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to="/">Furnitures</Link>
                        </li>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to="/">Home Appliances</Link>
                        </li>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link className='tw-flex tw-justify-between tw-items-center' to="/">Clothes <img src="https://img.icons8.com/fluency-systems-filled/15/ffffff/chevron-down--v2.png"/></Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

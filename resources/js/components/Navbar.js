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
                        <li className="tw-uppercase tw-text-gray-50 tw-text-sm tw-font-bold hover:tw-text-white tw-cursor-pointer">
                            <Link to="/">Electronics</Link>
                        </li>
                        <li className="tw-uppercase tw-text-gray-50 tw-text-sm tw-font-bold hover:tw-text-white tw-cursor-pointer">
                            <Link to="/">Men</Link>
                        </li>
                        <li className="tw-uppercase tw-text-gray-50 tw-text-sm tw-font-bold hover:tw-text-white tw-cursor-pointer">
                            <Link to="/">Women</Link>
                        </li>
                        <li className="tw-uppercase tw-text-gray-50 tw-text-sm tw-font-bold hover:tw-text-white tw-cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="tw-uppercase tw-text-gray-50 tw-text-sm tw-font-bold hover:tw-text-white tw-cursor-pointer">
                            <Link to="/">Grocery</Link>
                        </li>
                        <li className="tw-uppercase tw-text-gray-50 tw-text-sm tw-font-bold hover:tw-text-white tw-cursor-pointer">
                            <Link to="/">Sports</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCog, faCoins, faDollarSign, faFemale, faFunnelDollar, faHashtag, faHeadphones, faHome, faLaptop, faLeaf, faMale, faMobile, faSearchDollar, faSnowman, faUserCircle, faVolleyballBall } from '@fortawesome/free-solid-svg-icons'
import { Offcanvas,Dropdown } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';

export default function Navbar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="tw-bg-gray-600 tw-p-3 tw-grid md:tw-grid-cols-8 lg:tw-grid-cols-6 tw-gap-10 tw-pl-10">
                <div className="tw-flex tw-flex-row tw-justify-between tw-align-items-center tw-col-span-full md:tw-col-span-2 lg:tw-col-span-1  md:tw-border-r tw-cursor-pointer" onClick={handleShow}>
                    <p className="tw-text-gray-50 tw-text-xs tw-font-bold hover:tw-text-white tw-cursor-pointer">All categories</p>
                    <span className="tw-px-5"><FontAwesomeIcon icon={faCaretDown} className="tw-text-gray-50 tw-text-xl tw-font-bold tw--mt-2 hover:tw-text-white tw-cursor-pointer" /></span>
                </div>
                <div className="tw-col-span-full md:tw-col-span-4 lg:tw-col-span-4 tw-hidden md:tw-block">
                    <ul className="tw-flex tw-flex-row tw-gap-5 lg:tw-gap-10">
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faLaptop} className="tw-text-md hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" />
                                <p>Electronics</p>
                            </Link>
                        </li>
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faMale} className="tw-text-md hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" />
                                <p>Men</p>
                            </Link>
                        </li>
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faFemale} className="tw-text-md hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" />
                                <p>Women</p>
                            </Link>                        
                        </li>
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faHome} className="tw-text-md hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" />
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faLeaf} className="tw-text-md hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" />
                                <p>Grocery</p>
                            </Link>
                        </li>
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faVolleyballBall} className="tw-text-md hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" />
                                <p>Sports</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="tw-col-span-full lg:tw-col-span-1 tw-hidden lg:tw-block">
                    <ul className="tw-flex tw-flex-row tw-gap-10 tw-float-right tw-px-5">
                        <li className="tw-text-white tw-text-xs hover:tw-text-yellow-300">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faSnowman} className="tw-text-md tw-font-semibold tw-cursor-pointer tw-mr-1" />
                                <p>Special Offers</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <Offcanvas className="tw-w-80" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='tw-font-bold tw-text-gray-600'>All Categories</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                    <Accordion className='tw-bg-white'>
                        <Accordion.Item eventKey="0" className='tw-border-bottom tw-py-0'>
                            <Accordion.Header className='tw-bg-white'><FontAwesomeIcon icon={faHashtag} className="tw-mr-1 tw-text-sm" /> Trending Categories</Accordion.Header>
                            <Accordion.Body className='tw-bg-gray-100 p-0'>
                                <a href="/category/3/products">
                                    <li className='tw-list-none tw-px-8 tw-py-2 tw-border-b tw-border-white'><FontAwesomeIcon icon={faLaptop} className="tw-mr-1 tw-text-sm" /> Electronics</li>
                                </a>
                                <a href="/category/4/products">
                                    <li className='tw-list-none tw-px-8 tw-py-2 tw-border-b tw-border-white'><FontAwesomeIcon icon={faHome} className="tw-mr-1 tw-text-sm" /> Home Appliances</li>
                                </a>
                                <a href="/category/4/products">
                                    <li className='tw-list-none tw-px-8 tw-py-2 tw-border-b tw-border-white'><FontAwesomeIcon icon={faLeaf} className="tw-mr-1 tw-text-sm" /> Groceries</li>
                                </a>
                                <a href="/category/5/products">
                                    <li className='tw-list-none tw-px-8 tw-py-2'><FontAwesomeIcon icon={faSnowman} className="tw-mr-1 tw-text-sm" /> Event Products</li>
                                </a>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <a href="/download-app">
                        <li className='tw-list-none tw-px-5 tw-py-3 tw-border'><FontAwesomeIcon icon={faMobile} className="tw-mr-2 tw-text-sm" />Download Apps</li>
                    </a>
                    <a href="/category/1/products">
                        <li className='tw-list-none tw-px-5 tw-py-3 tw-border'><FontAwesomeIcon icon={faCoins} className="tw-mr-2 tw-text-sm" />Profit with us</li>
                    </a>
                    <a href="/user-informations">
                        <li className='tw-list-none tw-px-5 tw-py-3 tw-border'><FontAwesomeIcon icon={faUserCircle} className="tw-mr-2 tw-text-sm" />User Informations</li>
                    </a>
                    <a href="/category/2/products">
                        <li className='tw-list-none tw-px-5 tw-py-3 tw-border'><FontAwesomeIcon icon={faHeadphones} className="tw-mr-2 tw-text-sm" />Customer Services</li>
                    </a>
                    <a href='/settings'>
                        <li className='tw-list-none tw-px-5 tw-py-3 tw-border'><FontAwesomeIcon icon={faCog} className="tw-mr-2 tw-text-sm" />Application Settings</li>
                    </a>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

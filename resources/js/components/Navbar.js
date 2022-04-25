import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBolt, faCaretDown, faCarrot, faFemale, faGift, faHome, faIdBadge, faLeaf, faMale, faPercent, faPercentage, faSpider } from '@fortawesome/free-solid-svg-icons'
import { Offcanvas,Dropdown } from 'react-bootstrap';

export default function Navbar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="tw-bg-gray-600 tw-p-3 tw-grid tw-grid-cols-6 tw-gap-10">
                <div className="tw-flex tw-flex-row tw-justify-between tw-align-items-center tw-col-span-full md:tw-col-span-1  md:tw-border-r tw-cursor-pointer" onClick={handleShow}>
                    <p className="tw-text-gray-50 tw-text-xs tw-font-bold hover:tw-text-white tw-cursor-pointer">All categories</p>
                    <span className="tw-px-5"><FontAwesomeIcon icon={faCaretDown} className="tw-text-gray-50 tw-text-xl tw-font-bold tw--mt-2 hover:tw-text-white tw-cursor-pointer" /></span>
                </div>
                <div className="tw-col-span-full md:tw-col-span-4 tw-hidden md:tw-block">
                    <ul className="tw-flex tw-flex-row tw-gap-10 ">
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faBolt} className="tw-text-gray-50 tw-text-md hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" />
                                <p>Electronics</p>
                            </Link>
                        </li>
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faMale} className="tw-text-gray-50 tw-text-md hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" />
                                <p>Men</p>
                            </Link>
                        </li>
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faFemale} className="tw-text-gray-50 tw-text-md hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" />
                                <p>Women</p>
                            </Link>                        
                        </li>
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faLeaf} className="tw-text-gray-50 tw-text-md hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" />
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/5/products`} className="tw-font-bold hover:tw-text-yellow-300">Grocery</Link>
                        </li>
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/6/products`} className="tw-font-bold hover:tw-text-yellow-300">Sports</Link>
                        </li>
                    </ul>
                </div>
                <div className="tw-col-span-full md:tw-col-span-1 tw-hidden md:tw-block">
                    <ul className="tw-flex tw-flex-row tw-gap-10 tw-float-right tw-px-5">
                        <li className="tw-text-white tw-text-xs">
                            <Link to={`/category/1/products`} className="tw-font-bold hover:tw-text-yellow-300 tw-flex tw-items-center">
                                <FontAwesomeIcon icon={faSpider} className="tw-text-gray-50 tw-text-lg tw-font-semibold hover:tw-text-yellow-300 tw-cursor-pointer tw-mr-1" />
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
                <hr />
                <Offcanvas.Body className='tw-px-3 tw-py-3'>
                    <p className='tw-text-md tw-text-yellow-300'>Nothing to show here any categories. Still in working progress.</p>
                    {/* <ul className="">
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to={`/category/1/products`}>Baby & Toddler</Link>
                        </li>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to={`/category/2/products`}>Office Supplies</Link>
                        </li>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to={`/category/3/products`}>Health & Beauty</Link>
                        </li>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to={`/category/4/products`}>Toys & Games</Link>
                        </li>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to={`/category/5/products`}>Furnitures</Link>
                        </li>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link to={`/category/6/products`}>Home Appliances</Link>
                        </li>
                        <Dropdown className='tw-bg-yellow-500'>
                            <Dropdown.Toggle className="tw-w-full text-start tw-py-3 tw-px-5 tw-text-white tw-border tw-rounded tw-text-sm tw-font-bold tw-bg-yellow-500 hover:tw-text-blue-900 tw-border-none" id="dropdown-item-button">
                                Clothes
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Shirts</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Jeans</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Skirts</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="tw-py-3 tw-px-5 tw-text-white tw-bg-yellow-500 tw-border tw-rounded tw-text-sm tw-font-bold hover:tw-text-blue-900">
                            <Link className='tw-flex tw-justify-between tw-items-center' to={`/category/7/products`}>Clothes <img src="https://img.icons8.com/fluency-systems-filled/15/ffffff/chevron-down--v2.png"/></Link>
                        </li>
                    </ul> */}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

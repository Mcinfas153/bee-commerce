import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Form, Accordion } from 'react-bootstrap'

export default function ProductInfo(props) {

    const { title, description, price } = props.info

    return (
        <div className="productInfo">
            <div className="tw-container tw-mx-auto tw-px-5 sm:tw-px-10">
                <p className="tw-text-3xl tw-font-bold tw-text-gray-600 tw-my-3">{title}</p>
                <hr className="tw-w-16 tw-mb-5" />
                <p className="tw-text-gray-600 tw-my-3">
                    {description}
                </p>
                    <ul className="tw-my-5">
                        <li className="d-flex tw-items-baseline tw-my-1 tw-text-gray-600 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-600 tw-text-md tw-mr-2" /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</li>
                        <li className="d-flex tw-items-baseline tw-my-1 tw-text-gray-600 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-600 tw-text-md tw-mr-2" /> quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
                        <li className="d-flex tw-items-baseline tw-my-1 tw-text-gray-600 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-600 tw-text-md tw-mr-2" />  dolores eos qui ratione voluptatem sequi nesciunt.</li>
                    </ul>
                <div className="d-flex">
                    <p className="tw-text-2xl tw-font-bold tw-text-yellow-300 tw-my-3">${price}</p>
                    <p className="tw-text-2xl tw-font-bold tw-text-yellow-300 tw-my-3">/</p>
                    <p className="tw-text-2xl tw-font-bold tw-text-gray-300 tw-m-3">${price}</p>
                </div>
                
                <div className="tw-py-1">
                    <div className="tw-w-4/12 md:tw-w-2/12 tw-text-left">
                        <p className="tw-text-xl tw-font-semibold tw-mr-5 tw-mb-1 tw-text-gray-600">Size : </p>
                    </div>
                    <div className='tw-w-4/12 md:tw-w-2/12 tw-ml-5'>
                        <Form.Select aria-label="Default select example" className='tw-rounded-full tw-mt-1 tw-px-3 tw-py-1' size="sm">
                            <option value="1">Small</option>
                            <option value="2">Medium</option>
                            <option value="3">Large</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="tw-pt-1 tw-pb-5">
                    <div className="tw-w-4/12 md:tw-w-3/12 tw-text-left">
                        <p className="tw-text-xl tw-font-semibold tw-mr-5 tw-mb-1 tw-text-gray-600">Quantity : </p>
                    </div>
                    <div className='tw-w-4/12 md:tw-w-2/12 tw-ml-5'>
                        <Form.Select aria-label="Default select example" className='tw-rounded-full tw-mt-1 tw-px-3 tw-py-1' size="sm">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
                <hr />
                <Accordion>
                    <Accordion.Item eventKey="0" className='tw-border-none tw-my-3' size="sm">
                        <Accordion.Header><FontAwesomeIcon icon={faInfoCircle} className="tw-text-gray-600 tw-mr-1" /> More Info</Accordion.Header>
                        <Accordion.Body className='tw-px-8 tw-py-5'>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                            <ul className="tw-my-5">
                                <li className="d-flex tw-items-baseline tw-my-1 tw-text-gray-600 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-600 tw-text-md tw-mr-2" /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</li>
                                <li className="d-flex tw-items-baseline tw-my-1 tw-text-gray-600 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-600 tw-text-md tw-mr-2" /> quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
                                <li className="d-flex tw-items-baseline tw-mt-1 tw-text-gray-600 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-600 tw-text-md tw-mr-2" />  dolores eos qui ratione voluptatem sequi nesciunt.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className="lg:tw-flex lg:tw-justify-between tw-my-5">
                    <button className="tw-bg-yellow-500 tw-px-10 tw-py-3 tw-rounded-full hover:tw-bg-blue-900 tw-text-white tw-font-bold tw-m-2 tw-w-full lg:tw-w-auto">Add to Wishlist</button>
                    <button className="tw-bg-blue-900 tw-px-10 tw-py-3 tw-rounded-full hover:tw-bg-yellow-500 tw-text-white tw-font-bold tw-m-2 tw-w-full lg:tw-w-auto">Add to Compare</button>
                </div>
            </div>
        </div>
    )
}

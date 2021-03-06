import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Form, Accordion } from 'react-bootstrap'

export default function ProductInfo(props) {

    function substraction() {
        let x = document.getElementById("demo").value;
        if (x > 1) {
            x--;
            document.getElementById("demo").value = x;
        }
    }

    function addition() {
        let x = document.getElementById("demo").value;
        if (10 > x) {
            x++;
            document.getElementById("demo").value = x;
        }
    }

    function selectedColor1 () {
        let x = document.getElementById("color1Button");
        $(x).addClass('tw-border-2 tw-border-gray-400');
    }

    function selectedColor2 () {
        let x = document.getElementById("color2Button");
        $(x).addClass('tw-border-2 tw-border-gray-400');
    }

    function selectedColor3 () {
        let x = document.getElementById("color3Button");
        $(x).addClass('tw-border-2 tw-border-gray-400');
    }

    function selectedColor4 () {
        let x = document.getElementById("color4Button");
        $(x).addClass('tw-border-2 tw-border-gray-400');
    }

    const { title, description, price } = props.info;    
    return (
        <div className="productInfo">
            <div className="tw-container tw-mx-auto tw-px-5 sm:tw-px-10 tw-pt-5">
                <p className="tw-text-3xl tw-font-bold tw-text-gray-700 tw-my-3">{title}</p>
                <hr className="tw-w-16 tw-mb-5" />
                <p className="tw-text-gray-700 tw-my-3">
                    {description}
                </p>
                    <ul className="tw-my-5">
                        <li className="d-flex tw-items-baseline tw-my-1 tw-text-gray-700 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-700 tw-text-md tw-mr-2" /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</li>
                        <li className="d-flex tw-items-baseline tw-my-1 tw-text-gray-700 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-700 tw-text-md tw-mr-2" /> quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
                        <li className="d-flex tw-items-baseline tw-my-1 tw-text-gray-700 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-700 tw-text-md tw-mr-2" />  dolores eos qui ratione voluptatem sequi nesciunt.</li>
                    </ul>
                <div className="d-flex">
                    <p className="tw-text-2xl tw-font-bold tw-text-yellow-300 tw-m-3">${price}</p>
                    <p className="tw-text-2xl tw-font-bold tw-text-yellow-300 tw-my-3">/</p>
                    <p className="tw-text-2xl tw-font-bold tw-text-gray-300 tw-m-3">${price}</p>
                </div>
                
                <div className="tw-flex tw-justify-start tw-items-center tw-mt-5 tw-mb-3">
                    <div className="tw-col-span-1 tw-text-left tw-mr-5">
                        <p className="tw-text-xl tw-font-semibold tw-text-gray-700">Ava. Size:</p>
                    </div>
                    <div className='tw-col-span-11'>
                        <Form className='tw-flex tw-justify-evenly tw-mt-1.5'>
                            <Form.Check className='tw-mr-3 sm:tw-mr-5' type="radio" aria-label="Small" label='Small' size='xl' />
                            <Form.Check className='tw-mr-3 sm:tw-mr-5' type="radio" aria-label="Medium" label='Medium' size={'sm'} />
                            <Form.Check className='tw-mr-3 sm:tw-mr-5' type="radio" aria-label="Large" label='Large' size={'xl'} />
                        </Form>
                    </div>
                </div>
                <div className="tw-flex tw-justify-start tw-items-center tw-mb-4">
                    <div className="tw-col-span-1 tw-text-left tw-mr-5">
                        <p className="tw-text-xl tw-font-semibold tw-text-gray-700">Prefferd Color:</p>
                    </div>
                    <div className='tw-col-span-11'>
                        <Form className='tw-flex tw-justify-evenly tw-mt-1.5'>
                            <a className='tw-p-4 tw-bg-yellow-500 tw-rounded-full tw-mr-3' title='Yellow' id='color1Button' onClick={selectedColor1}></a>
                            <a className='tw-p-4 tw-bg-green-500 tw-rounded-full tw-mr-3' title='green' id='color2Button' onClick={selectedColor2}></a>
                            <a className='tw-p-4 tw-bg-blue-500 tw-rounded-full tw-mr-3' title='Blue' id='color3Button' onClick={selectedColor3}></a>
                            <a className='tw-p-4 tw-bg-red-500 tw-rounded-full tw-mr-3' title='Red' id='color4Button' onClick={selectedColor4}></a>
                        </Form>
                    </div>
                </div>
                <div className="tw-flex tw-items-center tw-mb-10">
                    <div className="tw-text-left tw-mr-5">
                        <p className="tw-text-xl tw-font-semibold tw-mb-1 tw-text-gray-700">Quantity:</p>
                    </div>
                    <div className=''>
                        <div className="tw-w-28 tw-flex tw-justify-evenly tw-gap-2 tw-bg-white tw-py-1.5 tw-rounded-full">
                            <button className='subButton tw-w-1/3 tw-text-medium tw-font-bold tw-text-center' onClick={substraction}>-</button>
                            <input type="number" id='demo' value="1" className='tw-w-1/3 tw-text-center tw-bg-white' disabled='disabled' />
                            <button className='addButton tw-w-1/3 tw-text-medium tw-font-bold tw-text-start' onClick={addition}>+</button>
                        </div>
                    </div>  
                </div>
                <hr />
                <Accordion>
                    <Accordion.Item eventKey="0" className='tw-border-none tw-my-3' size="sm">
                        <Accordion.Header><FontAwesomeIcon icon={faInfoCircle} className="tw-text-gray-700 tw-mr-1" /> More Info</Accordion.Header>
                        <Accordion.Body className='tw-px-8 tw-py-5'>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                            <ul className="tw-my-5">
                                <li className="d-flex tw-items-baseline tw-my-1 tw-text-gray-700 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-700 tw-text-md tw-mr-2" /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</li>
                                <li className="d-flex tw-items-baseline tw-my-1 tw-text-gray-700 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-700 tw-text-md tw-mr-2" /> quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
                                <li className="d-flex tw-items-baseline tw-mt-1 tw-text-gray-700 tw-font-semibold"><FontAwesomeIcon icon={faCheck} className="tw-text-gray-700 tw-text-md tw-mr-2" />  dolores eos qui ratione voluptatem sequi nesciunt.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className="lg:tw-flex lg:tw-justify-between tw-my-5">
                    <button className="tw-bg-yellow-300 tw-px-10 tw-py-3 tw-rounded-full hover:tw-bg-gray-700 tw-text-white tw-font-bold tw-m-2 tw-w-full lg:tw-w-auto tw-transition tw-duration-1000">Add to Wishlist</button>
                    <button className="tw-bg-gray-700 tw-px-10 tw-py-3 tw-rounded-full hover:tw-bg-yellow-300 tw-text-white tw-font-bold tw-m-2 tw-w-full lg:tw-w-auto tw-transition tw-duration-1000">Add to Compare</button>
                </div>
            </div>
            <div className='tw-px-5 sm:tw-px-14'>
                <div className='tw-py-10'>
                    <Form>
                        <p className='tw-text-xl tw-text-gray-700 tw-font-bold tw-my-5'>Write a Comment</p>
                        <div className='tw-px-2'>
                            <div className="tw-grid sm:tw-grid-cols-2 tw-gap-4">
                                <Form.Group className="tw-mb-1">
                                    <Form.Label className='tw-ml-1'>Name</Form.Label>
                                    <Form.Control type="text" name='name' id='name' className='tw-rounded-none tw-bg-white' />
                                </Form.Group>
                                <Form.Group className="tw-mb-1">
                                    <Form.Label className='tw-ml-1'>Email address</Form.Label>
                                    <Form.Control type="email" className='tw-rounded-none tw-bg-white' />
                                </Form.Group>
                            </div>
                            <Form.Group className="tw-mb-1">
                                    <Form.Label className='tw-ml-1'>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} className='tw-rounded-none tw-bg-white' />
                            </Form.Group>
                            <button className="tw-bg-gray-700 tw-px-10 tw-py-2 hover:tw-bg-yellow-300 tw-text-white tw-font-bold tw-my-5 tw-mx-auto tw-float-center lg:tw-float-right lg:tw-w-auto tw-transition tw-duration-1000">Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function FilterSidebar() {
  return (
    <div className='filter-sidebar tw-bg-white'>
        <div className='tw-mx-8 tw-py-10'>
            <div className='tw-mb-2'>
                <Form.Select aria-label="View">
                    <option> Grid View</option>
                    <option> List View</option>
                </Form.Select>
            </div>
            <div className='tw-mb-5'>
                <Form.Select aria-label="View">
                    <option> For Men</option>
                    <option> For Women</option>
                    <option> For Kids</option>
                </Form.Select>
            </div>
            <hr  className='tw-mb-7'/>
            <div className='tw-mb-8'>
                <p className='tw-gray-700 tw-font-semibold tw-text-lg tw-mb-3'>Sort by Prices</p>
                <Form className='tw-mx-4'>
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 1" label='Under 100 AED' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 2" label='Under 500 AED' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 3" label='Under 1000 AED' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 4" label='Under 5000 AED' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 5" label='Under 1000 AED' />
                </Form>
            </div>
            <div className='tw-mb-8'>
                <p className='tw-gray-700 tw-font-semibold tw-text-lg tw-mb-3'>Avg. Customer Review</p>
                <Form className='tw-mx-4'>
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 1" label='4.0 & 4.0+ Ratings' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 2" label='3.0 & 3.0+ Ratings' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 3" label='2.0 & 2.0+ Ratings' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 4" label='1.0 & 1.0+ Ratings' />
                </Form>
            </div>
            <div className='tw-mb-8'>
                <p className='tw-gray-700 tw-font-semibold tw-text-lg tw-mb-3'>Bee Stores Fashion</p>
                <Form className='tw-mx-4'>
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 1" label='Our Brands' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 2" label='Popular Brands' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 3" label='Premium Brands' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 4" label='Other Brands' />
                </Form>
            </div>
            <div className='tw-mb-8'>
                <p className='tw-gray-700 tw-font-semibold tw-text-lg tw-mb-3'>Bee Stores Brands</p>
                <Form className='tw-mx-4'>
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 1" label='Nike' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 2" label='Adidas' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 3" label='Puma' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 4" label='Reebok' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 5" label='Clarks' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 6" label='Skechers' />
                </Form>
            </div>
            <div className='tw-mb-8'>
                <p className='tw-gray-700 tw-font-semibold tw-text-lg tw-mb-3'>New Arrivals</p>
                <Form className='tw-mx-4'>
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 1" label='Last 7 Days' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 2" label='Last 30 Days' />
                    <Form.Check type="radio" className='tw-mb-1' aria-label="radio 3" label='Last 60 Days' />
                </Form>
            </div>
        </div>
    </div>
  )
}

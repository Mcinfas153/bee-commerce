import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faPhoneAlt, faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap'

export default function ProfileSettings() {
  return (
    <div>
        <div className='tw-grid md:tw-grid-cols-12 tw-gap-4 tw-mx-10 tw-my-10'>
            <div className='md:tw-col-span-4 lg:tw-col-span-3 tw-bg-white tw-border tw-rounded tw-px-2 tw-py-1'>
                <div className='tw-flex tw-justify-start tw-items-center tw-py-1'>
                    <img src="https://img.icons8.com/ios-glyphs/75/user-male-circle.png" alt="profile Picture" loading='lazy' />
                    <div className='tw-ml-2'>
                        <p className='tw-text-md tw-font-semibold'>User Name</p>
                        <p className='tw-text-xs tw-font-semibold'>Account type: Premium</p>
                    </div>
                </div>
                <hr />
                <div className='tw-py-4 tw-px-2'>
                    <p className='tw-text-lg tw-font-semibold tw-mb-3'>About Me</p>
                    <div className="tw-px-2">
                        <p className='tw-text-xs tw-font-semibold tw-mb-1'><FontAwesomeIcon icon={faUser} className="tw-mr-1" /> Male</p>
                        <p className='tw-text-xs tw-font-semibold tw-mb-1'><FontAwesomeIcon icon={faEnvelope} className="tw-mr-1" /> ihlas575@gmail.com</p>
                        <p className='tw-text-xs tw-font-semibold tw-mb-1'><FontAwesomeIcon icon={faPhoneAlt} className="tw-mr-1" /> +94-77-2097406</p>
                        <p className='tw-text-xs tw-font-semibold tw-mb-1'><FontAwesomeIcon icon={faBirthdayCake} className="tw-mr-1" /> 27/09/2005</p>
                    </div>
                </div>
            </div>
            <div className='md:tw-col-span-8 lg:tw-col-span-9 tw-bg-white tw-border'>
                <p>Hello World</p>
            </div>
        </div>
    </div>
  )
}

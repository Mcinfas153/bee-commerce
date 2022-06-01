import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faPhoneAlt, faBirthdayCake, faAt, faCalendarCheck, faPen, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

export default function UserProfile() {
  return (
    <div className='tw-px-10 tw-py-10 tw-grid-cols-12'>
        <p className='tw-text-gray-700 tw-text-xl tw-font-semibold tw-mb-3 text-center'>Your Informations</p>
        <div className="tw-grid sm:tw-grid-cols-12">
            <div className='sm:tw-col-span-2 lg:tw-col-span-4 xl:tw-col-span-4'>

            </div>
            <div className='sm:tw-col-span-8 lg:tw-col-span-4 xl:tw-col-span-4 tw-bg-white tw-border tw-rounded tw-px-5 tw-py-2'>
                <div className='tw-flex tw-justify-start tw-items-center tw-py-1'>
                    <img src="https://img.icons8.com/ios-glyphs/75/user-male-circle.png" alt="profile Picture" loading='lazy' />
                    <div className='tw-ml-2'>
                        <p className='tw-text-md tw-font-semibold'>User Name</p>
                        <p className='tw-text-xs tw-font-semibold'>Account type: <a href="#" className='tw-text-green-500'>Premium</a></p>
                    </div>
                </div>
                <hr />
                <div className='tw-py-4 tw-px-5'>
                    <p className='tw-text-lg tw-font-semibold tw-mb-3'>About Me</p>
                    <div className="tw-px-2 tw-pb-3">
                        <p className='tw-text-xs tw-font-semibold tw-mb-2'><FontAwesomeIcon icon={faAt} className="tw-mr-1" /> user_name</p>
                        <p className='tw-text-xs tw-font-semibold tw-mb-2'><FontAwesomeIcon icon={faUser} className="tw-mr-1" /> Male</p>
                        <p className='tw-text-xs tw-font-semibold tw-mb-2'><FontAwesomeIcon icon={faEnvelope} className="tw-mr-1" /> ihlas575@gmail.com</p>
                        <p className='tw-text-xs tw-font-semibold tw-mb-2'><FontAwesomeIcon icon={faPhoneAlt} className="tw-mr-1" /> +94-77-2097406</p>
                        <p className='tw-text-xs tw-font-semibold tw-mb-2'><FontAwesomeIcon icon={faGlobeAmericas} className="tw-mr-1" /> Sri Lanka, Asia</p>
                        <p className='tw-text-xs tw-font-semibold tw-mb-2'><FontAwesomeIcon icon={faBirthdayCake} className="tw-mr-1" /> 27/09/2005</p>
                        <p className='tw-text-xs tw-font-semibold tw-mb-2'><FontAwesomeIcon icon={faCalendarCheck} className="tw-mr-1" /> 12/05/2021</p>
                    </div>
                    <a href='/profile-settings' className='tw-bg-yellow-300 tw-px-4 tw-py-1.5 tw-rounded-md tw-float-right tw-mb-2 hover:tw-text-black'><FontAwesomeIcon icon={faPen} className="tw-mr-1" /> Edit Profile</a>
                </div>
            </div>
            <div className='sm:tw-col-span-2 lg:tw-col-span-4 xl:tw-col-span-4'>

            </div>
        </div>
    </div>
  )
}

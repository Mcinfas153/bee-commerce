import React from 'react'
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className='tw-px-10 tw-py-10'>
      <p className='tw-text-gray-700 tw-text-xl tw-font-semibold tw-mb-3'>Your Settings</p>
      <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-5'>
        <Link>
          <div className='tw-flex tw-justify-start tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded'>
            <div className='tw-mr-3'>
              <img src="https://img.icons8.com/color/75/touch-id.png" alt="" className='tw-rounded-full' loading='lazy' />
            </div>
            <div>
              <p className='tw-text-gray-700 tw-font-semibold'>
                Login & security
              </p>
              <p className='tw-text-yellow-400 tw-text-xs'>Edit login, name, and mobile number</p>
            </div>
          </div>
        </Link>
        <Link>
          <div className='tw-flex tw-justify-start tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded'>
            <div className='tw-mr-3'>
              <img src="https://img.icons8.com/color/75/moderator-male--v1.png" alt="" className='tw-rounded-full' loading='lazy' />
            </div>
            <div>
              <p className='tw-text-gray-700 tw-font-semibold'>Bee Premium</p>
              <p className='tw-text-yellow-400 tw-text-xs'>View benefits and Premium Accounts</p>
            </div>
          </div>
        </Link>
        <Link>
          <div className='tw-flex tw-justify-start tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded'>
            <div className='tw-mr-3'>
              <img src="https://img.icons8.com/color/75/gift-under.png" alt="" className='tw-rounded-full' loading='lazy' />
            </div>
            <div>
              <p className='tw-text-gray-700 tw-font-semibold'>Gifts Cards</p>
              <p className='tw-text-yellow-400 tw-text-xs'>View balance, redeem, or reload cards</p>
            </div>
          </div>
        </Link>
        <Link>
          <div className='tw-flex tw-justify-start tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded'>
            <div className='tw-mr-3'>
              <img src="https://img.icons8.com/color/75/circled-user-male-skin-type-7--v1.png" alt="" className='tw-rounded-full' loading='lazy' />
            </div>
            <div>
              <p className='tw-text-gray-700 tw-font-semibold'>Your Profiles</p>
              <p className='tw-text-yellow-400 tw-text-xs'>Manage profiles for your experiences</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

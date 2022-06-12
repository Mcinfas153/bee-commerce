import React from 'react'
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className='settings-page tw-px-10 tw-py-10'>
      <p className='tw-text-gray-700 tw-text-xl tw-font-semibold tw-mb-10'>Your Settings</p>
      <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3'>
        <Link>
          <div className='tw-grid tw-grid-cols-12 tw-gap-2 tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded-sm'>
            <div className='tw-col-span-3'>
              <img src="https://img.icons8.com/fluency/75/about-us-female.png" alt="" className='tw-w-full' loading='lazy' />
            </div>
            <div className='tw-col-span-9'>
              <p className='tw-text-gray-700 tw-font-semibold'>Account Settings</p>
              <p className='tw-text-yellow-400 tw-text-xs'>Edit your account informations for best experiences</p>
            </div>
          </div>
        </Link>
        <Link>
          <div className='tw-grid tw-grid-cols-12 tw-gap-2 tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded-sm'>
            <div className='tw-col-span-3'>
              <img src="https://img.icons8.com/fluency/75/bunch-of-keys-1.png" alt="" className='tw-rounded-full tw-w-full' loading='lazy' />
            </div>
            <div className='tw-col-span-9'>
              <p className='tw-text-gray-700 tw-font-semibold'>Login & Security</p>
              <p className='tw-text-yellow-400 tw-text-xs'>Edit your login and security informations</p>
            </div>
          </div>
        </Link>
        <Link>
          <div className='tw-grid tw-grid-cols-12 tw-gap-2 tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded-sm'>
            <div className='tw-col-span-3'>
              <img src="https://img.icons8.com/external-flat-deni-mao/75/external-premium-online-shopping-flat-deni-mao.png" alt="" className='tw-rounded-full tw-w-full' loading='lazy' />
            </div>
            <div className='tw-col-span-9'>
              <p className='tw-text-gray-700 tw-font-semibold'>Bee Premium</p>
              <p className='tw-text-yellow-400 tw-text-xs'>View benefits of Bee Premium Accounts</p>
            </div>
          </div>
        </Link>
        <Link>
          <div className='tw-grid tw-grid-cols-12 tw-gap-3 tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded-sm'>
            <div className='tw-col-span-3'>
              <img src="https://img.icons8.com/external-smashingstocks-isometric-smashing-stocks/75/external-add-user-social-media-smashingstocks-isometric-smashing-stocks.png" alt="" className='tw-rounded-full tw-w-full' loading='lazy' />
            </div>
            <div className='tw-col-span-9'>
              <p className='tw-text-gray-700 tw-font-semibold'>Your Profiles</p>
              <p className='tw-text-yellow-400 tw-text-xs'>Manage your business and personal accounts</p>
            </div>
          </div>
        </Link>
        <Link>
          <div className='tw-grid tw-grid-cols-12 tw-gap-2 tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded-sm'>
            <div className='tw-col-span-3'>
              <img src="https://img.icons8.com/color/75/bitcoin--v1.png" alt="" className='tw-rounded-full tw-w-full' loading='lazy' />
            </div>
            <div className='tw-col-span-9'>
              <p className='tw-text-gray-700 tw-font-semibold'>Payment Settings</p>
              <p className='tw-text-yellow-400 tw-text-xs'>Add, remove or edit payment methods</p>
            </div>
          </div>
        </Link>
        <Link>
          <div className='tw-grid tw-grid-cols-12 tw-gap-2 tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded-sm'>
            <div className='tw-col-span-3'>
              <img src="https://img.icons8.com/fluency/75/privacy-policy.png" alt="" className='tw-rounded-full tw-w-full' loading='lazy' />
            </div>
            <div className='tw-col-span-9'>
              <p className='tw-text-gray-700 tw-font-semibold'>Privacy Policy</p>
              <p className='tw-text-yellow-400 tw-text-xs'>How we collect and process your personal information</p>
            </div>
          </div>
        </Link>
        <Link>
          <div className='tw-grid tw-grid-cols-12 tw-gap-2 tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded-sm'>
            <div className='tw-col-span-3'>
              <img src="https://img.icons8.com/cute-clipart/75/help.png" alt="" className='tw-rounded-full tw-w-full' loading='lazy' />
            </div>
            <div className='tw-col-span-9'>
              <p className='tw-text-gray-700 tw-font-semibold'>Get Help</p>
              <p className='tw-text-yellow-400 tw-text-xs'>Get help for the best user experience and interface</p>
            </div>
          </div>
        </Link>
        <Link>
          <div className='tw-grid tw-grid-cols-12 tw-gap-2 tw-items-center tw-bg-white tw-border tw-py-3 tw-px-5 tw-rounded-sm'>
            <div className='tw-col-span-3'>
              <img src="https://img.icons8.com/color/75/technical-support.png" alt="" className='tw-rounded-full tw-w-full' loading='lazy' />
            </div>
            <div className='tw-col-span-9'>
              <p className='tw-text-gray-700 tw-font-semibold'>Contact us</p>
              <p className='tw-text-yellow-400 tw-text-xs'>Contact us for learn more about us and our services</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

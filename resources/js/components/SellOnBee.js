import React from 'react'

export default function SellOnBee() {
  return (
    <div className='sell-on-bee'>
        <div className='tw-grid tw-grid-cols-12 tw-gap-5 md:tw-gap-10 tw-items-center tw-px-10 tw-py-10'>
            <div className='tw-col-span-12 md:tw-col-span-6'>
                <img src="/images/sell-on-bee.png" alt="" className='tw-mx-auto' />
            </div>
            <div className='tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-5 xl:tw-col-span-4'>
                <p className='tw-font-bold tw-text-3xl lg:tw-text-4xl tw-text-center md:tw-text-left tw-mb-7 tw-text-yellow-300'>
                    Sell Your Products on
                    Bee Stores
                </p>
                <p className='tw-font-bold tw-text-medium tw-mb-6 tw-text-start tw-text-gray-700'>Put your products in front of the millions of customers who search Amazon.com every day.</p>
                <a href="/login-my-store">
                    <button type="button" className="btn tw-w-full tw-py-2.5 lg:tw-py-3 tw-px-14 tw-mb-1 tw-rounded-full tw-bg-yellow-300 hover:tw-bg-gray-600 tw-text-lg tw-text-white tw-font-bold tw-mx-auto" title='Get Started'>Get Started</button>
                </a>
                <p className='tw-text-sm tw-text-center tw-text-gray-700'>$19.99 a month + selling fees</p>
            </div>
        </div>
    </div>
  )
}

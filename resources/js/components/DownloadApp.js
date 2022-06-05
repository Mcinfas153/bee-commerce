import React from 'react'

export default function DownloadApp() {
  return (
    <div className='downloadapp-page tw-px-10 tw-py-10'>
        <div className='tw-grid md:tw-grid-cols-12 tw-gap-1 tw-items-center tw-mt-10'>
            <div className='md:tw-col-span-5 tw-mb-10'>
                <img src="/images/download-app.png" alt="App" className='mx-auto' />
            </div>
            <div className='md:tw-col-span-7'>
                <div className='tw-mb-8'>
                    <p className='tw-text-gray-700 tw-text-3xl tw-font-bold tw-mb-6'>Get Bee Stores from Appstore & Playstore</p>
                    <p className='tw-text-gray-700'>
                        We know what matters for our customers, it's not just the products they purchase but the experience of it. The new Bee Stores will connect you with the remotest of the sellers, bringing you products from far and wide. Be it cricket streaming or live selling, we are devoted to bringing you what you want, in every shape, size, and color.
                        Now enjoy the better search experience with new tabs under search, new ways to sort products the way you want them and so much more!
                    </p>
                    <br />
                    <p className=''>
                        Devices: All Devices
                        <br />
                        Users: 100M+
                        <br />
                        Current Version: 1.2 BETA
                        <br />
                        Content rating: Rated for 16+
                        <br />
                        Interactive Elements: Users interact, Digital purchases
                        <br />
                        Offered By: Bee Inc.
                        <br />
                        Visit the Website: https://stores.beeonline.xyz/
                        <br />
                        Contact us: contact@beeonline.xyz
                    </p>
                </div>
                <div className='tw-flex tw-justify-around tw-items-center'>
                    <div className='tw-mb-2'>
                        <a href="https://play.google.com/store" target={'_blank'}>
                            <img src="/images/playstore.png" alt="Download App on Playstore" className='tw-w-auto tw-h-16 sm:tw-w-60 sm:tw-h-20 mx-auto' title='Download App on Playstore' />
                        </a>
                    </div>
                    <div className='tw-mb-2'>
                        <a href="https://www.apple.com/app-store/" target={'_blank'}>
                            <img src="/images/appstore.png" alt="Download App on Appstore" className='tw-w-auto tw-h-16 sm:tw-w-60 sm:tw-h-20 mx-auto' title='Download App on Appstore' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

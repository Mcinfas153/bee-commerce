import React from 'react'

export default function LoginMyStore() {
  return (
        <div className="login-my-store">
            <div className="m-auto">
                <div className="xl:tw-w-4/12 lg:tw-w-5/12 md:tw-w-6/12 sm:tw-w-8/12 tw-w-10/12 tw-mt-10 tw-px-10 tw-py-5 tw-rounded-md tw-bg-white tw-mx-auto tw-mt-5">
                    <form className="md:tw-mt-5">
                        <div className='tw-flex tw-justify-center items-center mb-2'>
                            <img src="/images/logo.png" /> 
                        </div>
                        <p className='tw-text-md tw-font-light tw-text-center tw-text-yellow-300'>Sign in to start your business with Bee Stores</p>
                        <div className="tw-my-5">
                            <p className="tw-mb-2 tw-ml-2 tw-text-sm tw-font-semibold tw-text-gray-600">Store Name</p>
                            <input type="email" id="shopname" className="form-control tw-w-full tw-rounded-full tw-py-2 tw-px-5 tw-mb-1 tw-bg-gray-100 focus:tw-border-gray-300" />
                        </div>
                        <div className="tw-mb-4">
                            <p className="tw-mb-2 tw-ml-2 tw-text-sm tw-font-semibold tw-text-gray-600">Password</p>
                            <input type="password" id="password" className="form-control tw-w-full tw-rounded-full tw-py-2 tw-px-5 tw-mb-1 tw-bg-gray-100 focus:tw-border-gray-300" />
                        </div>
                        <div className="tw-grid tw-grid-cols-12 tw-gap-2 sm:tw-gap-1 tw-mt-10 md:tw-mt-5 tw-items-center">
                            <div className="tw-col-span-12 sm:tw-col-span-6 sm:tw-mx-auto">
                                <button type="submit" className="btn tw-w-full tw-py-2 tw-px-10 md:tw-px-10 tw-rounded-full tw-bg-gray-600 hover:tw-bg-yellow-300 tw-text-white tw-font-bold" title='Login to a Store on Bee'>Sign in</button>
                            </div>
                            <div className="tw-col-span-12 sm:tw-col-span-6 sm:tw-mx-auto">
                                <a href="/register-my-store">
                                    <button type="button" className="btn tw-w-full tw-py-2 tw-px-10 md:tw-px-10 tw-rounded-full tw-bg-yellow-300 hover:tw-bg-gray-600 tw-text-white tw-font-bold" title='Register a Store on Bee'>Resgister</button>
                                </a>
                            </div>
                            <div className="tw-col-span-12 tw-mx-auto tw-mt-10 md:tw-mt-10">
                                <a href="#" className="tw-underline tw-text-gray-600 hover:tw-text-yellow-300"><p>Forgot Your Shop's Password?</p></a>
                            </div>
                            <div className="tw-col-span-12 tw-mx-auto">
                                <a href="/" className="tw-underline tw-text-gray-600 hover:tw-text-yellow-300"><p>Return to Store</p></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
  )
}

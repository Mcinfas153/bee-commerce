import React from 'react'

export default function Register() {
    return (
        <div className="register">
            <div className="tw-m-auto">
                <p className="tw-text-4xl tw-text-center tw-py-8 tw-font-black tw-text-blue-900">Create Account</p>
                <div className="xl:tw-w-5/12 lg:tw-w-7/12 md:tw-w-9/12 tw-mt-3 tw-p-10 tw-rounded-md tw-mx-auto md:tw-border tw-border-gray-500">
                    <form className="md:tw-mt-5">
                        <div className="tw-mb-4">
                            <p className="tw-mb-2 tw-ml-2 tw-text-sm tw-font-semibold tw-text-blue-900">First Name</p>
                            <input type="text" id="firstName" className="tw-w-full tw-rounded-full tw-py-2.5 tw-px-5 tw-mb-1 tw-bg-gray-200 focus:tw-border-blue-500" />
                        </div>
                        <div className="tw-mb-4">
                            <p className="tw-mb-2 tw-ml-2 tw-text-sm tw-font-semibold tw-text-blue-900">Last Name</p>
                            <input type="text" id="lastName" className="tw-w-full tw-rounded-full tw-py-2.5 tw-px-5 tw-mb-1 tw-bg-gray-200 focus:tw-border-blue-500" />
                        </div>
                        <div className="tw-mb-4">
                            <p className="tw-mb-2 tw-ml-2 tw-text-sm tw-font-semibold tw-text-blue-900">Email Address</p>
                            <input type="email" id="username" className="tw-w-full tw-rounded-full tw-py-2.5 tw-px-5 tw-mb-1 tw-bg-gray-200 focus:tw-border-blue-500" />
                        </div>
                        <div className="tw-mb-4">
                            <p className="tw-mb-2 tw-ml-2 tw-text-sm tw-font-semibold tw-text-blue-900">Password</p>
                            <input type="password" id="password" className="tw-w-full tw-rounded-full tw-py-2.5 tw-px-5 tw-mb-1 tw-bg-gray-200 focus:tw-border-blue-500" />
                        </div>
                        <div className="tw-grid tw-grid-cols-12 tw-gap-1 tw-mt-10 md:tw-mt-5 tw-items-center">
                            <div className="tw-col-span-12 md:tw-col-span-4 tw-mx-auto">
                                <button type="submit" className="tw-w-auto tw-py-3 tw-px-20 md:tw-px-10 tw-rounded-full tw-bg-blue-900 hover:tw-bg-yellow-500 tw-text-white tw-font-bold">Create</button>
                            </div>
                            <div className="col-span-12 md:col-span-2 mx-auto">
                                <p>OR</p>
                            </div>
                            <div className="tw-col-span-12 md:tw-col-span-6 tw-mx-auto">
                                <button type="submit" className="tw-w-auto tw-py-3 tw-px-20 md:tw-px-10 tw-rounded-full tw-bg-yellow-500 hover:tw-bg-blue-900 tw-text-white tw-font-bold">Return to Store</button>
                            </div>
                            <div className="tw-col-span-12 tw-mx-auto tw-mt-20 md:tw-mt-10">
                                <a href="#" className="tw-underline tw-text-blue-900 hover:tw-text-yellow-500"><p>Already Have an Account?</p></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}

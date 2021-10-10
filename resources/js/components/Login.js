import React from 'react';

export default function Login() {
    return (
        <div className="login">
            <div className="m-auto">
                <p className="text-4xl text-center py-8 font-black text-blue-900">LOGIN</p>
                <div className="xl:w-5/12 lg:w-7/12 md:w-9/12 mt-3 p-10 rounded-md mx-auto md:border border-gray-500 mt-5">
                    <form className="md:mt-5">
                        <div className="mb-4">
                            <p className="mb-2 ml-2 text-sm font-semibold text-blue-900">Username</p>
                            <input type="email" id="username" className="w-full rounded-full py-2.5 px-5 mb-1 bg-gray-100 focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2 ml-2 text-sm font-semibold text-blue-900">Password</p>
                            <input type="password" id="password" className="w-full rounded-full py-2.5 px-5 mb-1 bg-gray-100 focus:border-blue-500" />
                        </div>
                        <div className="grid grid-cols-12 gap-1 mt-10 md:mt-5 items-center">
                            <div className="col-span-12 md:col-span-4 mx-auto">
                                    <button type="submit" className="w-auto py-3 px-20 md:px-10 rounded-full bg-blue-900 hover:bg-yellow-500 text-white font-bold">Sign in</button>
                            </div>
                            <div className="col-span-12 md:col-span-2 mx-auto">
                                <p>OR</p>
                            </div>
                            <div className="col-span-12 md:col-span-6 mx-auto">
                                    <button type="submit" className="w-auto py-3 px-20 md:px-10 rounded-full bg-yellow-500 hover:bg-blue-900 text-white font-bold">Return to Store</button>
                            </div>
                            <div className="col-span-12 mx-auto mt-20 md:mt-10">
                                <a href="#" className="underline text-blue-900 hover:text-yellow-500"><p>Forgot Your Password?</p></a>
                            </div>
                            <div className="col-span-12 mx-auto mt-1">
                                <a href="#" className="underline text-blue-900 hover:text-yellow-500"><p>Create an Account</p></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

import React from 'react';

export default function Login() {
    return (
        <div className="login">
            <div className="m-auto">
            <p className="text-3xl text-center py-10 font-bold text-purple-900">LOGIN</p>
                <div className="xl:w-5/12 lg:w-7/12 md:w-9/12 mt-3 p-10 md:p-20 rounded-md mx-auto md:border border-gray-500 mt-5">
                    <form>
                        <div className="mb-2">
                            <p className="mb-1 text-sm">Username</p>
                            <input type="email" id="username" className="w-full rounded-full py-2.5 px-5 mb-1 bg-gray-100 focus:border-blue-500" />
                        </div>
                        <div className="mb-2">
                            <p className="mb-1 text-sm">Password</p>
                            <input type="password" id="password" className="w-full rounded-full py-2.5 px-5 mb-1 bg-gray-100 focus:border-blue-500" />
                        </div>
                        <div className="grid grid-cols-12 gap-1 mt-10 md:mt-5 items-center">
                            <div className="col-span-12 md:col-span-4 mx-auto">
                                    <button type="submit" className="w-auto py-3 px-20 md:px-10 rounded-full bg-purple-900 hover:bg-yellow-500 text-white font-bold">Sign in</button>
                            </div>
                            <div className="col-span-12 md:col-span-2 mx-auto">
                                <p>OR</p>
                            </div>
                            <div className="col-span-12 md:col-span-6 mx-auto">
                                    <button type="submit" className="w-auto py-3 px-20 md:px-10 rounded-full bg-yellow-500 hover:bg-purple-900 text-white font-bold">Return to Store</button>
                            </div>
                            <div className="col-span-12 mx-auto mt-20 md:mt-10">
                                <a href="#" className="underline text-purple-900 hover:text-yellow-500">Forgot Your Password?</a>
                            </div>
                            <div className="col-span-12 mx-auto mt-1">
                                <a href="#" className="underline text-purple-900 hover:text-yellow-500">Create an Account</a>
                            </div>
                        </div>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 flex items-center justify-items-center md:justify-items-stretch">
                            <div className="">
                                <a href="/register"><p className="text-yellow-400 text-center sm:text-left">Already have an account?</p></a>
                            </div>
                            <div className="">
                                <button type="submit" className="float-right p-2.5 px-5 rounded-md bg-yellow-400 text-white mt-3 md:my-0">Submit</button>
                            </div>
                        </div> */}
                    </form>
                </div>
            </div >
            {/* <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-500 p-5 col-span-2">Div 01</div>
                <div className="bg-green-500 p-5">Div 03</div>
            </div> */}
        </div >
    )
}

import React from 'react';

export default function Login() {
    return (
        <div className="login">
            <div className="m-auto">
                <div className="md:w-4/12 mt-3 p-10 rounded-md mx-auto bg-white">
                    <p className="text-3xl text-center mb-10 font-bold text-yellow-400">LOGIN</p>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="username">Email: </label>
                            <input type="email" id="username" className="w-full rounded py-2.5 px-3 mb-1 bg-gray-100 border-2 border-yellow-300 focus:border-blue-500" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password" className="w-full rounded py-2.5 px-3 mb-1 bg-gray-100 border-2 border-yellow-300 focus:border-blue-500" placeholder="Enter your password" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 flex items-center justify-items-center md:justify-items-stretch">
                            <div className="">
                                <a href="/register"><p className="text-yellow-400 text-center sm:text-left">Already have an account?</p></a>
                            </div>
                            <div className="">
                                <button type="submit" className="float-right p-2.5 px-5 rounded-md bg-yellow-400 text-white mt-3 md:my-0">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-500 p-5 col-span-2">Div 01</div>
                <div className="bg-green-500 p-5">Div 03</div>
            </div>
        </div >
    )
}

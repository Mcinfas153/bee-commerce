import React from 'react';

export default function Login() {
    return (
        <div className="login">
            <div className="m-auto">
                <div className="lg:w-6/12 md:mt-4 md:py-20 md:p-20 p-10 py-40 rounded-md mx-auto lg:bg-white">
                    <img src="../..\images\logo.png" alt="" className="mx-auto"/>
                    <p className="text-3xl font-medium text-center pb-10 pt-3">LOGIN</p>
                    <p className="mb-3 text-yellow-400">If you have an account with us, please log in.</p>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="username">Enter Your Email Address:</label>
                            <input type="email" id="username" className="w-full rounded py-2.5 px-3 mb-1 bg-gray-100"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Enter Your Password:</label>
                            <input type="password" id="password" className="w-full rounded py-2.5 px-3 mb-1 bg-gray-100"/>
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#"><p className="text-blue-400">Already Have Account?</p></a>
                            <button type="submit" className="float-right p-2.5 px-5 rounded-md bg-blue-400 text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>         
        </div>
    )
}

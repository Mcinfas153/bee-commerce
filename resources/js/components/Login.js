import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { userLogin } from './admin/store/actions/UserActions';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
}).required();

export function Login(props) {

    let history = useHistory();

    const { user } = props

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const login = (data) => {
        props.userLogin(data)
    }

    useEffect(() => {
        user.isAuthenticated && history.push("/")
    }, [user.isAuthenticated])

    return (
        <div className="login">
            <div className="m-auto">
                <div className="xl:tw-w-4/12 lg:tw-w-5/12 md:tw-w-6/12 sm:tw-w-8/12 tw-w-10/12 tw-mt-10 tw-px-10 tw-py-5 tw-rounded-md tw-bg-white tw-mx-auto tw-mt-5">
                    <form className="md:tw-mt-5" onSubmit={handleSubmit(login)}>
                        <div className='tw-flex tw-justify-center items-center mb-1'>
                            <img src="/images/logo.png" /> 
                        </div>
                        <p className='tw-text-md tw-font-light tw-text-center tw-text-yellow-300'>Sign in to start your shopping</p>
                        <div className="tw-my-5">
                            <p className="tw-mb-2 tw-ml-2 tw-text-sm tw-font-semibold tw-text-gray-600">Username</p>
                            <input type="email" id="username" {...register("email")} className="form-control tw-w-full tw-rounded-full tw-py-2 tw-px-5 tw-mb-1 tw-bg-gray-100 focus:tw-border-gray-300" />
                            <p className="tw-text-gray-600 tw-ml-3">{errors.email?.message}</p>
                        </div>
                        <div className="tw-mb-4">
                            <p className="tw-mb-2 tw-ml-2 tw-text-sm tw-font-semibold tw-text-gray-600">Password</p>
                            <input type="password" id="password" {...register("password")} className="form-control tw-w-full tw-rounded-full tw-py-2 tw-px-5 tw-mb-1 tw-bg-gray-100 focus:tw-border-gray-300" />
                            <p className="tw-text-gray-600 tw-ml-3">{errors.password?.message}</p>
                        </div>
                        <div className="tw-grid tw-grid-cols-12 tw-gap-2 sm:tw-gap-1 tw-mt-10 md:tw-mt-5 tw-items-center">
                            <div className="tw-col-span-12 sm:tw-col-span-6 sm:tw-mx-auto">
                                <button type="submit" className="btn tw-w-full tw-py-2 tw-px-10 md:tw-px-10 tw-rounded-full tw-bg-gray-600 hover:tw-bg-yellow-300 tw-text-white tw-font-bold">Sign in</button>
                            </div>
                            <div className="tw-col-span-12 sm:tw-col-span-6 sm:tw-mx-auto">
                                <button type="button" onClick={() => history.push("/register")} className="btn tw-w-full tw-py-2 tw-px-10 md:tw-px-10 tw-rounded-full tw-bg-yellow-300 hover:tw-bg-gray-600 tw-text-white tw-font-bold">Resgister</button>
                            </div>
                            <div className="tw-col-span-12 tw-mx-auto tw-mt-10 md:tw-mt-10">
                                <a href="#" className="tw-underline tw-text-gray-600 hover:tw-text-yellow-300"><p>Forgot Your Password?</p></a>
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

const mapStateToProps = (state) => {
    return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (data) => dispatch(userLogin(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Alert(props) {

    const { message, type } = props;

    const notify = () => {
        toast(message, {
            position: toast.POSITION.TOP_RIGHT,
            type: type,
            theme: "colored"
        });
    };

    useEffect(() => {
        notify()
    })

    return (
        <ToastContainer />
    )
}

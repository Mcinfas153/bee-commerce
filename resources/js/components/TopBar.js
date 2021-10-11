import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function TopBar() {

    const [alertShow, setAlertShow] = useState(true)

    return (
        alertShow &&
        <div className="tw-topbar tw-bg-blue-900 tw-p-2 tw-flex tw-flex-row tw-lex-wrap tw-justify-center tw-align-items-center">
            <p className="tw-text-xs md:tw-text-sm tw-text-yellow-500 tw-text-center">Due to the <span className="font-bold">COVID 19</span> epidemic, orders may be processed with a slight delay </p>
            <span className="tw-absolute tw-top-2 md:tw-top-1 tw-right-2 tw-cursor-pointer tw-text-yellow-500" onClick={() => setAlertShow(false)}><FontAwesomeIcon icon={faTimes} /></span>
        </div>
    )
}

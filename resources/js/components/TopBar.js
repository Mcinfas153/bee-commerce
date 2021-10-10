import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function TopBar() {

    const [alertShow, setAlertShow] = useState(true)

    return (
        alertShow &&
        <div className="topbar bg-blue-900 p-2">
            <p className="text-sm text-yellow-500 text-center">Due to the <span className="font-bold">COVID 19</span> epidemic, orders may be processed with a slight delay <span className="absolute right-0 right-2 cursor-pointer" onClick={() => setAlertShow(false)}><FontAwesomeIcon icon={faTimes} /></span></p>
        </div>
    )
}

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function TopBar() {

    const [alertShow, setAlertShow] = useState(true)

    return (
        alertShow &&
        <div className="tw-topbar tw-bg-yellow-300 tw-p-2">
            <div className="md:tw-grid md:tw-grid-cols-3">
                <div class="tw-col-span-2 md:tw-flex md:tw-justify-start gap-5">
                    <div className="tw-flex tw-content-center gap-1 tw-my-1">
                        <img src="https://framestrapimaster.blob.core.windows.net/assets/images/fast_delivery_17b9ee4153_d668dca9eb_a8fdc87713.svg" className="tw-h-4" />
                        <p className="tw-text-gray-50 tw-text-xs tw-font-medium tw-tracking-wide">Fast & Free Delivery</p>
                    </div>
                    <div className="tw-flex tw-content-center gap-1 tw-my-1">
                        <img src="https://framestrapimaster.blob.core.windows.net/assets/images/1million_639c1ee7d2_1c053c9c92_791f12fdc5.svg" className="tw-h-4" />
                        <p className="tw-text-gray-50 tw-text-xs tw-font-medium tw-tracking-wide">Shop from over 1 million products</p>
                    </div>
                    <div className="tw-flex tw-content-center gap-1 tw-my-1">
                        <img src="https://framestrapimaster.blob.core.windows.net/assets/images/FREE_RETURN_d5a70bdcc9_e1226197e2_d8602b93c4.svg" className="tw-h-4" />
                        <p className="tw-text-gray-50 tw-text-xs tw-font-medium tw-tracking-wide">Free Returns</p>
                    </div>
                </div>
                <div class="tw-col-span-1 md:tw-flex md:tw-justify-end">
                    <div className="tw-flex tw-content-center gap-1 tw-my-1">
                        <img src="https://framestrapimaster.blob.core.windows.net/assets/images/fast_delivery_17b9ee4153_d668dca9eb_a8fdc87713.svg" className="tw-h-4" />
                        <p className="tw-text-gray-50 tw-text-xs tw-font-medium tw-tracking-wide">+94 76 487 8633</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

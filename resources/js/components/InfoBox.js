import React from 'react'

export default function InfoBox(props) {

    const { color, value, text } = props;

    return (
        <div className={`tw-border tw-flex tw-flex-col tw-p-5 tw-bg-${color}-500`}>
            <p className="tw-text-white tw-font-bold tw-text-base tw-uppercase tw-tracking-widest">{text}</p>
            <p className="tw-text-white tw-font-bold tw-text-2xl tw-mt-5">{value}</p>
        </div >
    )
}

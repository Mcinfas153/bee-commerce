import React from 'react'
import Loader from "react-loader-spinner";

export default function Spinner() {
    return (
        <Loader
            type="Circles"
            color="#00BFFF"
            height={30}
            width={30}
        />
    )
}

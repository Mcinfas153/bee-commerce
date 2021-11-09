import React from 'react'
import { useParams } from 'react-router';

export default function ProductsPage() {
    let { id } = useParams();
    return (
        <div>
            <h1>This is Products page {id}</h1>
        </div>
    )
}

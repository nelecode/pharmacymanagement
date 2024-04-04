import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function ProductError() {
    const error = useRouteError()
    return (
        <div>
            <h2>error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to home page</Link>
        </div>
    )
}

export default ProductError
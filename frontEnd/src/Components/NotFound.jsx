import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {

    const customHeight = {
        height: "100vh"
    }

    return (
        <div style={customHeight} className='container shadow-lg my-4 rounded mh-100 border'>
            <div className="text-center mt-6">
                <h3>Page Not Found</h3>
                <p>Go To <Link to="/"><span className="btn btn-primary">Home Page</span></Link></p>
            </div>
        </div>
    )
}

export default NotFound
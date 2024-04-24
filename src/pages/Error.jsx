import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <div className='errbody'>
            <h1 className='errorh1'>
                404
            </h1>
            <p className='errorp'>
                Page Not Found.....
            </p>
            <Link to='/'>
                <button className='errorbtn'>
                    Return To HomePage
                </button>
            </Link>
        </div>
    )
}

export default Error
import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <hr />
            <div className="container">{children}</div>
        </div>
    )
}

export default Layout
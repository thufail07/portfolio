import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout

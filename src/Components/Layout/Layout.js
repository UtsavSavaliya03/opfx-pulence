import React from 'react';
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

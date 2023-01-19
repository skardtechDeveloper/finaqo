import React from 'react'
import Header from './header';
import Footer from './footer';

const Mainlayout = ({ children }:{children:any}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Mainlayout;
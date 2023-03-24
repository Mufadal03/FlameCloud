import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'

const HOC = ({children}) => {
  return (
    
      <>
          <Navbar />
          {children}
          <Footer />
      </>
  )
}

export default HOC
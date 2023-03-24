import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Allroutes = () => {
  return (
   <Routes>
          <Route path='/' element={"h1"} />
          <Route path='/proxy-checker' element='proxy' />
          <Route path='*' element='404 not found' />
   </Routes>
  )
}

export default Allroutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HOC from '../components/HOC'
import Home from '../pages/Home'
import ProxyChecker from '../pages/ProxyChecker'

const Allroutes = () => {
  return (
   <Routes>
          <Route path='/' element={<HOC><Home /></HOC>} />
          <Route path='/proxy-checker' element={<HOC><ProxyChecker /></HOC>} />
          <Route path='*' element='404 not found' />
   </Routes>
  )
}

export default Allroutes
import { Box } from '@chakra-ui/react'
import React from 'react'
import Blog from '../components/Blog'
import Features from '../components/Features'
import Landing from '../components/Landing'
import Plans from '../components/Plans'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
      <Box overflow={'hidden'} >
          <Landing />
          <Features />
          <Plans />
          <Testimonial />
          <Blog />
    </Box>
  )
}

export default Home
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const GridCard = () => {
  return (
      <>
          <Box w={{base:'',lg:'354px'}}  h={{base:'140px',lg:'221px'}} bgColor={'rgba(7, 123, 255, 0.1)'} border='1px solid rgba(7, 123, 255, 0.5)' borderRadius={'5px'}></Box>
          <Text className='blog_title' fontSize={{base:'16px',md:'20px'}}>Blog Title appear here</Text>
          <Text className='blog_category' fontSize={{base:'14px',md:'16px'}}>Category name here</Text>
      </>
  )
}

export default GridCard
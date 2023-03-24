import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import "../styles/landing.css"
const FeatureCard = ({ data }) => {
    console.log(data)
  return (
      <Flex className='featureCard' bgColor={data.bgColor} border={`1px solid ${data?.borderColor}`}alignItems='center' justifyContent={'center'}>
          <Flex  w='244px' alignItems={'center'} gap='10px'>
              <Box borderRadius={'8px'} bgGradient={data?.IconColor} w='50px' h='40px'></Box>
              <Text>Lorem ipsum, dolor sit amet ispsum </Text>
          </Flex>
    </Flex>
  )
}

export default FeatureCard
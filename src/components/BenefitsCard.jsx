import {Flex, Text } from '@chakra-ui/react'
import React from 'react'
import "../styles/landing.css"

const BenefitsCard = ({ data }) => {
  return (
    // Landing-page-individual-benifits-card
      <Flex className='BenefitsCard'w={{base:'',md:'285.84px'}} h={{base:'80px',md:'95.28px'}} fontFamily={'Figtree'} bgColor={data.bgColor} border={`1px solid ${data?.borderColor}`}alignItems='center' justifyContent={'center'} p={{base:'10px',md:'20px'}}>
          <Flex alignItems={'center'} justifyContent='space-between' gap='16px'>
              <Text bgGradient={data?.IconColor} borderRadius='8px' w={{base:'40px',md:'60px'}} h={{base:'30px',md:'40px'}}></Text>
              <Text fontSize={{base:'14px',lg:'18px'}} textTransform='capitalize'>Lorem ipsum, dolor sit amet ispsum </Text>
          </Flex>
    </Flex>
    // Landing-page-individual-benifits-card
  )
}

export default BenefitsCard
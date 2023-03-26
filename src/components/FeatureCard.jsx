import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import '../styles/features.css'
import featureIcon from '../assets/icons/feature.svg'
const FeatureCard = ({number}) => {
  return (
    // Individual-feature-card
      <Flex border={'1px solid rgba(255, 255, 255, 0.25)'} borderRadius='5px' w={{base:'180px',sm:'200px',lg:'286px'}} h='160px' justifyContent={'center'} alignItems='center' p={{base:'1rem',md:'1.5rem'}}>
          <Flex direction={'column'}  gap='8px' alignItems={'flex-start'}>
              <Image src={featureIcon} h='20px'/>
              <Text className='feature_number'> Feature No {number}</Text>
              <Text className='feature_details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</Text>
          </Flex>
    </Flex>
    // Individual-feature-card

  )
}

export default FeatureCard
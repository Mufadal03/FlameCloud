import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import '../styles/plans.css'
import Ip4 from './Ip4'
import Ip6 from './Ip6'
import tickIcon from '../assets/icons/tick.svg'
import crownIcon from '../assets/icons/crown.svg'
const Plans = () => {
    return (
    //   plan-container
      <Box w={{base:'95vw',lg:'708px'}}  m={{base:'150px auto',md:'180px auto'}} fontFamily='Figtree'> 
                {/* plan-heading-subheading */}
            <VStack h='97px' m='auto'>
              <Text className='plans_heading'>You choose, we <Text as='span' color='#077BFF'> Deliver!</Text></Text>
              <Text className='plans_detail' w={{base:'90%',md:'70%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            </VStack>
            {/* plan-heading-subheading */}
            
            {/* plans-available-container */}
          <Flex mt={{ base:'80px',lg:'99px'}} alignItems={{base:'center',md:'inherit'}} direction={{base:'column',sm:'column',md:'row'}} gap='20px'>
              <Ip4 />
              <Ip6 />
            </Flex>
            {/* plans-available-container */}

            {/* Become-reseller-/-plan-includes */}
            <Flex className='plans_includes_card' p='20px 28px' w={{ base: '100%', sm: '100%', md: 'auto' }} mt='21px' gap='34px'>
                {/* become-reseller-container */}
              <Box >
                  <Flex justifyContent={'center'} alignItems='center' h='50px' w='50px' bgGradient={'linear-gradient(135deg, #FFDE2E 0%, #E38B08 100%)'} borderRadius='8px'>
                      <Image src={crownIcon} h='30' w='30px' />
                  </Flex>
                  <Text className='plans_become_reseller' my='8px'>Become a Reseller</Text>
                  <Text className='plans_reseller'>200+ Happy Resellers</Text>
                </Box>
                {/* become-reseller-container */}
                {/* reseller-plan-includes-container */}
              <Box>
                  <Text className='plans_include'>Plan Includes :</Text>
                  <HStack justifyContent={'space-between'} mt='10px' gap='8px'>
                      <HStack>
                          <Image src={tickIcon} />
                          <Text className='plans_plan' fontSize={{base:'14px',lg:'16px'}} >Whitelabel IP Pool</Text>
                      </HStack>
                      <HStack>
                          <Image src={tickIcon} />
                          <Text className='plans_plan' fontSize={{base:'14px',lg:'16px'}} >Whitelabel Subnets</Text>
                      </HStack>
                  </HStack>
                  <HStack justifyContent={'space-between'} my='8px'>
                       <HStack>
                          <Image src={tickIcon} />
                          <Text className='plans_plan' fontSize={{base:'14px',lg:'16px'}} >Residential Proxy</Text>
                      </HStack>
                       <HStack>
                          <Image src={tickIcon} />
                          <Text className='plans_plan' fontSize={{base:'14px',lg:'16px'}} >Custom Bandwidth</Text>
                      </HStack>
                  </HStack>
                  <HStack>
                       <HStack>
                          <Image src={tickIcon} />
                          <Text className='plans_plan' fontSize={{base:'14px',lg:'16px'}} >Priority Support</Text>
                      </HStack>
                  </HStack>
                </Box>
                {/* reseller-plan-includes-container */}
                
            </Flex>
            {/* Become-reseller-/-plan-includes */}
            
    </Box>
    )
    //   plan-container
    
}

export default Plans
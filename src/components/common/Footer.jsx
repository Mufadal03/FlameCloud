import { Box, Button, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import line from '../../assets/icons/line.svg'
import logo from '../../assets/icons/logo.svg'
import '../../styles/footer.css'
const Footer = () => {
  return ( 
      <Box w={{ base: '90vw',sm:'90vw', md: '78vw' }} m='auto'mt={{base:'60px',md:'120px'}} fontFamily={'Figtree'}>
      <Image src={line} w='100%' />
      <Flex pt='35px' pb='10px' direction={{base:'column',md:'row'}}>
        <Flex direction={'column'} w={{base:'100%',md:'40%'}} alignItems={'flex-start'}> 
          <HStack justifyContent={'flex-start'}>
            <Image src={logo} />
            <Text className='company'>CreativeProxies</Text>
          </HStack>
          <Flex direction={{ base: 'row', md: 'column' }} alignItems={{ base:'center',md:''}} w={{base:'100%',md:'auto'}} justifyContent={{base:'space-between',md:''}}>
             <Text className='copyright' mt='8px' mb='15px'>Copyright © 2023 Creative Proxies.All rights reserved.</Text>
          <Button className='discord_btn' size={{base:'sm'}}>Join Our Discord</Button>
         </Flex>
        </Flex>
        <HStack gap={{base:'',md:'100px'}} alignItems={'flex-start'}>

            <VStack alignItems={'flex-start'}>
            <Text className='category'>Explore</Text>
            <Text className='link'>Proxy Location Checker</Text>
            <Text className='link'>IPv6 Comptability</Text>
            <Text className='link'>Blogs</Text>  
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Text className='category'>Resources</Text>
            <Text className='link'>FAQs</Text>
            <Text className='link'>Branding</Text>
            <Text className='link'>Imprint</Text>  
            <Text className='link'>Network Information</Text>  
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Text className='category'>Support</Text>
            <Text className='link'>Status</Text>
            <Text className='link'>Terms of Service</Text>
            <Text className='link'>Privacy Policy</Text>  
          </VStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Footer
import { Box, Button, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import line from '../../assets/icons/line.svg'
import logo from '../../assets/icons/logo.svg'
import '../../styles/footer.css'
const Footer = () => {
  return ( 
  
      <Box w={{ base: '90vw',sm:'90vw', md: '78vw' }} m='auto'mt={{base:'60px',md:'120px'}} fontFamily={'Figtree'}>
      <Image src={line} w='100%' />
      {/* footer-starts */}
      <Flex pt='35px' pb='10px' direction={{ base: 'column', md: 'row' }}>
        {/* footer-left-container */}
        <Flex direction={'column'} w={{base:'100%',md:'40%'}} alignItems={'flex-start'}> 
          <HStack justifyContent={'flex-start'}>
            <Image src={logo} />
            <Link to='/'><Text className='company'>CreativeProxies</Text></Link>
          </HStack>
          <Flex direction={{ base: 'row', md: 'column' }} alignItems={{ base:'center',md:''}} w={{base:'100%',md:'auto'}} justifyContent={{base:'space-between',md:''}}>
             <Text className='copyright' mt='8px' mb='15px'>Copyright © 2023 Creative Proxies.All rights reserved.</Text>
          <Button className='discord_btn' size={{base:'sm'}}>Join Our Discord</Button>
         </Flex>
        </Flex>
        {/* footer-left-container */}
        {/* footer-right-container */}
        <HStack gap={{ base: '', md: '100px' }} alignItems={'flex-start'}>
          
            {/* individual columns */}
            <VStack alignItems={'flex-start'}>
            <Text className='category'>Explore</Text>
           <Link to='/proxy-checker'> <Text className='link' fontSize={{base:'13px',md:'16px'}}>Proxy Location Checker</Text></Link>
           <Link to='/proxy-checker'> <Text className='link' fontSize={{base:'13px',md:'16px'}}>IPv6 Comptability</Text></Link>
           <Link to='/proxy-checker'> <Text className='link' fontSize={{base:'13px',md:'16px'}}>Blogs</Text>  </Link>
          </VStack>
          {/* individual columns */}
          <VStack alignItems={'flex-start'}>
            <Text className='category'>Resources</Text>
           <Link to='/proxy-checker'> <Text className='link' fontSize={{base:'13px',md:'16px'}}>FAQs</Text></Link>
           <Link to='/proxy-checker'> <Text className='link' fontSize={{base:'13px',md:'16px'}}>Branding</Text></Link>
           <Link to='/proxy-checker'> <Text className='link' fontSize={{base:'13px',md:'16px'}}>Imprint</Text>  </Link>
           <Link to='/proxy-checker'> <Text className='link' fontSize={{base:'13px',md:'16px'}}>Network Information</Text>  </Link>
          </VStack>
            {/* individual columns */}

          <VStack alignItems={'flex-start'}>
            <Text className='category'>Support</Text>
           <Link to='/proxy-checker'> <Text className='link' fontSize={{base:'13px',md:'16px'}}>Status</Text></Link>
           <Link to='/proxy-checker'> <Text className='link' fontSize={{base:'13px',md:'16px'}}>Terms of Service</Text></Link>
           <Link to='/proxy-checker'> <Text className='link' fontSize={{base:'13px',md:'16px'}}>Privacy Policy</Text>  </Link>
          </VStack>
            {/* individual columns */}

        </HStack>
        {/* footer-right-container */}
      </Flex>
    </Box>
    // footer ends
  )
}

export default Footer
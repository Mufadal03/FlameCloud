import { Box, Button, Flex, HStack, Image, Table, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { proxyResults } from '../assets/fakeDB/proxyResults'
import '../styles/proxy.css'
import arrow from '../assets/icons/arrow.svg'
const ProxyChecker = () => {
  return (
    <Box w={{ base: '95vw', md: '60vw' }} m='auto' my='95px' textAlign={'center'} fontFamily='Figtree'>
      {/* proxy-checker-title */}
      <Text className='proxy_title' fontSize={{ base: '14px', sm: '20px' }}>PROXY LOCATION CHECKER</Text>
      {/* proxy-checker-title */}
      
      {/* proxy-checker-heading */}
      <Text className='proxy_headline' mt='3px' mb='17px' lineHeight={{ base: '40px', lg: '67px' }} fontSize={{ base: '35px', md: '56px' }} w={{ base: '95%', sm: '90%', lg: '80%' }}>Check Locations of all your Proxies <Text as='span' color='#077BFF' >Free</Text> of Cost</Text>
      {/* proxy-checker-heading */}
      
      {/* proxy-checker-subheading */}
      <Text className='proxy_details'w={{base:'90%',sm:'80%',md:'50%'}} fontSize={{base:'md',md:'lg'}} lineHeight={{base:'20px',md:'27px'}}>To Check location, enter the address or proxies you want to check (1 IP Per line)</Text>
      {/* proxy-checker-subheading */}

      {/* ip-enter-container */}
      <Flex direction={'column'} alignItems='flex-start'mt='42px' p='19px' className='proxy_textarea' >
        <Text>8.8.8.8</Text>
        <Text>1.1.1.1</Text>
        <Text>192.168.1.1</Text>
      </Flex>
      {/* ip-enter-container */}

      <Flex justifyContent={'space-between'} mt='21px'>
        <Button className='proxy_btn' size={'sm'} bgColor={'#077BFF'} _hover={{backgroundColor:'#077BFF'}}>Check Location</Button>
        <Text className='proxy_terms' fontSize={{base:'10px',sm:'14px'}}>By using our tool, you agree our Terms of Service and Privacy Policy</Text>
      </Flex>

      <Text className='proxy_results_title' textAlign={'left'} mt='51px' mb='17px'>Your Results</Text>
      {/* results-container */}
      <Table size={'sm'} w='100%' className='proxy_table' borderBottom={'1px solid red'}>
        <Thead>
          <Tr bgColor={'#00000040'}>
            <Td>IP</Td>
            <Td>PROXY</Td>
            <Td>CITY</Td>
            <Td>COUNTRY</Td>
          </Tr>
        </Thead>
        <Tbody>
          {
            proxyResults.map((el, i) => (
              <Tr key={i} >
                <Td>{el.ip }</Td>
                <Td>{el.add }</Td>
                <Td>{ el.city}</Td>
                <Td>{el.country }</Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>
      {/* results-container */}
      {/* proxy-suggestion */}
      <HStack justifyContent={'center'} mt='40px'>
        <Text className='proxy_suggestion' fontSize={{ base:'14px',md:'18px'}}>Check out our IPv6 Compatibility Checker</Text>
        <Text color={'#077BFF'} fontSize={{ base:'14px',md:'18px'}}>View Tool</Text>
        <Image src={ arrow} />
      </HStack>
      {/* proxy-suggestion */}
   </Box>
  )
}

export default ProxyChecker
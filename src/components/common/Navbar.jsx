import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/icons/logo.svg'
import verticalLine from '../../assets/icons/verticalLine.svg'
import discord from '../../assets/icons/discord.svg'
import line from '../../assets/icons/line.svg'
const Navbar = () => {
  return (
    <>
       <Flex w={{ base: '90vw',sm:'90vw', md: '78vw' }} m='auto' fontFamily={'Figtree'} pt='.4rem '>
         <Flex w='70%'  gap='.5rem'  alignItems='center'>
          <Image src={logo}/>
          <Text fontSize={'26px'} fontWeight={600}>CreativeProxies</Text>
          <Flex w='60%' display={{base:'none',md:'flex'}} ml='1rem' alignItems={'center'}  gap='1.5rem' boxSizing='border-box'>
            <Text>Pricing</Text>
            <Text>Exploring Tools</Text>
            <Text>Resources</Text>
            <Text>FAQs</Text>
            <Text>Blogs</Text>
          </Flex>
        </Flex>
        <Flex w='30%' justifyContent={'space-between'} alignItems='center'> 
          <Flex  alignItems='center' gap='1rem' display={{base:'none',md:'flex'}}>
          <HStack className='nav_discord_btn' as={'span'}><Image src={discord} /> <Text color='#5865F2' fontWeight={500}>Join discord</Text>
          </HStack>
            < Image src={verticalLine} />
            <Text className='login'>Login</Text>
          </Flex>
          <Button className='nav_btn' color={'white'} size='md' borderRadius={'5px'}  bgColor={'#077BFF'}>Get Started</Button>
        </Flex>
      </Flex>
      <Image src={line}  w={{ base: '90vw',sm:'90vw', md: '78vw' }} m='.5rem auto'/>
    </>
  )
}

export default Navbar
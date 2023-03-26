import { Button, Flex, HStack, Image, Text} from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/icons/logo.svg'
import verticalLine from '../../assets/icons/verticalLine.svg'
import discord from '../../assets/icons/discord.svg'
import line from '../../assets/icons/line.svg'
import hambergerIcon from '../../assets/icons/hamIcon.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      {/* navbar-starts */}
      <Flex w={{ base: '90vw', sm: '90vw', md: '78vw' }} m='auto' fontFamily={'Figtree'} pt='.4rem '>
        {/* navbar-left-container */}
         <Flex w={{base:'60%',md:'70%'}}  gap='.5rem'  alignItems='center'>
          <Image src={logo}/>
          <Link to='/'><Text fontSize={'26px'} fontWeight={600}>CreativeProxies</Text></Link>
          <Flex w='60%' display={{base:'none',md:'flex'}} ml='1rem' alignItems={'center'}  gap='1.5rem' boxSizing='border-box'>
            <Link to='/proxy-checker'><Text>Pricing</Text></Link>
            <Link to='/proxy-checker'><Text>Exploring Tools</Text></Link>
            <Link to='/proxy-checker'><Text>Resources</Text></Link>
            <Link to='/proxy-checker'><Text>FAQs</Text></Link>
            <Link to='/proxy-checker'><Text>Blogs</Text></Link>
          </Flex>
        </Flex>
        {/* navbar-left-container */}
        {/* navbar-right-container */}
        <Flex w={{base:'40%',md:'30%'}} justifyContent={'space-between'} alignItems='center'> 
          <Flex  alignItems='center' gap='1rem' display={{base:'none',md:'flex'}}>
          <HStack className='nav_discord_btn' as={'span'}><Image src={discord} /> <Text color='#5865F2' fontWeight={500}>Join discord</Text>
          </HStack>
            < Image src={verticalLine} />
            <Text className='login'>Login</Text>
          </Flex>
         <Link to='/proxy-checker'> <Button className='nav_btn' color={'white'} size='md' borderRadius={'5px'} bgColor={'#077BFF'}>Get Started</Button></Link>
          <Flex justifyContent={'center'} display={{base:'flex',md:'none'}} alignItems='center' borderRadius={'8px'} bgColor='rgba(7, 123, 255, 0.25)' h='40px' w='45px'>
            <Image src={hambergerIcon} h='30px' w='30px'/>
          </Flex>
        </Flex>
        {/* navbar-right-container */}

      </Flex>
      {/* navbar-ends */}
      <Image src={line}  w={{ base: '90vw',sm:'90vw', md: '78vw' }} m='.5rem auto'/>
    </>
  )
}

export default Navbar
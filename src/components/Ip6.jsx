import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import line from '../assets/icons/line.svg'
import tick from '../assets/icons/tick.svg'
import greenTick from '../assets/icons/greenTick.svg'
import { ip6Plans } from '../assets/fakeDB/ip6Plans'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import day from '../assets/icons/dayGreen.svg'
import month from '../assets/icons/monthGreen.svg'
import v6 from '../assets/icons/v6.svg'
const Ip6 = () => {
  return (
    <Box className='ip6_container' p='26px 24px 27px 25px' >
          <Flex direction={'column'}>
              <Flex  justifyContent='space-between'>
                <Flex w='40%' direction={'column'} gap='8px'>
                   <Flex justifyContent={'center'} alignItems='center' h='40px' w='40px' borderRadius={'8px'} bgGradient={'linear-gradient(135deg, #25CD08 0%, #09B32B 100%)'}>
                    <Image src={v6} h='30px' w='30px'/>
                  </Flex>
                  <Text className='ip_name'>IPv4 Proxies</Text>
                  <Text className='ip_detail'>Static/Rotating</Text>
              </Flex>
              <Flex w='40%' direction={'column'}>
                  <Text className='from_to'>FROM</Text>
                  <Image src={day} h='20px' />
                  <Text  className='from_to'>TO</Text>
                  <Image src={month} h='20px'/>
                </Flex>
              </Flex>
              <Image src={line} my='14px'/>
              <Text className='plans_include'>Plan Includes :</Text>
              {
                ip6Plans.map((el,i)=>(
                  <Flex gap='5px' mt='8px'>
                    <Image src={i>4?greenTick:tick} />
                    <Text className='plans_plan'>{el.plan }</Text>
                  </Flex>
                ))
        }
              <Image src={line} my='14px'/>
              <Button className='ip4_btn' color={'white'} bgColor={'#2CE517'} rightIcon={<ArrowForwardIcon />}>View Pricing</Button>
          </Flex>
    </Box>
  )
}

export default Ip6
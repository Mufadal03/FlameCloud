import { Box, Button, Flex, Image, Text  } from '@chakra-ui/react'
import React from 'react'
import { ip4Plans } from '../assets/fakeDB/ip4Plans'
import line from '../assets/icons/line.svg'
import tick from '../assets/icons/tick.svg'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import day from '../assets/icons/blueDay.svg'
import month from '../assets/icons/monthBlue.svg'
import '../styles/plans.css'
import v4 from '../assets/icons/v4.svg'
const Ip4 = () => {
  return (
    // IP4-plan-container
      <Box className='ip4_container' p='26px 24px 27px 25px' >
          <Flex direction={'column'} >
            {/* plan-pricing-details-container */}
              <Flex justifyContent='space-between'>
                {/* plan-pricing-details-left */}
                <Flex w='40%'  direction={'column'} gap='8px'>
                  <Flex justifyContent={'center'} alignItems='center' h='40px' w='40px' borderRadius={'8px'} bgGradient={'linear-gradient(135deg, #2E73E8 0%, #215FDA 100%)'}>
                    <Image src={v4} h='30px' w='30px'/>
                  </Flex>
                  <Text className='ip_name'>IPv4 Proxies</Text>
                  <Text className='ip_detail'>Static/Rotating</Text>
              </Flex>
                {/* plan-pricing-details-left */}
                
                {/* plan-pricing-details-right */}
              <Flex w='40%' direction={'column'} alignItems='left'>
                  <Text className='from_to'>FROM</Text>
                  <Image src={day} h='20px' />
                  <Text className='from_to'>TO</Text>
                  <Image src={month} h='20px'/>
                </Flex>
                {/* plan-pricing-details-right */}
              </Flex>
            {/* plan-pricing-details-container */}
              
              <Image src={line} my='14px' />
              {/* Plans-include-contianer */}
              <Text className='plans_include'>Plan Includes :</Text>
              {/* maping-all-plans-includes-with-IP4 */}
              {
                ip4Plans.map((el, i) => (
                  <Flex gap='5px' alignItems={'center'} mt='8px'>
                    <Image src={tick} />
                    <Text className='plans_plan'>{el.plan }</Text>
                  </Flex>
                ))
             }
              {/* maping-all-plans-includes-with-IP4 */}

              {/* Plans-include-contianer */}

              <Image src={line} my='21px' />
            <Button color='#FFFFFF' _hover={{backgroundColor:'#077BFF'}} bgColor={'#077BFF'} rightIcon={<ArrowForwardIcon />} className='ip4_btn'>View Pricing</Button>
          </Flex>
    </Box>
    // IP4-plan-container

  )
}

export default Ip4
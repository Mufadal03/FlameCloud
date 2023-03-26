import { Avatar, Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import star from '../assets/icons/Star.svg'
import '../styles/reviews.css'
import avatar from '../assets/icons/avatar.svg'
const ReviewCard = () => {
  return (
      <Box p='29px 25px' border={'1px solid rgba(22, 209, 19, 0.5)'} borderRadius='5px'>
          <VStack alignItems='flex-start' fontFamily={'Figtree'} gap='10px'>
              {/* stars-container */}
              <Flex>
                  {
                      new Array(5).fill(0).map(el=><Image w={{base:'18px',lg:'23px'}} h='23px' src={star}/>)
                  }
              </Flex>
              {/* stars-container */}
            
              {/* customer-review */}
              <Text className='reviews_review' fontSize={{ base: '16px', md: '18px' }}>“Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”</Text>
              {/* customer-review */}
              
              {/* reviewer's-details */}
              <HStack>
                  <Avatar src={avatar} />
                  <Box >
                      <Text className='reviews_reviewer_name' fontSize={{ base: '16px', md:'18px'}}>ECHO DZNS</Text>
                      <Text className='reviews_reviewer_designation' fontSize={{base:'14px',md:'16px'}}>Web Designer, CreativeProxies</Text>
                  </Box>
              </HStack>
              {/* reviewer's-details */}

          </VStack>
      </Box>
  )
}

export default ReviewCard
import { Box, Button, Flex, Grid, GridItem, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import '../styles/landing.css'
import line from '../assets/icons/line.svg'
import { benefits } from '../assets/fakeDB/benefits'
import BenefitsCard from './BenefitsCard'
import star from '../assets/icons/star02.svg'
import filledStar from '../assets/icons/Star.svg'
import trustpilot from '../assets/icons/trustpilot.svg'
const Landing = () => {
  return (
   <Flex direction={'column'} alignItems={'center'} w={{base:'90vw',md:'78vw'}} m='auto' mt={{base:'50px',md:'95px'}} fontFamily={'Figtree'} >
          <Text className='greeting' >WELCOME TO CREATIVE PROXIES</Text>
          <Text className='tagline' lineHeight={{ base: '40px', lg:'67px'}} fontSize={{base:'35px',md:'56px'}} w={{base:'95%',sm:'90%',lg:'80%'}}>We are the <Text color={'#077BFF'} as='span'>Fastest</Text> and the <Text color={'#16D113'} as='span'>Most Reliable</Text> Proxy Service since 2020</Text>
          <Text className='about' w={{base:'90%',sm:'80%',md:'50%'}} fontSize={{base:'md',md:'lg'}} lineHeight={{base:'20px',md:'27px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
          <Button className='btn' bgColor={'#077BFF'}  >Get Started</Button>
          <VStack className='rating_container' alignItems={'center'} justifyContent='center' height={'90px'} w='222px' mt='27px'>
              <HStack >
                  {
                      new Array(5).fill(0).map((el,i) => {
                          return (
                              <Box bgColor={'#00B67A'} p='.2rem'>
                                  <Image src={star} />
                              </Box>
                          )
                      })
                  }
             </HStack>
              <HStack>
                  <Text className='rating'>Rated 4.5 on</Text>
                  <Image src={filledStar} />
                  <Image src={ trustpilot} />
              </HStack>
          </VStack>
          <Image src={line}  mt='54px' mb='36px' />

          <Grid gridTemplateColumns={{base:'repeat(2,1fr)',md:'repeat(3,1fr)',lg:'repeat(4,1fr)'}}gap='1rem'>
              {
                  benefits.map((el) => {
                      return (
                          <GridItem key={el.id} >
                              <BenefitsCard data={el } />
                          </GridItem>
                      )
                  })
              }
          </Grid>
   </Flex>
  )
}

export default Landing
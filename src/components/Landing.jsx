import { Box, Button, Flex, Grid, GridItem, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import '../styles/landing.css'
import line from '../assets/icons/line.svg'
import { benefits } from '../assets/fakeDB/benefits'
import BenefitsCard from './BenefitsCard'
import star from '../assets/icons/star02.svg'
import filledStar from '../assets/icons/Star.svg'
import trustpilot from '../assets/icons/trustpilot.svg'
import { Link } from 'react-router-dom'
const Landing = () => {
    return (
    //   Landing-page-container
        <Flex direction={'column'} alignItems={'center'} w={{ base: '90vw', md: '78vw' }} m='auto' mt={{ base: '50px', md: '95px' }} fontFamily={'Figtree'} >
            {/* landing-heading */}
            <Text className='greeting' >WELCOME TO CREATIVE PROXIES</Text>
            {/* landing-heading */}

            {/* landing-tagline */}
            <Text className='tagline' lineHeight={{ base: '40px', lg: '67px' }} fontSize={{ base: '35px', md: '56px' }} w={{ base: '95%', sm: '90%', lg: '80%' }}>We are the <Text color={'#077BFF'} as='span'>Fastest</Text> and the <Text color={'#16D113'} as='span'>Most Reliable</Text> Proxy Service since 2020</Text>
            {/* landing-tagline */}

            {/* landing-subheading */}
            <Text className='about' w={{ base: '90%', sm: '80%', md: '50%' }} fontSize={{ base: 'md', md: 'lg' }} lineHeight={{ base: '20px', md: '27px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            {/* landing-subheading */}
            
          <Link to='/proxy-checker'><Button className='btn' bgColor={'#077BFF'}  >Get Started</Button></Link>
          {/* rating-container */}
            <VStack className='rating_container' alignItems={'center'} justifyContent='center' height={'90px'} w='222px' mt='27px'>
                {/* stars-contianer */}
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
                {/* stars-contianer */}
                
              <HStack>
                  <Text className='rating'>Rated 4.5 on</Text>
                  <Image src={filledStar} />
                  <Image src={ trustpilot} />
              </HStack>
            </VStack>
          {/* rating-container */}
            
          <Image src={line}  mt='54px' mb='36px' />
        {/* benefits-of-using-Creative-proxies-container */}
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
        {/* benefits-of-using-Creative-proxies-container */}
            
   </Flex>
    )
    //   Landing-page-container
    
}

export default Landing
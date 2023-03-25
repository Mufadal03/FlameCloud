import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import '../styles/features.css'
import FeatureCard from './FeatureCard'
const Features = () => {
  return (
      <Flex justifyContent={'center'} bgColor={'#0566D4'} pb='110px' mt='140px' >
          <Flex color={'#FFFFFF'} mt='115px' direction='column'  alignItems={'center'} fontFamily='Figtree' w='100vw'> 
              <Text className='features_heading' fontSize={{base:'25px',md:'36px'}}>Why we are the Best Proxy Providers</Text>
              <Text mt={{ base:'5px',md:'10px'}} className='features_tagline ' fontSize={{base:'15px',md:'18px'}} w={{base:'90%',lg:"40%"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quos! Lorem ipsum dolor sit amet.</Text>
              
            
              <Grid mt='30px' gridTemplateColumns={{base:'repeat(2,1fr)',sm:'repeat(2,1fr)',md:'repeat(3,1fr)',lg:'repeat(4,1fr)'}} gap='27px 16px'>
                  {
                      new Array(8).fill(0).map((el,i) => {
                          return (
                              <GridItem key={i} >
                                  <FeatureCard number={i+1} />
                              </GridItem>
                          )
                      })
                  }
              </Grid>


          </Flex>
    </Flex>
  )
}

export default Features
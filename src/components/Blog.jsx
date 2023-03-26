import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import arrow from '../assets/icons/arrow.svg'
import '../styles/blog.css'
import GridCard from './GridCard'
const Blog = () => {
    return (
        // Blog-starts-here
        <Box w={{ base: '95vw', md: '78vw' }} bgGradient={'linear-gradient(180deg, #F7FAFF 0%, rgba(255, 255, 255, 0) 100%);'} border='1px solid rgba(30, 30, 30, 0.1)' m='auto' mt='250px' pb={'35px'} fontFamily={'Figtree'}>

            {/* blog-tagline */}
            <Text textAlign={'center'} className='blog_heading' mt='65px' fontSize={{ base: '28px', md: '36px' }}>Read our <Text as='span' color='#077BFF'>Exclusive</Text> Blog</Text>
            {/* blog-tagline */}

            {/* blog-subheading */}
            <Text textAlign={'center'} className='blog_details' my='10px' w={{ base: '80%' }} fontSize={{ base: '14px', lg: '18px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
            {/* blog-subheading */}
            
          <Flex justifyContent={'center'} alignItems='center' gap='5px'> 
              <Text fontSize={{base:'14px',md:'18px'}} textAlign={'center'} color='#077BFF' className='blog_read_blogs'>Read All Blogs</Text>
              <Image src={arrow} />
            </Flex>
            {/* blogs-card-container */}
        <Grid gridTemplateColumns={{base:'repeat(2,1fr)',md:'repeat(3,1fr)'}} placeItems='center' gap='10px' mt='40px'>
                {
                    new Array(6).fill(0).map((el,i) => {
                    return(
                        <GridItem key={i}>
                            <GridCard />
                        </GridItem>
                         )
                    })
                }
            </Grid>
            {/* blogs-card-container */}
            
        </Box>
        // Blog-continer-Ends-here
        
  )
}

export default Blog
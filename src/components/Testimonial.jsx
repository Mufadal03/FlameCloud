import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import '../styles/reviews.css'
import ReviewCard from './ReviewCard'
const Testimonial = () => {
  return (
      <Box mt='180px' w={{ base: '95vw', md: '78vw' }} m='auto' fontFamily={'Figtree'}>
          {/* reviews-heading */}
          <Text className='reviews_heading' fontSize={{ base: '3xl', md: '36px' }}>Customers <Text as='span' color={'#16D113'}>Love</Text> our Proxies</Text>
          {/* reviews-heading */}
          
          {/* reviews-subheading */}
         <Text className='reviews_details' textAlign={'center'} w={{base:'90%',lg:'50%'}} fontSize={{base:'md',md:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.</Text>
          {/* reviews-subheading */}

          {/* reviews-container */}
          <Grid gridTemplateColumns={{base:'repeat(1,315px)',sm:'repeat(1,386px)',md:'repeat(2,1fr)',lg:'repeat(3,1fr)'}} mt='34px' gap='17px' placeContent={'center'} >
              {
                  new Array(3).fill(0).map(e => {
                      return (
                          <GridItem>
                              {/* individual-review-card */}
                              <ReviewCard />
                              {/* individual-review-card */}
                          </GridItem>
                      )
                  })
              }
          </Grid>
          {/* reviews-container */}

    </Box>
  )
}

export default Testimonial
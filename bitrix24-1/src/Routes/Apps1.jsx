import React from 'react'
import {Box,Heading,Text} from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter ,Flex,Button,Image} from '@chakra-ui/react'
import Navbar from '../Component/Navbar'

const Apps1 = () => {
  return (
    <div>
      <Navbar/>
   <div style={{marginTop:"8rem"}}>
   <Box bg='blue.300' w='100%' p={4} color='white' h={230}>
  <Heading fontSize={60} m={1}>Bitrix24 Apps</Heading >
  <Text fontSize={18}>Install our mobile and desktop apps for an easier,.</Text>
  <Text fontSize={18}>streamlined user experience. Browse</Text>
  <Text fontSize={18}>Bitrix24.Market to install useful integrations and</Text>
  <Text fontSize={18}>extensions for your Bitrix24.</Text>
</Box>
   </div>
   <div>
   <Flex  justify="space-between" mt={10}>
<Card maxW='lg'>
  <CardBody w={800}>
    <Image 
      src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/apps/app_catalog.png.webp?1696061049000'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      w={600}
      h={350}
    />
   
  </CardBody>
  
</Card>
<Card align='center' w={600} mt={50} >
  <CardHeader>
    <Heading size='lg'> Bitrix24.Market
</Heading>
  </CardHeader>
  <CardBody>
    <Text align="center" fontSize={20}>Browse our marketplace to get cool add-ons and custom solutions for your Bitrix24. Developed by our partners and approved by us, these apps include custom landing page templates, integrations with third-party tools, and various solutions for telephony, banking, payments systems, and chatbots.</Text>
  </CardBody>
  <CardFooter>
    <Button h={30} w={60} colorScheme='blue'>Learn</Button>
  </CardFooter>
</Card>
</Flex>


   </div>
   <div>
   <Flex  justify="space-between" mt={10}>
<Card maxW='lg'>
  <CardBody w={800}>
    <Image 
      src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/apps/bitrix24_desktop_app.png.webp?1696061050000'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      w={600}
      h={350}
    />
   
  </CardBody>
  
</Card>
<Card align='center' w={600} mt={50} >
  <CardHeader>
    <Heading size='lg'> Bitrix24.Market
</Heading>
  </CardHeader>
  <CardBody>
    <Text align="center" fontSize={20}>Browse our marketplace to get cool add-ons and custom solutions for your Bitrix24. Developed by our partners and approved by us, these apps include custom landing page templates, integrations with third-party tools, and various solutions for telephony, banking, payments systems, and chatbots.</Text>
  </CardBody>
  <CardFooter>
    <Button h={30} w={60} colorScheme='blue'>Learn</Button>
  </CardFooter>
</Card>
</Flex>


   </div>
   
    </div>
  )
}

export default Apps1

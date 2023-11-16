import { Card, CardHeader, CardBody, CardFooter ,SimpleGrid,Button,Text,Box,Flex} from '@chakra-ui/react'
import {FiArrowRight} from "react-icons/fi";;

export default function CardDetail(){
    return <>
    <Text   fontSize={50} textAlign="center">  Achieve more with Bitrix24</Text>
    <SimpleGrid mt={10} spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
  <Card>
    <CardHeader>
     <img   src="https://www.bitrix24.in/upload/optimizer/converted/images/content_common/images/tools/image_self_hosted.png.webp?1698055665000"/>
    </CardHeader>
    <CardBody>
      <Text>Bitrix24 on your server with full customization</Text>
    </CardBody>
    <CardFooter>
      <Button colorScheme='blue' variant='outline' leftIcon={<FiArrowRight/>}></Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
     <img src="https://www.bitrix24.in/upload/optimizer/converted/images/content_common/images/tools/image_articles.png.webp?1698055665000"/>
    </CardHeader>
    <CardBody>
      <Text>Read the latest neews and learn about new featurs</Text>
    </CardBody>
    <CardFooter>
    <Button colorScheme='blue' variant='outline' leftIcon={<FiArrowRight/>}></Button>
      
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <img src="https://www.bitrix24.in/upload/optimizer/converted/images/content_common/images/tools/image_webinars.png.webp?1698055665000'"/>
    </CardHeader>
    <CardBody>
      <Text>See free webiners</Text>
    </CardBody>
    <CardFooter>
    <Button colorScheme='blue' variant='outline' leftIcon={<FiArrowRight/>}></Button>
    </CardFooter>
  </Card>
   <Card>
    <CardHeader>
     <img   src="https://www.bitrix24.in/upload/optimizer/converted/images/content_common/images/tools/image_self_hosted.png.webp?1698055665000"/>
    </CardHeader>
    <CardBody>
      <Text>Bitrix24 on your server with full customization</Text>
    </CardBody>
    <CardFooter>
    <Button colorScheme='blue' variant='outline' leftIcon={<FiArrowRight/>}></Button>
    </CardFooter>
  </Card>
</SimpleGrid>
    
    <Text textAlign="center"  mt={60} fontSize={45}>Bitrix24 in the Press</Text>

    <Box bg='white'h='240' w='100%' p={4} color='white'>
  <Flex justify="space-around"> 
  <img   src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_huffpost.png.webp?1698055665000"/>
  <img  src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcmag.png.webp?1698768295000"/>
    
    <img src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcworld.png.webp?1698768295000"  />
    <img src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_techradar.png.webp?1698768295000"/>
    
    <img src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_zdnet.png.webp?1698768295000"/>
  </Flex>
</Box>
<Flex justify="center">
<Box borderRadius='50' bg='blue.300' h="230" w='85%' p={4} color='white'>
  <Text  fontSize={60} textAlign="center">Ready to try?</Text>
  <Flex  justify="center"> <Button mt={37} >Start For Free</Button></Flex>
 
</Box>

</Flex>

    
    </>
}
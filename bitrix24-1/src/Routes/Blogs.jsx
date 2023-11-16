import React from 'react'
import { Box,Input,Flex,Button, Divider,Stack,Heading,Text,Image} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'




import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem

} from '@chakra-ui/react'
import { Card,  CardBody, CardFooter } from '@chakra-ui/react'
import HomeFooter from '../Component/HomeFooter'
import Navbar from '../Component/Navbar'


const Blogs = () => {
  return (
    <div >
      <Navbar/>
      <div style={{ marginTop: '10rem'}}>
   
      <Box w='100%' p={4}  background='blue.300' fontSize={70}  color="white" h={200}>
  Blogs
</Box>
</div>
<div>
<Box  w='100%' p={4} color='white' >
<Flex justify="space-around"  style={{ overflow: 'hidden' }}>
<Input htmlSize={8} width={250}  />
<Menu>
  <MenuButton borderRadius={12} fontSize={20} as={Button} w={200} h={35} rightIcon={<AddIcon />}>
    Actions
  </MenuButton>
  <MenuList  color="black"  fontSize={20} w={500}>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
</Flex>
  
</Box>
</div>


<Flex  mt={20} justify="space-around">
 <Card maxW='lg' h={600}>
  <CardBody  >
    <Image w="auto" h={200}
      src="https://www.bitrix24.in/upload/optimizer/converted/upload/iblock/2c8/aozwl9hcgien1k2afl8extkbw4fu0ep4.jpg.webp?1696059655000"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='lg'>Fall 2023 Schedule of Live Webinars</Heading>
      <Text fontSize={20}>
      Join the upcoming live webinars this fall hosted by Bitrix24 Gold Partner Intreface. Webinars will provide valuable insights on various topics, including utilizing telephony in Bitrix24, HR tools, business processes, managing interactions with customers in Bitrix24 CRM and more.
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
   <Text >2 min ago</Text>
  
  </CardFooter>
</Card>
<Card maxW='lg' h={600}>
  <CardBody>
    <Image w="auto" h={200}
      src="https://www.bitrix24.in/upload/optimizer/converted/upload/iblock/617/h3q0oo9brtxxdf78cvpi3bdwrjy9o2rr.jpg.webp?1696059656000"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='lg'>Recurly App In Bitrix24 Marketplace</Heading>
      <Text fontSize={20}>
       New Albato Recurly App makes it easy to manage your customers and take care of invoicing. The integration lets you to effortlessly import your customer base from Recurly into Bitrix24, automatically creating a dedicated activity for each new account in Recurly.
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
   <Text   >2 min ago</Text>
  
  </CardFooter>
</Card>
<Card maxW='lg' h={600}>
  <CardBody>
    <Image h={200} width="auto"
      src="https://www.bitrix24.in/upload/optimizer/converted/upload/iblock/a0e/wmiegov4cmdprk6pi6jfo0bza5e2fpyz.jpg.webp?1696059657000"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='lg'>Bitrix24 Gold Partner FullView Solutions Is To Exhibit At The Business Show Africa 2023</Heading>
      <Text fontSize={20}> 
       Africa's biggest and most successful business event is back for the 15th year. Meet Bitrix24 Gold Partner FullView Solutions there.
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
   <Text   >2 min ago</Text>
  
  </CardFooter>
</Card>
</Flex>



<div style={{marginTop:"15rem"}}>
<Flex   justify="space-around">
 <Card maxW='lg' h={600}>
  <CardBody  >
    <Image w="auto" h={200}
      src="https://www.bitrix24.in/upload/iblock/1c5/ceoiy1ivi5taqhogp26sfll8jdje3fuj.jpg?1692203498246"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='lg'>Fall 2023 Schedule of Live Webinars</Heading>
      <Text fontSize={20}>
      Join the upcoming live webinars this fall hosted by Bitrix24 Gold Partner Intreface. Webinars will provide valuable insights on various topics, including utilizing telephony in Bitrix24, HR tools, business processes, managing interactions with customers in Bitrix24 CRM and more.
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
   <Text >2 min ago</Text>
  
  </CardFooter>
</Card>
<Card maxW='lg' h={600}>
  <CardBody>
    <Image w="auto" h={200}
      src="https://www.bitrix24.in/upload/iblock/6d2/aa8k6hucptzkups0vk4elnykbekgqrii.jpg?1692203498246"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='lg'>Recurly App In Bitrix24 Marketplace</Heading>
      <Text fontSize={20}>
       New Albato Recurly App makes it easy to manage your customers and take care of invoicing. The integration lets you to effortlessly import your customer base from Recurly into Bitrix24, automatically creating a dedicated activity for each new account in Recurly.
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
   <Text   >2 min ago</Text>
  
  </CardFooter>
</Card>
<Card maxW='lg' h={600}>
  <CardBody>
    <Image h={200} width="auto"
      src="https://www.bitrix24.in/upload/iblock/c35/xi18vpyqpikfh5ewsp24n3qehheaokja.jpg?1692203498246"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='lg'>Bitrix24 Gold Partner FullView Solutions Is To Exhibit At The Business Show Africa 2023</Heading>
      <Text fontSize={20}> 
       Africa's biggest and most successful business event is back for the 15th year. Meet Bitrix24 Gold Partner FullView Solutions there.
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
   <Text   >2 min ago</Text>
  
  </CardFooter>
</Card>
</Flex>

</div>




<div style={{marginTop:"15rem"}} >
<Flex   >
<Box h={400}  w={300} p={4} ml={30} >
<Heading  fontSize={20}> Bitrix24 CRM Notifications Center: Never Miss an Activity Again</Heading>
<Stack mt={15}  pt={10}>
<Text fontSize={12} >Staying on top of your sales activities and completing them on time is crucial. That's where Bitrix24 CRM Notifications Center come in handy</Text>
</Stack>
  
</Box>
  <Box h={400}  w={950} p={4} >
 <Image  h={300}  w={950} src="https://www.bitrix24.in/upload/iblock/9c2/i8v8tx3gym49dcxm69n7ps9y11c5n752.jpg?1692203498246" />
</Box>

</Flex>

</div>

<div style={{marginTop:"3rem"}} >
  <Flex justify="center">
<Box borderRadius={10} bg='blue.300' w={800} p={4} color='white' h={220} >
 <Heading fontSize={30} pt={8} align="center">Free. Unlimited. Online</Heading>
 <Stack>
  <Button h={20}  fontSize={20} bg="#bdf300" mt={20}  ml={270} w={200}> START FOR FREE</Button>
 
 </Stack>
</Box>
</Flex>




</div>

<div>
<HomeFooter/>


</div>



</div>


  )
}

export default Blogs

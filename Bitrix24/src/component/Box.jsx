import { Box,Flex } from '@chakra-ui/react'


export default function Boxer(){

    return <>
    <Box bg='#3cc8f4;' w='100%' h='250' p={4} color='white' textAlign='center' m={5} >
    <Flex justify='space-around' m={4}>
    <img style={{height:"90px"}}  src="https://www.bitrix24.in/images/content_common/test/index/img-badge-1.png?1692203498246" alt="" />
    <img style={{height:"90px"}}  src="https://www.bitrix24.in/images/content_common/test/index/img-badge-2.png?1692203498246" alt="" />
    <img style={{height:"90px"}}  src="https://www.bitrix24.in/images/content_common/test/index/img-badge-3.png?1692203498246" alt="" />
    <img style={{height:"90px"}}  src="https://www.bitrix24.in/images/content_common/test/index/img-badge-4.png?1692203498246" alt="" />
    <img style={{height:"90px"}}  src="https://www.bitrix24.in/images/content_common/test/index/img-badge-5.png?1692203498246" alt="" />
    <img style={{height:"90px"}}  src="https://www.bitrix24.in/images/content_common/test/index/img-badge-6.png?1692203498246" alt="" />
    </Flex>
   
</Box>
    
    </>
}
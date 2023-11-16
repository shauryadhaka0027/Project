
import {Text, Flex,Tabs, TabList, TabPanels, Tab, TabPanel,Stack, Center} from '@chakra-ui/react'
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

import styles from '../css Module/HomeNavabar1.module.css'
export default function HomeNavbar1(){
  return <>
  
  
  <Tabs className={styles.app}>
  <Stack  mt={100}>
  <Text textAlign="center" fontSize='5xl'>Bitrix24. Your ultimate workspace.</Text>

</Stack>
<TabList  ml={100}>
  <Tab className={styles.tab} color="blue.300" fontSize={20}>CRM</Tab>
  <Tab className={styles.tab} color="blue.300" fontSize={20}>Collaboration</Tab>
  <Tab className={styles.tab} color="blue.300" fontSize={20} >Task & Projects</Tab>
  <Tab className={styles.tab} color="blue.300" fontSize={20}>Sites & Stores </Tab>
  <Tab className={styles.tab} color="blue.300" fontSize={20}>HR & Automation</Tab>
</TabList>
<Flex justifyContent="space-around">
<TabPanels ml={100}>
  <TabPanel>
  <UnorderedList  fontSize={23} p={10}  >
  <ListItem>Leads,Deals,Contacts,Companies</ListItem>
  <ListItem>Quotes,Invoices</ListItem>
  <ListItem>Online payments</ListItem>
  <ListItem>Sales automation</ListItem>
  <ListItem>Rules and triggers</ListItem>
  <ListItem>Conatct center</ListItem>
  <ListItem>Marketing</ListItem>
  <ListItem>Sales intelligence</ListItem>
  </UnorderedList>
  </TabPanel>
  <TabPanel>
  <UnorderedList   fontSize={23} p={10} >
  <ListItem> Chats & video calls</ListItem>
  <ListItem>Online meetings</ListItem>
  <ListItem>Feed</ListItem>
  <ListItem>Calendar</ListItem>
  <ListItem>Online documents</ListItem>
  <ListItem>Drive</ListItem>
  <ListItem>Webmail</ListItem>
  <ListItem>Workgroups</ListItem>
  
  </UnorderedList >
  
  </TabPanel>
  <TabPanel>
   <UnorderedList   fontSize={23} p={10} >
  <ListItem>Tasks</ListItem>
  <ListItem>Projects</ListItem>
  <ListItem>Gantt chart</ListItem>
  <ListItem>Kanban board</ListItem>
  <ListItem>Time tracking</ListItem>
  <ListItem>Task and project templates</ListItem>
  <ListItem>Task automation</ListItem>
  <ListItem>CRM integration</ListItem>
   
   </UnorderedList>
  </TabPanel>
   <TabPanel>
  <UnorderedList     fontSize={23} p={10} >
    
   <ListItem>Free website builder</ListItem>
   <ListItem>Online store        </ListItem>
   <ListItem>Free templates</ListItem>
   <ListItem>Mobile & SEO friendly</ListItem>
   <ListItem>Web forms</ListItem>
   <ListItem>Web widgets</ListItem>
   <ListItem>CRM integration</ListItem>
   <ListItem>Google Analytics integration</ListItem>
  </UnorderedList>
  </TabPanel>
   <TabPanel>
    <UnorderedList     fontSize={23} p={10} >
    <ListItem>Employee directory </ListItem>
    <ListItem>Worktime tracking & reports </ListItem>
    <ListItem>Absence management  </ListItem>
    <ListItem>Announcements & appreciations </ListItem>
    <ListItem>Workflow automation  </ListItem>
    <ListItem>Requests & approvals </ListItem>
    <ListItem>No-code RPA </ListItem>
    <ListItem>Knowledge base </ListItem>
    
    
    </UnorderedList>
  </TabPanel>
  
</TabPanels>
<img  className={styles.img} src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/tasks.1366w.png.webp?1698768293000" alt="" />
</Flex>
</Tabs>

  </>
}
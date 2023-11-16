import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import TaskAndProjectsBody from "../Component/TaskAndProjectsBody";
import TaskAndProjectsFooter from"../Component/TaskAndProjectsFooter.jsx"
import TaskAndProjectsNavbar from "../Component/TaskAndProjectsNavbar";
import SidebarLeft from "../Component/SidebarLeft";
import SidebarRight from "../Component/SidebarRight";


const TaskAndMangement = () => {
 

  return (
    <Box
      bgImage={
        "https://b24-zu0uxk.bitrix24.in/bitrix/templates/bitrix24/themes/light/atmosphere/atmosphere2.jpg"
      }
      h={"100vh"}
      w={"100%"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      color={"whiteAlpha.900"}
    >
      <HStack>
        <Box h={"100vh"} w={"15%"}>
          <SidebarLeft />
        </Box>
        <Flex w={"80%"} mt={0} flexDir={"column"} h={"100vh"}>
          <TaskAndProjectsNavbar />
          <TaskAndProjectsBody />
          <Spacer />
          <TaskAndProjectsFooter />
        </Flex>
        <Box h={"100vh"} w={"5%"}>
          {/* <SidebarRight /> */}
        </Box>
      </HStack>
    </Box>
  );
};

export default TaskAndMangement;
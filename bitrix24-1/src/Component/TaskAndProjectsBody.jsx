import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  Avatar,
  Button,
  Flex,
  IconButton,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import TaskAndProjectsBodyUpper from "./TaskAndProjectsBodyUpper";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";

const TaskAndProjectsBody = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);

 

  return (
    <VStack spacing={3}>
      <TaskAndProjectsBodyUpper />
     
      <Table
        variant="striped"
        color="#535c69"
        bg={"whiteAlpha.900"}
        borderRadius={"20px"}
      >
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Active</Th>
            <Th>Created by</Th>
            <Th>Responsible person</Th>
            <Th>Status</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
         
                <Td>
                  <Flex gap={2} alignItems={"center"}>
                    <Avatar h={"25px"} w={"25px"} />
                  
                  </Flex>
                </Td>
                <Td>
                  <Button
                   
                    bg={"transparent"}
                    _hover={{ bg: "transparent" }}
                  >
                 
                  </Button>
                </Td>
                <Td textAlign={"center"}>
                  <IconButton
                    color={"blue.600"}
                    _hover={{ bg: "transparent", color: "red.600" }}
                    icon={<RiDeleteBinFill />}
                    onClick={() => {
                     
                    }}
                  />
                </Td>
             
        </Tbody>
        <Tfoot>
          
          <Th></Th>
          <Th>
            <Button
              bg={"green.300"}
              _hover={{ bg: "green.600", color: "white" }}
              onClick={() => {
                setPage(page - 1);
              }}
              disabled={page === 1}
            >
              Prev
            </Button>
          </Th>
          <Th>
            <Button
              bg={"blue.300"}
              _hover={{ bg: "blue.600", color: "white" }}
              onClick={() => {
                setPage(page + 1);
              }}
             
            >
              Next
            </Button>
          </Th>
          <Th></Th>
          <Th>
            <Flex gap={2} alignItems={"center"}>
              <Text>Pages</Text>
              <Select
                icon={<MdArrowDropDown />}
                cursor={"pointer"}
                
              >
                <option value="5">1</option>
                <option value="10">3</option>
                <option value="15">5</option>
                <option value="20">7</option>
              </Select>
            </Flex>
          </Th>
        </Tfoot>
      </Table>
    </VStack>
  );
};

export default TaskAndProjectsBody;
import axios from 'axios'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'



export default function TodoList({tasks,fetchApi}) {
  
  const toggle = async (id) => {
    const task = tasks.find((t) => t.id === id);
    try {
      await axios.patch(`http://localhost:5000/task/${id}`, {
        completed: !task.completed,
      });
      fetchApi();
    } catch (err) {
      console.error("Error updating task", err);
    }




}
const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/task/${id}`);
    fetchApi();
  } catch (err) {
    console.error("Error deleting task", err);
  }
};


  return (
    <>

      <div className="todo">
        <div className='todo1'> 
        {tasks.map((task) => (
          <div className='todo2' key={task.id}>
            
            
           
            <TableContainer>
  <Table variant='striped' colorScheme='teal' m={20}>
  <TableCaption fontSize={20}>Add a New Task.....</TableCaption>
   
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Tittle</Th>
        <Th>Description</Th>
        <Th >Date</Th>
        <Th>Status</Th>
        <Th>Author of task</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
      <Td fontSize={15} color="black">{task.id}</Td>
        <Td fontSize={15} color="black">{task.title}</Td>
        <Td fontSize={15} color="black">{task. discription}</Td>
        <Td fontSize={15} color="black" isNumeric>{task.date}</Td>
        <Td fontSize={15} color="black" onClick={()=> toggle(task.id)}> <span  style={{color : task.completed ? "green": "red"}}>{task.completed?" True" :" False"}</span></Td>
        <Td fontSize={15} color="black">{task.Author}</Td>
        <Td fontSize={15} color="black"> <button onClick={() => deleteTask(task.id)}>Delete</button></Td>
      </Tr>
    
    </Tbody>
 
  </Table>
</TableContainer>
           
          </div>
        ))}
      </div>
        </div>
       
    </>
  )
}

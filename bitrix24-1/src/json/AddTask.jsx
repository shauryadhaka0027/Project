import axios from 'axios'
import { useState  } from 'react'
import shaurya from "../Css/json.module.css"


export default function AddTask({fetchApi}) {
  const [task, setTask] = useState('')
  const [task2, setTask2] = useState('')
  const [task3, setTask3] = useState('')
  const [task4, setTask4] = useState('')
  const [task5, setTask5] = useState('')
  
  
  async function addTodo() {
    try {
      await axios.post('http://localhost:5000/task', {
        title: task,
        discription:task2,
        date:task3,
        Assign:task4,
        Author:task5,
        completed: false
      })
      fetchApi()
      setTask('')
      setTask2('')
      setTask3('')
      setTask4('')
      setTask5('')
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div  className={shaurya.Add}>
      <h1>
     Add NEW Tasks.......
      </h1>
        <div>
          <label >Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} /> <br />
      <label >Description:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    <input type="text" value={task2} onChange={(e)=> setTask2(e.target.value)} /> <br />
    <label>Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="date" value={task3} onChange={(e)=> setTask3(e.target.value)} /> <br />
      <label >Member:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="text" value={task4} onChange={(e)=> setTask4(e.target.value)} /> <br />
      <label >Author of Task:&nbsp;</label>
      <input type="text" value={task5} onChange={(e)=> setTask5(e.target.value)} /> <br />

    </div>
    <div>
      
    <button className={shaurya.btnn} onClick={addTodo}>Add Task</button>
    </div>
    </div>
  )
}

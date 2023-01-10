import React from 'react'
import { ToDoLIst } from '../Types/Types'

import'./style/toDoList.css'
type Prop = {
    toDoList:ToDoLIst[];
    setToDoList: React.Dispatch<React.SetStateAction<ToDoLIst[]>>;
}
export const SingleTask :React.FC<Prop> = ({toDoList ,setToDoList}:Prop) => {
    console.log(toDoList)
  return (
   <div className='tasks_container'>
   
     {toDoList.map((task)=>(
       <div className='task_container'>{task.title}</div>
     ))}
    
   </div>
  )
}

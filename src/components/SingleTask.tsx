import React from 'react'
import { ToDoLIst } from '../Types/Types'
import { FaBeer } from 'react-icons/fa';
import 'react-icons/bs'
import'./style/toDoList.css'
import { BsFillTrashFill } from 'react-icons/bs';
import{MdModeEditOutline, MdOutlineDone} from 'react-icons/md'

type Prop = {
    toDoList:ToDoLIst[];
    setToDoList: React.Dispatch<React.SetStateAction<ToDoLIst[]>>;
}
export const SingleTask :React.FC<Prop> = ({toDoList ,setToDoList}:Prop) => {
    console.log(toDoList)
  return (
   <div className='tasks_container'>

     {toDoList.map((task)=>(
       <div className='task_container'>
        {task.title}
        <span className='task_icon_container'>
         <BsFillTrashFill/>
         <MdModeEditOutline/>
         <MdOutlineDone/>
        </span>
       </div>
     ))}
    
   </div>
  )
}

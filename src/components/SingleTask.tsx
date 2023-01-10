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
    const DeleteHandler=(id:number):void=>{
      setToDoList(toDoList.filter((task)=>(task.id!=id)));
    }
  return (
   <div className='tasks_container'>
     {toDoList.length>0 ? toDoList.map((task)=>(
       <div className='task_container' key={task.id}>
        <span className='task_title'> {task.title}</span>
        <span className='task_icon_container'>
         <BsFillTrashFill onClick={()=>DeleteHandler(task.id)}/>
         <MdModeEditOutline/>
         <MdOutlineDone/>
        </span>
       </div> 
     )): <h1>No Tasks</h1>}
     
    
   </div>
  )
}

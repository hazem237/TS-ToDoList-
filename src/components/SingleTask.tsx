import { ToDoLIst } from '../Types/Types'
import { FaBeer } from 'react-icons/fa';
import 'react-icons/bs'
import'./style/toDoList.css'
import { BsFillTrashFill } from 'react-icons/bs';
import{MdModeEditOutline, MdOutlineDone} from 'react-icons/md'
import { useState } from 'react';

type Prop = {
    toDoList:ToDoLIst[];
    setToDoList: React.Dispatch<React.SetStateAction<ToDoLIst[]>>;
}

export const SingleTask :React.FC<Prop> = ({toDoList ,setToDoList}:Prop) => {
   
    const [editQuery , setEditQuery]= useState<string>('');
    const DeleteHandler=(id:number):void=>{
      setToDoList(toDoList.filter((task)=>(task.id!=id)));
    }
    const EditHandler =(id:number , index:number):void=>{
        let newArr:ToDoLIst[] = [...toDoList];
        setEditQuery(newArr[index].title);
        newArr.forEach(element => {
            element.editBit=false
        });
        newArr[index].editBit = true;
        setToDoList(newArr);
    }
    const submitEdit =(id:number , index:number):void=>{
        let newArr:ToDoLIst[] = [...toDoList];
        newArr[index].title = editQuery;
        newArr[index].editBit=false;
        setToDoList(newArr);
    }
    console.log(toDoList);
  return (
   <div className='tasks_container'>
     {toDoList.length>0 ? toDoList.map((task , index)=>(
       <div className='task_container' key={task.id}>
       {task.editBit ? 
       <form onSubmit={()=> submitEdit(task.id , index)}>
           <input value={editQuery} onChange={(e)=>setEditQuery(e.target.value)} />
           <button>Edit</button>
       </form>
     : <span className='task_title'> {task.title}</span>}
        <span className='task_icon_container'>
         <BsFillTrashFill onClick={()=>DeleteHandler(task.id)}/>
         <MdModeEditOutline onClick={()=>EditHandler(task.id , index)}/>
         <MdOutlineDone/>
        </span>
       </div> 
     )): <h1>No Tasks</h1>}
     
    
   </div>
  )
}

import React from 'react'
import { ToDoLIst } from '../Types/Types'

type Prop = {
    query:string;
    setQuery:React.Dispatch<React.SetStateAction<string>>;
    toDoList:ToDoLIst[];
    setToDoList: React.Dispatch<React.SetStateAction<ToDoLIst[]>>;
}
export const ToDoList_Form = ({query , setQuery ,toDoList , setToDoList}:Prop) => {
const handlAdd =(e:React.FormEvent)=>{
 e.preventDefault();
 const toDo:ToDoLIst={
    id: toDoList.length+1,
    title: query,
    isDone:false
 }
 if(query)
 {
    setToDoList([...toDoList,toDo]);
 }
}
console.log(toDoList);
  return (
  <form className='tdo_form' onSubmit={handlAdd}>
   <input className='tdo_input' 
   value={query}
   onChange={(e)=>setQuery(e.target.value)}/>
   <button className='tdo_create_tdl' >Add !</button>
  </form>
  )
}

import React, { useState } from 'react';
import './App.css';
import { ToDoList_Form } from './components/ToDoList_Form';
import { ToDoLIst } from './Types/Types';

function App() {

  const[query,setQuery]=useState<string>('');
  const[toDoList , setToDoList]=useState<ToDoLIst[]>([]);
  console.log(toDoList);
  return (
    <div className="App">
    <h1>Simple To do list with TS</h1>
    <ToDoList_Form query={query} setQuery={setQuery} toDoList={toDoList} setToDoList={setToDoList}  />
    </div>
  );
}

export default App;

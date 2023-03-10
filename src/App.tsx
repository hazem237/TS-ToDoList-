import React, { useState } from 'react';
import './App.css';
import { SingleTask } from './components/SingleTask';
import { ToDoList_Form } from './components/ToDoList_Form';
import { ToDoLIst } from './Types/Types';

function App() {
  const[query,setQuery]=useState<string>('');
  const[toDoList , setToDoList]=useState<ToDoLIst[]>([]);

  return (
    <div className="App">
    <h1>Simple To do list with TS</h1>
    <h2>Tasks: {toDoList.length}</h2>
    <ToDoList_Form query={query} setQuery={setQuery} toDoList={toDoList} setToDoList={setToDoList}  />
    <SingleTask toDoList={toDoList} setToDoList={setToDoList} />

    </div>
  );
}

export default App;

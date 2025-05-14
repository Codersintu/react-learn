import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './CreateTodo'
import { Todo } from './Todo'
import axios from 'axios'

function App() {
const [todo,setTodo]=useState([]);
 
useEffect(() => {
  async function fetchTodos() {
    try {
      const response = await axios.get("http://localhost:5000/todo");
      setTodo(response.data.tod);
      console.log(response) // Make sure your backend returns { data: [...] }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  fetchTodos();
}, []); // empty dependency array = runs once when component mounts

  return (
    <div className="">
      <CreateTodo/>
      <Todo todo={todo}/>
    </div>
  )
}

export default App

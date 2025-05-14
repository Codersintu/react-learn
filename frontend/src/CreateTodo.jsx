import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function CreateTodo(props) {
   const [title,setTitle]=useState('');
   const [description,setdescription]=useState('');

   async function Addtodo() {
    try {
      const response = await axios.post("http://localhost:5000/todo", {
        title,
        description,
      });

      if (response.status === 200 || response.status === 201) {
        console.log("Todo added successfully!");
        setTitle('');
        setdescription('');
      } else {
        console.log("Request failed");
      }
    } catch (error) {
      console.log("Error adding todo:", error.message);
    }
  }
    

    return (
        <div className="">
            <input value={title} style={{padding:10,margin:10}} onChange={(e)=>setTitle(e.target.value)}  type="text" id='title' placeholder='title'/><br/>
            <input value={description} style={{padding:10,margin:10}} onChange={(e)=>setdescription(e.target.value)} type="text" placeholder='description'/><br/>
            <button onClick={Addtodo}>Add a Todo</button>
        </div>
    )
}

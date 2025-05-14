import React, { useState } from 'react'

export function Todo({todo}) {
    if (!todo || !Array.isArray(todo)) {
        return <div>Loading todos...</div>; // Handles undefined or invalid data
      }


    return (
        <div className="">
        {todo.map((item) => (
        <div key={item._id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
          <h1>{item.title}</h1>
          <h2>{item.description}</h2>
          <button>{item.completed == true ? "completed" : "Mark as a done"}</button>
        </div>
      ))}
           
        </div>
    )
}

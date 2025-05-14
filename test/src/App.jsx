import React, { useEffect, useMemo, useState } from 'react';
import './App.css'

// function App(){
//   const [todo,setTodo]=useState([{
//     id:1,
//     title:"go to gym",
//     description:"go to gym today"
//   },{
//     id:2,
//     title:"go to gym 2",
//     description:"go to gym today 2"
//   },{
//     id:3, 
//     title:"go to gym 3",
//     description:"go to gym today 3"
//   }])

//   function addtodo(){
//     setTodo([...todo,{
//       id:4, 
//       title:Math.random(),
//       description:Math.random()
//     }])
//   }

//   return (
//     <div>
//       <button onClick={addtodo}>Addtodo</button>
//     {todo.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
//     </div>
//   )
// }

// function Todo({title,description}){

//   return(
//     <div>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//     </div>
//   )
// }



//different

// function App() {
 
//   return (
//     <>
//      <HeaderButton/>
//      <Header title="sintu2"/>
//       <Header title="sintu2"/>
//       <Header title="sintu2"/>
//       <Header title="sintu2"/>
//     </>
//   )
// }

export default App


// function HeaderButton(){
//   const [title,setTitle]= useState("sintu is here");

//   function addmore(){
//     setTitle("sintu is " + Math.random())
//   }
//   return (
//     <>
//      <button onClick={addmore}>Click</button>
//       <Header title={title}/>
//       <Header title={title}/>
      
//     </>
//   )
// }




// const Header = React.memo(function Header({ title }) {
//   console.log("render");
//   return (
//     <div>
//       {title}
//     </div>
//   );
// });




//problem solving
// function App(){
  // const [selectedId,setSelectedId]=useState(1);


  // return (
    // <>
    //  <button onClick={function(params) {
//       setSelectedId(1)
//      }}>1</button>
//      <button onClick={function(params) {
//       setSelectedId(2)
//      }}>2</button>
//      <button onClick={function(params) {
//       setSelectedId(3)
//      }}>3</button>
//      <Todo id={selectedId}/>
//     </>
//   )
// }


// function Todo({id}){
//   const [todo,setTodo]=useState("")

//   useEffect(()=>{
//    const response= axios.get("")
//    setTodo(response.data.todo)
//   },[id,todo])

//   return(
//     <>
//     id={id}
//     <h1>{Todo.title}</h1>
//     <h2>{Todo.description}</h2>

//     </>
//   ) 
// }



function App(){
  const [counter,setCounter]=useState(0);
  const [inputValue,setInputValue]=useState(1)

  // let count=0;
  // for (let i = 0; i <= inputValue; i++) {
  //   count=count + i;
  // }

  let count=useMemo(()=>{
    let finalCount=0;
    for (let i = 0; i <= inputValue; i++) {
      finalCount=finalCount + i;
    }
    return finalCount;
  },[inputValue])
  
  return <div>
    <input type="text" onChange={(e)=>{
      setInputValue(e.target.value)
    }} placeholder={"find sum from 1 to n"} /> <br />

    sum from 1 to {inputValue} is {count} <br />

    <button onClick={()=>{
      setCounter(counter + 1)
    }}>Counter ({counter})</button>

  </div>
}


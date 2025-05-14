// import { lazy, Suspense, useState } from 'react'
import React from 'react'
import './App.css'
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
// import  Navbar  from './Navbar'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { CountAtom, EvenSelector } from './store/atom/Count'
// const Dashboard=lazy(()=>import("./Dashboard"))
// const Sintu=lazy(()=>import("./Sintu"))


//routing logic
// function App() {

//   return (
//     <>
     
//     <BrowserRouter>
//     <Navbar/>
//     <Routes>
//       <Route path='/dashboard' element={<Suspense fallback={"Loading..."}><Dashboard/></Suspense>}/>
//       <Route path='/sintu' element={<Suspense fallback={"Loading..."}><Sintu/></Suspense>}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }


// context api and state management recoil

export function App(props) {
  

  return (
    <div className="">
      <RecoilRoot><Count/></RecoilRoot>
    </div>
  )
}

function Count(params) {
  console.log("re-render")
  return<>
  <div className="">
    <Button/>
    <CountRender/>
  </div>
  </>
}

function Button(){
  const setCount=useSetRecoilState(CountAtom)
  return<>
  <button onClick={()=>setCount(count => count + 1)}>Increase</button>
  <button onClick={()=>setCount(count => count + 1)}>Decrease</button>
  </>
}

function CountRender(){
  const count=useRecoilValue(CountAtom)
  return<>
  {count}
  <Even/>
  </>
}
function Even(){
  const IsEven=useRecoilValue(EvenSelector)
  if (IsEven) {
    return <div className="">it is even</div>
  }else{
    return <div className="">odd</div>
  }

}


export default App

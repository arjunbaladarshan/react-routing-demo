import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));




function TestHook(){
  //this is state
  const [count, setCount] = useState(0);
  const [name, setName] = useState("arjun");
  
  
  return(
    <>
      Count = {count}
      <br/>
      <button onClick={()=>{
        setCount(count+1);
      }}>
        Increment
      </button>
    </>
  );
}


root.render(
  <>
    <TestHook/>
  </>
);

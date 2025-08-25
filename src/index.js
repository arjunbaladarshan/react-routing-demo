import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Layout(){
  return(
    <>
      <Link to='/home'>Home</Link> &nbsp;
      <Link to='/about'>About</Link> &nbsp;
      <Link to='/aboutcollege'>AboutCollege</Link> &nbsp;
      <Link to='/contact'>Contact</Link> <br/>

      <Outlet/>

      <br/>
      <br/>
      <h5>Thank you</h5>
      
    </>
  );
}

function Home(){
  return(
    <>
      <h1>This is Home page</h1>
    </>
  );
}

function About(){
  return(
    <>
      <h1>This is About page</h1>
    </>
  );
}

function AboutCollege(){
  return(
    <>
      <h1>This is About-College page</h1>
    </>
  );
}

function Contact(){  
  return(
    <>
      <h1>This is Contact page</h1>
    </>
  );
}

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/aboutcollege" element={<AboutCollege/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

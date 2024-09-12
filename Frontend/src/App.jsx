import React from 'react'
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";

import Cources from './pages/Cources';
import ContactUs from './pages/ContactUs';
import Registerpage from './pages/Registerpage';


function App() {
  return (
    <>
   <div className='dark:bg-slate-900 dark:text-white dark:border'>
   <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/courses' element={<Cources/>}/>
       <Route path='/contact' element={<ContactUs/>}/>
       <Route path="/register" element={<Registerpage/>} />
     </Routes>
   </div>
    
    </>
  )
}

export default App

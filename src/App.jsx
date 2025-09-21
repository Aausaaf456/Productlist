import './App.css'
import { useState } from 'react';
import Nav1 from './navbar/Nav1';
import Cart from './page/Cart';
import Cart1 from './page1/Cart';
import Foot from './foot/Foot';
function App() {
  
 
  return (
    
   <div className="min-h-screen flex flex-col md:flex-col sm:flex-col sm:min-h-screen md:min-h-screen">
      <Nav1 />
      <div className="flex flex-row md:flex-row flex-grow bg-white">
        <Cart />
        <Cart1 />
      </div>
      <Foot className="mt-0" />
    </div>
   
   )
}

export default App

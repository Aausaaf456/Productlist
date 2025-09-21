import './Nav.css'
import { useState } from 'react';


function Nav1() {
   const [open, setOpen] = useState(false);
 
  return (
    
     <div>
      <nav className="bg-white mx-auto px-4 flex items-center justify-between h-16">
        
        <div
          className="flex items-center space-x-2"
          style={{ width: "182px", height: "44px" }}
        >
          <div className="w-7 h-7 bg-blue-600 flex items-center justify-center rounded">
            <div className="w-3 h-3 bg-white transform rotate-45 flex items-center justify-center">
              <div className="w-1 h-1 bg-blue-600 transform rotate-45"></div>
            </div>
          </div>
          <h1 className="text-black text-xl font-bold">E-Comm</h1>
        </div>

        
        <div className="hidden md:flex flex-1 justify-center space-x-12 items-center">
          <a href="#" className="text-blue-600 hover:text-red-300">
            Home
          </a>
          <a href="#" className="text-black hover:text-blue-300">
            BAG
          </a>
          <a href="#" className="text-black hover:text-blue-300">
            SNEAKERS
          </a>
          <a href="#" className="text-black hover:text-blue-300">
            BELT
          </a>
          <a href="#" className="text-black hover:text-blue-300">
            CONTACT
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-6" style={{marginRight: '4px'}}>
           <img src="/image.png" alt="logo" className="w-6 h-6 object-contain" />
           <h1 className='text-black w-6 h-6'>Items</h1>
           <h1 className='text-gray-400 w-6 h-6 mr-4'>$0.00</h1>
        </div>
        
       
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16" 
                }
              />
            </svg>
          </button>
        </div>
      </nav>
      
   
      {open && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2">
          <a href="#" className="block text-black hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block text-black hover:text-blue-600">
            BAG
          </a>
          <a href="#" className="block text-black hover:text-blue-600">
            SNEAKERS
          </a>
          <a href="#" className="block text-black hover:text-blue-600">
            BELT
          </a>
          <a href="#" className="block text-black hover:text-blue-600">
            CONTACT
          </a>
        </div>
      )}
    </div>
  
   )
}

export default Nav1

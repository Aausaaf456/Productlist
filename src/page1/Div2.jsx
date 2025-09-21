import './Cart1.css';
import {useState,useEffect} from 'react';
 
export default function Div2()
{
  
    return(
        <div className='w-full bg-gray-100  max-w-[1200px] mx-auto mt-3 px-4 h-12'>
           <div className=' mr-2 w-full max-w-[1200px] flex md:flex-row justify-between items-center h-12'>
               <div className='flex md:flex-row justify-between items-center'>
                   <div className='md:h-12 md:w-20 h-12 w-20 items-center mt-1 flex justify-center'>
                     <h6 className='items-center text-black'>13 Items</h6>
                   </div>
                   <div className='md:h-12 md:w-20 h-12 w-20 items-center  ml-8 flex justify-center'>
                     <h6 className='items-center text-black'>Sort By</h6>
                   </div>
                   <div className='md:h-12 md:w-20 h-12 w-20 items-center flex justify-center ml-4 '>
                     <select class='border rounded p-2 sm:rounded md:rounded md:p-2 sm:p-2'>
                          <option value="Name">Name</option>
                          <option value="price">Price</option>
                          <option value="popularity">Popularity</option>
                     </select>
                   </div>
                   <div className='md:h-12 md:w-20 h-12 w-20 items-center flex justify-center ml-12'>
                     <h6 className='items-center text-black'>Show</h6>
                   </div>
                   <div className='md:h-12 md:w-20 h-12 w-20 items-center ml-4 flex justify-center'>
                     <select class=' rounded sm:rounded p-2 sm:p-2 md:rounded md:p-2'>
                          <option value="Pop">12</option>
                          <option value="Nam">14</option>
                          <option value="price">15</option>
                     </select>
                   </div>
               </div>
            <div className='flex flex-row md:flex-row sm:flex-row justify-center '>
              <div className="bg-gray-100 p-2 flex items-center justify-center h-12">
                 <button
                   className="hover:bg-gray-200 p-2 grid grid-cols-3 gap-1 w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12"
                 >
                     {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-blue-600"></div>
                     ))}
                 </button>
             </div>
             <div className='flex md:flex-col sm:flex-col justify-center h-12 space-x-1'>
              <button className='hover:bg-gray-200'>
                 <div className="flex flex-col justify-center h-12 w-12 space-y-1 items-center">
                     <div className="w-6 h-1 bg-gray-300 rounded"></div>
                     <div className="w-6 h-1 bg-gray-300 rounded"></div>
                      <div className="w-6 h-1 bg-gray-300 rounded"></div>
                  </div>
              </button>
             </div>
            </div>  
           </div>

        </div>

    )
};
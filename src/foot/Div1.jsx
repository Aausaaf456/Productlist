import './foots.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import React from 'react';

export default function Div1()
{
    return(
        <div className='flex md:flex-row sm:flex-row justify-evenly w-auto h-[300px] sm:w-auto md:w-auto sm:h-[300px]' >
            <div className='flex  md:flex-col sm:flex-col w-80 h-80 md:w-80 md:h-80 sm:h-80 sm:w-80'>
                   <div
                   className="flex items-center space-x-2 ml-8 mt-8"
                   style={{ width: "182px", height: "44px" }}
                  >
                    <div className="w-7 h-7 bg-blue-600 flex items-center justify-center rounded">
                        <div className="w-3 h-3 bg-white transform rotate-45 flex items-center justify-center">
                          <div className="w-1 h-1 bg-blue-600 transform rotate-45"></div>
                        </div>
                    </div>
                    <h1 className="text-black text-xl font-bold">E-Comm</h1>
                   </div>
                   <div className='w-80 h-80 md:h-12 sm:h-12 mt-0' >
                      <h6 className='text-black p-6 mb-6' style={{fontSize:'13px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
                      </h6>
                   </div>
             </div>
              <div className="flex flex-col w-80 md:w-96 sm:w-80 p-4  ">
                <div className="flex items-center mb-4">
                   <h1 className="text-black text-xl font-bold">Follow Us</h1>
                </div>
                <p className="text-black text-sm mb-4">
                    Since the 1500s, when an unknown printer took a galley of type and 
                     <ul>
                       scrambled
                     </ul>
                 </p>
                <div className="flex gap-4">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <div className=" rounded p-3 hover:bg-blue-200 transition">
                            <FaFacebookF className="text-blue-600 text-lg" />
                        </div>
                    </a>
                     <a href="#" target="_blank" rel="noopener noreferrer">
                         <div className=" rounded p-3 hover:bg-blue-200 transition">
                             <FaTwitter className="text-blue-400 text-lg" />
                          </div>
                       </a>
                </div>
            </div>
              <div className='flex  md:flex-col sm:flex-col w-80 h-80 md:w-80 md:h-80 sm:h-80 sm:w-80'>
                   <div
                   className="flex items-center space-x-2 ml-8 mt-8"
                   style={{ width: "182px", height: "44px" }}
                  >
                    
                    <h1 className="text-black text-xl font-bold">Contact Us</h1>
                   </div>
                   <div className='w-80 h-80 md:h-12 sm:h-12 mt-0' >
                      <h6 className='text-black p-6 mb-6' style={{fontSize:'13px'}}>
                       E-Comm , 
                       <ul> 4578 Marmora Road,</ul>
                       <ul>Glasgow D04 89GR</ul>
                      </h6>
                   </div>
             </div>
        </div>

    )
}
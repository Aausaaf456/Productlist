import React from "react";
import './Cart1.css';
import  Div2 from './Div2';
import Div3 from './Div3';
import Div4 from './Div4';
export default function Cart()
{
return (
  <div className="container bg-white w-60 max-w-[300px] sm:max-w-[350px]  md:max-w-[400px] lg:max-w-[500px] mx-3 mt-3 h-auto">
         <div className="flex flex-col w-full bg-gray-100 p-4 rounded-lg">
             <h1 className="text-black font-bold mb-6 text-lg sm:text-xl md:text-2xl">
                      Hot Details
             </h1>
         <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                  <h1 className="text-black">Nike</h1>
                  <h1 className="text-gray-300">2</h1>
              </div>

              <div className="flex justify-between">
                   <h1 className="text-blue-500">AirMax</h1>
                   <h1 className="text-blue-500">48</h1>
               </div>

               <div className="flex justify-between">
                  <h1 className="text-black">Nike</h1>
                  <h1 className="text-gray-300">14</h1>
               </div>

              <div className="flex justify-between">
                <h1 className="text-black">Adidas</h1>
                <h1 className="text-gray-300">15</h1>
              </div>

             <div className="flex justify-between">
                <h1 className="text-black">Vans</h1>
                <h1 className="text-gray-300">23</h1>
             </div>

             <div className="flex justify-between">
                 <h1 className="text-black">All Stars</h1>
                 <h1 className="text-gray-300">1</h1>
              </div>

             <div className="flex justify-between">
                 <h1 className="text-black">Adidas</h1>
              <h1 className="text-gray-300">95</h1>
          </div>
       </div>
     </div>

    
      <Div2 />
      <Div3 />
      <Div4 />
  </div>
);
    
}
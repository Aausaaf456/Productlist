import './Cart1.css';
import { useState } from 'react';


export default  function Div2()
{
   const minPrice = 13.99;
   const maxPrice = 25.99;
   const [minVal, setMinVal] = useState(minPrice);
   const [maxVal, setMaxVal] = useState(maxPrice);

   const handleMinChange = (e) => {
     const value = parseFloat(e.target.value);
     if (value <= maxVal) setMinVal(value);
   };

   const handleMaxChange = (e) => {
     const value = parseFloat(e.target.value);
     if (value >= minVal) setMaxVal(value);

  };
   const percent = (val) =>
    ((val - minPrice) / (maxPrice - minPrice)) * 100;

    return(
        <div className="mt-3 flex flex-col w-60 h-44 bg-gray-100  sm:w-60 md:w-60">
          <h1 className='text-black mt-4 ml-3'>Prices</h1>
          <div className='flex flex-row justify-between w-60 h-2 mt-4 '>
            <h1 className='text-black ml-3'>ranger</h1>
            <h1 className='text-black mr-3'>${minVal.toFixed(2)} - ${maxVal.toFixed(2)}</h1>
          </div>
          <div className="relative mt-12">
       
               <div
                  className="absolute h-2 bg-white rounded-l"
                  style={{ width: `${percent(minVal)}%` }}
               />
        
                <div
                 className="absolute h-1 bg-blue-500 rounded"
                 style={{
                  left: `${((minVal - minPrice) / (maxPrice - minPrice)) * 100}%`,
                  right: `${100 - ((maxVal - minPrice) / (maxPrice - minPrice)) * 100}%`,
                 }}
                />

      
               <input
                type="range"
                min={minPrice}
                max={maxPrice}
                step="0.01"
                value={minVal}
                onChange={handleMinChange}
                className="absolute w-56 ml-4 bg-transparent pointer-events-none appearance-none"
                style={{ zIndex: minVal > maxPrice - 1 ? 5 : 3 }}
               />

        
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                step="0.01"
                value={maxVal}
                onChange={handleMaxChange}
                className="absolute w-full bg-transparent  pointer-events-none appearance-none"
              />
           </div>
         </div>

    )
};
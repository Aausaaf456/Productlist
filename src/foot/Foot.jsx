import './foots.css';
import Div1 from './Div1';
import Div2 from './Div2';
import Div3 from './Div3';

export default function Foot()
{
    return(
         <div className="bg-blue-300 w-full md:w-full sm:w-full  h-auto p-6" style={{height: '700px'}}>
            <div className='bg-blue-300 w-full md:w-full h-[300px]
            sm:h-[300px] md:h-[300px] flex md:flex-col sm:flex-col'>
               <Div1/>
            </div>
             <div className='bg-blue-300 w-full md:w-full h-[300px]
            sm:h-[300px] md:h-[300px] flex md:flex-col sm:flex-col'>
               <Div2/>
                <div className='flex md:flex-row mb-6 md:h-1 bg-white sm:flex-row justify-evenly w-auto h-1 sm:w-auto md:w-auto sm:h-1'>

               </div>
               <Div3/>
            </div>
         </div>
    

    )
};
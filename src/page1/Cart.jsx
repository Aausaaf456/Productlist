import './Cart1.css';
import './Div2';
import Div2 from './Div2';
import Div3 from './Div3';
import Div4 from './Div4';


export default function Cart()
{
    return(
        <div className="w-full max-w-[1200px] mx-auto mb-20 px-4 mt-4 flex flex-col h-auto" style={{marginBottom:'700px ', height:'320px'}}>
             <div className="flex flex-col md:flex-row justify-between items-center bg-sky-300 h-auto md:h-72">
                <div className="flex flex-col text-center md:text-left mt-10 md:mt-24 md:ml-4 mb-10">
                     <h1 className="text-2xl sm:text-3xl md:text-4xl text-white">
                         Adidas Men Running
                     </h1>
                     <h1 className="text-2xl sm:text-3xl md:text-4xl text-white">
                         Sneakers
                     </h1>
                     <h6 className="text-white mt-2 text-sm sm:text-base">
                          Performance and design. taken right to the edge
                     </h6>
                     <h6 className="mt-4">
                         <a href="#" className="text-white hover:text-yellow-100 underline">
                                  Shop Now
                          </a>
                      </h6>
                  </div>

    
                 <div className="flex justify-center md:justify-end mt-6 md:mt-4">
                        <img
                          src="/shoes1.png"
                          alt="shoes"
                          className="w-60 sm:w-72 md:w-[400px] lg:w-[600px] xl:w-[700px] h-auto object-contain scale-x-[-1]"
                          style={{height: '200px',marginTop:'100px'}}
                         />
                   </div>
              </div>
              <Div2/>
              <Div3/>
              <Div4/>
           </div>

    )
}
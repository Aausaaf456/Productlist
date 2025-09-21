import './Cart1.css';
import Star from'./Star';

export default function Div3()
{
    return(
     <div className='w-full max-w-[1200px] md:w-full sm:w-full md:max-w-[1200px] sm:max-w-[1200px] bg-white mt-4 flex md:flex-col sm:flex-col justify-center items-center gap-x-4'  style={{ height: "575px",marginTop:'26px' }}>
        <div className="w-full max-w-[1200px] md:w-full sm:w-full md:max-w-[1200px] sm:max-w-[1200px] bg-white mt-4 flex justify-center items-center gap-x-4"
               style={{ height: "300px" }}>
              <div className="bg-white w-80 h-[300px] flex flex-col items-center justify-between">
                    <div className="bg-gray-100 w-full h-[220px] flex items-center justify-center relative">
                            <button className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                                 HOT
                            </button>
                            <img
                            src="/boot1.png"
                            alt="shoes"
                            className="w-full h-[200px] object-contain scale-x-[-1]"
                            />
                    </div>
                   <div className="w-full h-[80px] flex flex-col items-center justify-center">
                        <p className="text-black font-bold text-center">Nike Air Max 270 React</p>
                        <Star />
                   </div>
              </div>
              <div className="bg-white w-80 h-[300px] flex flex-col items-center justify-between">
                 <div className="bg-gray-100 w-full h-[220px] flex items-center justify-center relative">
                     <button className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                          HOT
                      </button>
                      <img
                      src="/boot2.png"
                      alt="shoes"
                      className="w-full h-[200px] object-contain scale-x-[-1]"
                      />
                </div>
               <div className="w-full h-[80px] flex flex-col items-center justify-center">
                    <p className="text-black font-bold text-center">Nike Air Max 270 React</p>
                    <Star />
               </div>
             </div>
             <div className="bg-white w-80 h-[300px] flex flex-col items-center justify-between">
                  <div className="bg-gray-100 w-full h-[220px] flex items-center justify-center relative">
                     <button className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                       HOT
                     </button>
                      <img
                      src="/boot3.png"
                      alt="shoes"
                       className="w-full h-[200px] object-contain scale-x-[-1]"
                      />
                    </div>
                <div className="w-full h-[80px] flex flex-col items-center justify-center">
                      <p className="text-black font-bold text-center">Nike Air Max 270 React</p>
                      <Star />
                </div>
             </div>
         </div>
         <div className="w-full max-w-[1200px] md:w-full sm:w-full md:max-w-[1200px] sm:max-w-[1200px] bg-white mt-4 flex justify-center items-center gap-x-4"
               style={{ height: "300px" }}>
              <div className="bg-white w-80 h-80  md:w-80 sm:w-80  md:h-[300px] sm:h-[300px] flex md:flex-col sm:flex-col items-center justify-center " style={{height:'300px'}}>
                  <div className="bg-white w-80 h-[300px] flex flex-col items-center justify-between">
                      <div className="bg-gray-100 w-full h-[220px] flex items-center justify-center relative">
                          <button className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                               HOT
                         </button>
                         <img
                         src="/boot4.png"
                         alt="shoes"
                         className="w-full h-[200px] object-contain scale-x-[-1]"
                         />
                     </div>
                    <div className="w-full h-[80px] flex flex-col items-center justify-center">
                        <p className="text-black font-bold text-center">Nike Air Max 270 React</p>
                        <Star />
                   </div>
                </div>
               </div>
               <div className="bg-white w-80 h-[300px] flex flex-col items-center justify-between">
                    <div className="bg-gray-100 w-full h-[220px] flex items-center justify-center relative">
                          <button className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                            HOT
                          </button>
                          <img
                           src="/boot5.png"
                           alt="shoes"
                           className="w-full h-[200px] object-contain scale-x-[-1]"
                           />
                     </div>
                    <div className="w-full h-[80px] flex flex-col items-center justify-center">
                       <p className="text-black font-bold text-center">Nike Air Max 270 React</p>
                      <Star />
                     </div>
                 </div>
                <div className="bg-white w-80 h-[300px] flex flex-col items-center justify-between">
                    <div className="bg-gray-100 w-full h-[220px] flex items-center justify-center relative">
                        <button className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                            HOT
                       </button>
                      <img
                      src="/boot6.png"
                      alt="shoes"
                      className="w-full h-[200px] object-contain scale-x-[-1]"
                      />
                   </div>
                  <div className="w-full h-[80px] flex flex-col items-center justify-center">
                    <p className="text-black font-bold text-center">Nike Air Max 270 React</p>
                    <Star />
                  </div>
               </div>
         </div>
     </div>
    )
        
}
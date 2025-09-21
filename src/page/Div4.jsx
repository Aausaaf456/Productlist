import './Cart1.css';
export default function Cart()
{
    return(
            <>
                <div className=" flex flex-col w-60 h-56 bg-gray-100 sm:flex sm:flex-row md:flex md:flex-row  sm:w-60 md:w-60 mt-6">
                    <h1 className="text-black ml-3 mt-3 ">Brand</h1>
                    <div className="flex justify-between flex-col w-60 h-4 mt-5">
                         <div className="flex flex-row md:flex md:flex-row sm:flex sm:flex-row justify-between">
                            <h1 className="text-black ml-2">Nike</h1>
                            <h1 className="text-gray-300 mr-2 ">99</h1>
                         </div>
                         <div className="flex flex-row md:flex md:flex-row sm:flex sm:flex-row justify-between mt-4">
                            <h1 className="text-blue-500 ml-2">Nike</h1>
                            <h1 className="text-blue-500 mr-2 ">99</h1>
                         </div>
                         <div className="flex flex-row md:flex md:flex-row sm:flex sm:flex-row justify-between mt-4">
                            <h1 className="text-black ml-2">Adidas</h1>
                            <h1 className="text-gray-300 mr-2 ">99</h1>
                         </div>
                         <div className="flex md:flex md:flex-row sm:flex sm:flex-row flex-row justify-between mt-4">
                            <h1 className="text-black ml-2">Siemens</h1>
                            <h1 className="text-gray-300 mr-2 ">99</h1>
                         </div>
                             
                    </div>
                </div>
                <div className="mt-6 w-60 h-8 bg-gray-100 flex sm:flex md:flex sm:h-8 sm:w-60 md:h-8 md:w-60 items-center justify-center">
                  <button className="bg-gray-100 text-black text-lg">MORE</button>
                </div>
            </>
               
            
    )
};
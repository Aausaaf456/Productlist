import './Cart1.css';

export default function Star()
{
    return(
    <>
         <div className="flex md:flex sm:flex gap-2">
                <div
                  className="w-4 sm:w-4 md:w-4 md:h-4 sm:h-4  h-4 bg-yellow-300"
                  style={{
                   clipPath:
                   "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }}
                    ></div>
                   <div
                    className="w-4 h-4 sm:w-4 md:w-4 md:h-4 sm:h-4 bg-yellow-300"
                    style={{
                    clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }}
                    ></div>
                    <div
                    className="w-4 h-4 sm:w-4 md:w-4 md:h-4 sm:h-4 bg-yellow-300"
                    style={{
                    clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                     }}
                    ></div>
                    <div
                    className="w-4 h-4 sm:w-4 md:w-4 md:h-4 sm:h-4 bg-yellow-300"
                     style={{
                     clipPath:
                     "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                     }}
                     ></div>
                     <div
                     className="w-4 h-4 sm:w-4 md:w-4 md:h-4 sm:h-4 bg-gray-400"
                     style={{
                     clipPath:
                     "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                     }}
                     ></div>
        </div>
         <div className="flex gap-2 mt-2 md:flex-row sm:flex-row justify-center">
                
                <p className=" font-bold text-blue-600 ">$149.99</p>
                <p className="text-gray-500 line-through">$199.99</p>
                <p className="text-red-500">24% off</p>
         </div>
    </>

    )
}
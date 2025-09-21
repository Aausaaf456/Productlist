import './Cart1.css';

export default function Div3()
{

    return(
       <div className="w-60 h-36 flex flex-col sm:w-60 md:w-60 bg-gray-100 mt-6 p-4">
            <div className="mb-4">
                <h1 className="text-black text-lg">Color</h1>
           </div>
           <div className="flex h-24 w-full justify-evenly items-center">
                  <div className="w-5 h-5 rounded-full border hover:border-green-300 flex items-center justify-center cursor-pointer">
                       <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                 <div className="w-5 h-5 rounded-full border hover:border-green-300 flex items-center justify-center cursor-pointer">
                      <div className="w-3 h-3 rounded-full bg-red-600"></div>
                 </div>
                 <div className="w-5 h-5 rounded-full border hover:border-green-300 flex items-center justify-center cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                 </div>
                 <div className="w-5 h-5 rounded-full border hover:border-green-300 flex items-center justify-center cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                 </div>
                 <div className="w-5 h-5 rounded-full border hover:border-green-300 flex items-center justify-center cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-pink-600"></div>
                 </div>
                 <div className="w-5 h-5 rounded-full border hover:border-green-300 flex items-center justify-center cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-pink-200"></div>
                 </div>
            </div>
        </div>

    )

};
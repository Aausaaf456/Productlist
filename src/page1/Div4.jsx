import './Cart1.css';

export default function Div4()
{
    return(
        <div className='flex md:flex-row sm:flex-row w-full max-w-[1200px]
              h-8 sm:max-w-[1200px] md:max-w-[1200px] sm:h-8 md:h-8 bg-gray-100 mt-8 justify-center items-center'>
              <div className='w-full bg-gray-100 max-w-[400px] sm:max-w-[400px] md:max-w-[400px] sm:h-8 md:h-8 h-8 flex md:flex-row sm:flex-row justify-center'>
                 <button className='w-10 sm:w-10 md:w-10 sm:h-8 md:h-8 '>
                    1
                 </button>
                  <button className='w-10 sm:w-10 md:w-10 sm:h-8 md:h-8 '>
                    2
                 </button>
                 <button className='w-10 sm:w-10 text-black bg-blue-500 md:w-10 sm:h-8 md:h-8 '>
                    3
                 </button>
                 <button className='w-10 sm:w-10 md:w-10 sm:h-8 md:h-8 '>
                    4
                 </button>
                 <button className='w-10 sm:w-10 md:w-10 sm:h-8 md:h-8 '>
                    5
                 </button>
              </div>
        </div>
    )
}
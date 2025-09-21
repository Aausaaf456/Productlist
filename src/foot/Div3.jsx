import './foots.css';

export default function Div3()
{
    return(
        <div className='w-auto md:w-auto sm:w-auto h-10 sm:h-10 md:h-10 flex md:flex-row sm:flex-row justify-between'>
            <div className='w-12 h-10 flex justify-center md:flex md:w-10 md:h-10 sm:h-10 sm:w-10' style={{width:'300px'}}>
                <p className='text-gray-200 ' style={{fontSize:'10px'}}>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            </div>
            <div className=' sm:h-10 md:h-10 h-10 flex justify-center md:flex-row sm:flex-row gap-2' style={{width:'400px'}}>
                <div className='w-16 h-10 rounded bg-blue-300 overflow-hidden'>
                   <img
                    src="/western.png"
                     alt="western"
                      className="w-full h-full object-contain "
                     />
                  </div>
                  <div className='w-16 h-10 rounded bg-blue-300 overflow-hidden'>
                   <img
                    src="/master.png"
                     alt="master"
                      className="w-full h-full object-contain "
                     />
                  </div>
                  <div className='w-16 h-10 rounded bg-blue-300 overflow-hidden'>
                   <img
                    src="/pay.png"
                     alt="pay"
                      className="w-full h-full object-contain "
                     />
                  </div>
                  <div className='w-16 h-10 rounded bg-blue-300 overflow-hidden'>
                   <img
                    src="/visa.png"
                     alt="visa"
                      className="w-full h-full object-contain "
                     />
                  </div>
                
            </div>
        </div>
    )
}
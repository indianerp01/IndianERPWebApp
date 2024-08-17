import React from 'react'
import Image from 'next/image'

import whatsapp from '../../../../public/whatsapp.png'




const ECODCard = ({name,content}:{name:string,content:string}) => {
  return (
    <>
        <div style={{width:"350px"}} className="mb-24 flex flex-col border-2 bg-white col-span-4  items-center  px-10 mx-5   hover:shadow-2xl  transition-all ease-linear duration-200 rounded-xl shadow-lg">
            <span style={{fontSize:'18px'}} className="text-center  font-semibold pt-10 ">{name}</span>
            <Image className='pt-16' style={{width:'100px'}}  alt="Whatsapp-icon" src={whatsapp} />
            <p className='text-center pt-16 line-clamp-2'>{content} <svg className='h-10 w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
  <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
  <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
</svg>
</p>
            <button className='bg-neutral-500 hover:bg-neutral-400 hover:text-black text-white rounded-lg my-10 p-2 ease-linear transition-all duration-300'>Read more</button>
   
    
        </div>
    </>
  )
}

export default ECODCard
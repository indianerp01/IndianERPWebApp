import React from 'react'
import Image from 'next/image'

import whatsapp from '../../../../public/whatsapp.png'




const ECODCard = ({name,content}:{name:string,content:string}) => {
  return (
    <>
    
        <div  className="max-w-xl mb-24  flex flex-col border-2 bg-white   items-center  px-10    hover:shadow-2xl  transition-all ease-linear duration-200 rounded-xl shadow-lg">
            <span  className="text-center text-2xl  font-semibold pt-10 ">{name}</span>
            <Image className='pt-16' style={{width:'100px'}}  alt="Whatsapp-icon" src={whatsapp} />
            <p className='text-center pt-16 line-clamp-2'>{content} </p>
            <button className='bg-neutral-500 hover:bg-neutral-400 hover:text-black text-white rounded-lg my-10 p-2 ease-linear transition-all duration-300'>Read more</button>
   
    
        </div>
    </>
  )
}

export default ECODCard
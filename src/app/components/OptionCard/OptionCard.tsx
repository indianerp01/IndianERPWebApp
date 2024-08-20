import React from 'react'
import Image from 'next/image'

import whatsapp from '../../../../public/whatsapp.png'




const OptionCard = ({name,content}:{name:string,content:string}) => {
  return (
    <>
    
        <div style={{width:"350px"}} className="mb-24 pt-5  flex flex-col border-2 bg-white   items-center  px-10 mx-5   hover:shadow-2xl  transition-all ease-linear duration-200 rounded-xl shadow-lg">
            <span  className="uppercase text-center text-xl   font-semibold pt-10 ">{name}</span>
            <Image className='pt-16' style={{width:'100px'}}  alt="Whatsapp-icon" src={whatsapp} />
            <p className='text-center pt-16 line-clamp-2'>{content} </p>
            <button className='bg-neutral-500 hover:bg-neutral-400 hover:text-black text-white rounded-xl my-10 p-2 ease-linear transition-all duration-300'>Read more</button>
   
    
        </div>
    </>
  )
}

export default OptionCard
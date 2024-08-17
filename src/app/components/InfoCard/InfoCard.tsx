import Image, { StaticImageData } from "next/image";



export function MagicCard({name,imgSrc}:{name:string,imgSrc:string | StaticImageData}) {
  
  return (
    <div >
      
      <div style={{width:"250px",height:"250px"}} className="mb-24 mt flex flex-col bg-white col-span-4  items-center  px-15 mx-5   hover:shadow-2xl  transition-all ease-linear duration-200 rounded-xl shadow-lg hover:bg-gray-100">
         
              <Image style={{width:'50px'}} className="mt-10" alt="Whatsapp-icon" src={imgSrc} />
              <span style={{fontSize:'18px'}} className="text-center px-3 mt-8 ">{name} </span>
        
         
      </div>
      
      
    </div>
  );
}

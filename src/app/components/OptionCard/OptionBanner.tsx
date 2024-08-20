import React from 'react'
import OptionCard from './OptionCard'

const OptionBanner = () => {
  return (
    <>
    <div className='container'>
    <div className=' mx-auto lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid grid-cols-1 items-center rounded-lg text-center pt-5'>
         <h2 className=' text-2xl font-semibold py-5'>Grow your Pharma Business 3X Faster with ECOD Secure</h2>
         <p className='px-15 text-md'>Stepping up in the world of data & technology, Indian ERP Ltd has launched ECOD Securethe first data management platform for ease of data visibility amongst manufacturers & distributors in India.</p>
         <p className='pt-4 text-sm'>ECOD Secure thrives as the first Indian product to offer three unique solutions</p>
       </div>
      
      <section className=' mt-5 mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid grid-cols-1 '>
        
        <OptionCard name="Indian Panel" content="Easy & simple way to get your Secondary Sales Data" />
        <OptionCard name="Advertisement On ICT" content="Advertise to India’s top 2.5 Lakh+ Retailers &1 Lakh+ Distributors on Indian ERP Screen" />
        <OptionCard name="Digital Salesman (Flip)" content="Knock out the competition by substituting your products" />
      </section>
    </div>
       
        
    </>
  )
}

export default OptionBanner




// import React from 'react'
// import OptionCard from './OptionCard'

// const OptionBanner = () => {
//   return (
//     <>
//     <div className='w-[1200] mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid grid-cols-1 gap-5'>
//        <div className="bg-red-500 p-10">Hello</div>
//        <div className="bg-red-500 p-10">Hello</div>
//        <div className="bg-red-500 p-10">Hello</div>
//        <div className="bg-red-500 p-10">Hello</div>
//        <div className="bg-red-500 p-10">Hello</div>
//        <div className="bg-red-500 p-10">Hello</div>
//        <div className="bg-red-500 p-10">Hello</div>
//        <div className="bg-red-500 p-10">Hello</div>
//     </div>    
//     </>
//   )
// }

// export default OptionBanner
import React from 'react'
import ECODCard from './ECODCard'

const ECODBanner = () => {
  return (
    <>
       <div className='flex flex-col items-center text-center px-48'>
         <h2 className=' text-3xl font-semibold '>Grow your Pharma Business 3X Faster with ECOD Secure</h2>
         <p className='pt-8'>Stepping up in the world of data & technology, Indian ERP Ltd has launched ECOD Securethe first data management platform for ease of data visibility amongst manufacturers & distributors in India.</p>
         <p className='pt-4'>ECOD Secure thrives as the first Indian product to offer three unique solutions</p>
       </div>
      
      <section className='flex   justify-center mt-12'>
        
        <ECODCard name="Indian Panel" content="Easy & simple way to get your Secondary Sales Data" />
        <ECODCard name="Advertisement on Indian Computer Technology" content="Advertise to India’s top 2.5 Lakh+ Retailers &1 Lakh+ Distributors on Indian ERP Screen" />
        <ECODCard name="Digital Salesman (Flip)" content="Knock out the competition by substituting your products" />
      </section>
        
    </>
  )
}

export default ECODBanner
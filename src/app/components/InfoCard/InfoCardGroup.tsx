
import React from "react";
import { MagicCard } from './InfoCard'



//images import
import whatsapp from '../../../../public/whatsapp.png'
import reminder from '../../../../public/reminder.png'
import hyperlink from '../../../../public/hyperlink.png'
import handshake from '../../../../public/handshake.png'
import dataEntry from '../../../../public/dataEntry.png'
import worker from '../../../../public/worker.png'



const InfoCardGroup = () => {
  return <main>
    
    <div className="flex flex-col items-center justify-center " style={{marginLeft:"auto",marginRight:'auto'}}>
      <div className="flex   justify-center mt-10">
            <MagicCard name={'Send Invoices on Whatsapp'} imgSrc={whatsapp} />
            
            <MagicCard name={'Auto Prescription Reminder'} imgSrc={reminder} />
            
            <MagicCard name={'Promise Order'} imgSrc={handshake} />
            
      </div>
      <div className="flex   justify-center mt-10 ">
            <MagicCard name={'ERP-to-ERP Direct Order'} imgSrc={hyperlink} />
            
            <MagicCard name={'Data Entry Free Software'} imgSrc={dataEntry} />
            
            <MagicCard name={'Digital Salesman(Flip)'} imgSrc={worker} />
      </div>
    </div>

    
    

  </main>;
};

export default InfoCardGroup;

import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import { MagicCard } from "@/app/components/infoCard/infoCard1";
import Banner  from "@/app/components/simpleCard/Banner";
import Trial from "@/app/components/trial/trial";


//images import
import whatsapp from '../../../../public/whatsapp.png'
import reminder from '../../../../public/reminder.png'
import hyperlink from '../../../../public/hyperlink.png'
import handshake from '../../../../public/handshake.png'
import dataEntry from '../../../../public/dataEntry.png'
import worker from '../../../../public/worker.png'



const Accounting = () => {
  return <main>
      <Trial />
    <Banner />
    <div className="flex flex-col items-center justify-center " style={{marginLeft:"auto",marginRight:'auto'}}>
      <div className="flex justify-evenly mb-10">
            <MagicCard name={'Send Invoices on Whatsapp'} imgSrc={whatsapp} />
            <div className="px-20 " >
                <MagicCard name={'Auto Prescription Reminder'} imgSrc={reminder} />
            </div>
            
            <MagicCard name={'Promise Order'} imgSrc={handshake} />
            
      </div>
      <div className="flex justify-evenly ">
            <MagicCard name={'ERP-to-ERP Direct Order'} imgSrc={hyperlink} />
            <div className="px-20">
                <MagicCard name={'Data Entry Free Software'} imgSrc={dataEntry} />
            </div>
            
            <MagicCard name={'Digital Salesman(Flip)'} imgSrc={worker} />
      </div>
    </div>

    
    

  </main>;
};

export default Accounting;

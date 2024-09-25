import Link from 'next/link';
import React from 'react';

const FeaturesList = () => {
  const featuresData = [
    {
      title: 'Retail Softwares',
      description: 'Manage all your retail operations in a centralized system with Indian Retail Software. From purchasing to inventory management to selling, stay on top of everything & increase your sales by attracting more customers.',
      image: './Retail/Retail-1.svg',
      link: '/Retail',
    },
    {
      title: 'Pharmacy software',
      description: 'Take your pharmacy to the next level with Indian Pharmacy Software. Streamline your operations, boost customer loyalty, and increase profitability with features like automated invoice sending, prescription reminders, and real-time inventory management.',
      image: './Retail/Retail-2.svg',
      link: '/Retail/Pharmacy',
    },
    {
      title: 'SuperMarket Software',
      description: 'Streamline your supermarket with our powerful software solution. Effortlessly generate e-invoices, manage inventory, secure finances, and ensure GST compliance, all while boosting productivity and speeding up checkouts. Say goodbye to manual processes and hello to a more efficient and profitable supermarket.',
      image: './Retail/Retail-3.svg',
      link: '/Retail/SuperMarket',
    },
    {
      title: 'Garment Software',
      description: 'Effortlessly streamline your entire garment store operations with Indian Garment Billing Software. From billing to stock management to selling, Indian Garment Software empowers you to stay on top of your business, leading to increased sales and more customers.',
      image: './Retail/Retail-4.svg',
      link: '/Retail/Garment',
    },
    {
      title: 'POS Software',
      description: 'POS Billing Software to manage your entire retail operations. Manage your Retail Stores- sales, inventory, purchases, customers, and finances & more easily with Indian POS software. Create & Print Professional Invoices & enjoy uninterrupted GST Billing & Return Filing; integrate with Mobile Apps to increase your revenues.',
      image: './Retail/Retail-5.svg',
      link: '/Retail/POS',
    },
    {
      title: 'Jewellery Software',
      description: 'Elevate your jewellery business with our specialized software, designed to manage every aspect of your operations. From hallmark gold inventory and customer management to comprehensive accounting, loyalty schemes, and a mobile app, our solution empowers you to grow your revenue and deliver a premium experience.',
      image: './Retail/Retail-6.svg',
      link: '/Retail/jewellery',
    },
    {
      title: 'Restaurant Software',
      description: 'Efficiently manage your business- With Smart Restaurant Billing System, Complete Order Management, Inventory, Recipe Management, Kitchen Order Ticket System, Kitchen Display System, And Many Other Exciting Features.',
      image: './Retail/Retail-8.svg',
      link: '/Retail/Restaurant',
    },
  ];

  return (
    <div className="relative overflow-hidden pt-16 pb-32 space-y-28">
      {featuresData.map((feature, index) => (
        <div key={index} className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
              <div className="mt-6">
                <h2 className="text-3xl font-semibold tracking-tight">{feature.title}</h2>
                <p className="mt-4 text-base text-neutral-600">{feature.description}</p>
                <div className="mt-6">
                  <Link
                    className="inline-flex rounded-lg bg-black px-4 py-1.5 text-base font-semibold leading-7 text-white hover:bg-white hover:text-black border-2 border-black"
                    href= {feature.link}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 ">
              <img
                className="w-full h-[350px] object-fit-cover grayscale-[20%] border-2 rounded-lg "
                src={feature.image}
                alt={feature.title}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
import Link from 'next/link';
import React from 'react';

const ManufacturingFeaturesList = () => {
  const featuresData = [
    {
      title: 'ERP Software Solution',
      description: 'Transform your business with our ERP software solution. Streamline your business operations with our smart inventory management, accounting, and GST compliance, allowing you to easily generate invoices, manage your accounts, reconcile bank transactions, track inventory accurately, and file GST returns with ease.',
      image: 'Manufacture/Manufact-1.svg',
      link: '/Manufacturing/ErpSolution',
    },
    {
      title: 'Pharmacy Manufact Software',
      description: 'Simplify your pharma manufacturing operations with Indian Pharma Manufacturing software. Manage production, track inventory, control quality, and ensure compliance with ease.',
      image: '/Manufacture/Manufact-2.svg',
      link: '/Manufacturing/PharmaManufacture',
    },
    {
      title: ' Automobile Industry Software',
   description: 'Indian Erp is a GST-ready inventory & accounting software that helps you generate invoices easily,manage your accounts, reconcile bank transactions, track inventory accurately, generate 1000’s of reports & MIS, and file GST returns effortlessly',
      image: '/Manufacture/Manufact-3.svg',
      link: '/Manufacturing/AutomobileIndustry',
    },
    {
      title: 'Textile Software',
      description: 'Indian Textile Software to manage your entire Textile Manufacturing Business operations. Simplify your billing to delivery by overcoming common challenges in the Textile industry with Indian Textile Software. Stay updated, manage your textile manufacturing- production, quality, sales, inventory, purchases, customers, finances & more.',
      image: '/Manufacture/Manufact-4.svg',
      link: '/Manufacturing/Texttile',
    },
    {
      title: 'Industry Software',
      description: 'Simplify your GST compliance with our user-friendly software. Generate invoices, track payments, and file returns effortlessly, all in one platform.',
      image: '/Manufacture/Manufact-5.svg',
      link: '/Manufacturing/Indusrty',
    },
    {
      title: 'Food Software',
      description: 'Simplify your accounting with our user-friendly software. Track invoices, expenses, and inventory effortlessly, and gain valuable insights into your financial performance.',
      image: '/Manufacture/Manufact-6.svg',
      link: '/Manufacturing/Food',
    },
    {
        title: 'Bevrages & Drinks Software',
        description: 'Streamline your beverage and drinks manufacturing operations with our powerful GST software. Generate invoices, track inventory, manage orders, and file returns effortlessly, all in one platform.',
        image: '/Manufacture/Manufact-7.svg',
        link: '/Manufacturing/Bevrages&Drinks',
      },
  ];

  return (
    <div className="relative overflow-hidden pt-16 pb-32 space-y-28 ">
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
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <img
                className="w-full h-[350px] object-fit-cover  grayscale-[20%] border-2 rounded-lg "
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

export default ManufacturingFeaturesList;
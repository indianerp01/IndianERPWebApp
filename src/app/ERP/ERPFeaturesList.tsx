import Link from 'next/link';
import React from 'react';

const ERPFeaturesList = () => {
  const featuresData = [
    {
      title: 'Retail Chain Management',
      description: 'Simplify your retail operations and focus on what matters most: your customers. Our easy-to-use GST billing and filing software streamlines your processes, saving you time and money.',
      image: '/ERP/ERP-8.svg',
      link: '/ERP/RetailChain',
    },
    {
      title: 'Supply Chain Management',
      description: 'Streamline your supply chain operations with Indian ERP\'s user-friendly GST billing and filing software. Manage inventory, track orders, generate invoices effortlessly, and stay compliant with all GST regulations.',
      image: '/ERP/ERP-2.svg',
      link: '/ERP/SupplyChain',
    },
    {
      title: 'ERP Software Solution',
      description: 'Simplify Your Operations: Our ERP software streamlines your business processes. Enjoy easy invoice generation, account management, bank reconciliation, accurate inventory tracking, and effortless GST return filing.',
      image: '/ERP/ERP-10.svg',
      link: '/ERP/ERPSoft',
    },
    {
      title: 'Management Softwares',
      description: 'Boost your distribution efficiency and market share with our powerful DMS/ECOD solution. Manage multiple locations, track sales data, empower your field force, and optimize your accounting and inventory, all in one platform.',
      image: '/ERP/ERP-4.svg',
      link: '/ERP/ManagementSoftware',
    },
    {
      title: 'Pharma ERP Softwares',
      description: 'Simplify your pharma operations with our user-friendly ERP software. Say goodbye to complex spreadsheets and manual processes.',
      image: '/ERP/ERP-3.jpg',
      link: '/ERP/PharmaERP',
    },
    {
      title: 'Hotel ERP Software',
      description: 'Optimize your hotel operations and boost guest satisfaction with our comprehensive ERP software. Manage reservations, inventory, finances, staff, and more with ease, all in one platform.',
      image: '/ERP/ERP-6.svg',
      link: '/ERP/HotelERP',
    },
    {
      title: 'Inventory Management',
      description: 'Take control of your inventory with our powerful management system. Track stock levels, optimize ordering, and minimize waste, all while gaining valuable insights into your inventory performance.',
      image: '/ERP/ERP-7.svg',
      link: '/ERP/InventoryManagement',
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
                    href={feature.link}
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

export default ERPFeaturesList;
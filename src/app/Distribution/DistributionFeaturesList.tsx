import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturesList = () => {
  const featuresData = [
    {
      title: 'Pharma Distribution Softwares',
      description: 'Stop losing money to expired stock and streamline your business operations with our comprehensive stock management solution. Designed specifically for C&Fs, wholesalers, and distributors, our platform helps you manage inventory, automate accounting, simplify GST compliance, and boost sales through efficient shipping and delivery.',
      image: '/Dist/Dist-1.svg',
      link: '/Distribution/Pharma',
    },
    {
      title: 'FMCG Software',
      description: 'Manage your FMCG and packaged food distribution with FMCG software solutions for wholesale distribution, chain management order processing, inventory management, and accounting along with mobile apps to automate the processes',
      image: './Retail/Retail-2.svg',
      link: '/Distribution/FMCG',
    },
    {
      title: 'Wholesale Distribution  Software',
   description: 'Streamline your wholesale distribution business with Indian ERP\'s powerful GST billing and filing software. Manage inventory, track orders, generate invoices effortlessly, and stay compliant with all GST regulations.',
      image: '/Dist/Dist-3.svg',
      link: '/Distribution/WholesaleDistribution',
    },
    {
      title: 'Automobile Software',
      description: 'Indian ERP is a GST-ready inventory & accounting software that lets generate invoices easily, manage your debtors, finance, reconcile bank transactions, track batch wise inventory in very smart manner, generate 1000’s of reports & MIS, and file GST returns effortlessly.',
      image: '/Dist/Dist-4.svg',
      link: '/Distribution/AutoMobile',
    },
    {
      title: 'Supply Chain Management',
      description: 'Indian ERP makes supply chain management a breeze with its user-friendly GST billing and filing software. Simplify your operations, streamline your processes, and gain valuable insights to boost your business.',
      image: '/Dist/Dist-5.svg',
      link: '/Distribution/SupplyChain',
    },
    {
      title: 'Accounting Software',
      description: 'Simplify your accounting with our user-friendly software. Track invoices, expenses, and inventory effortlessly, and gain valuable insights into your financial performance.',
      image: '/Dist/Dist-7.svg',
      link: '/Distribution/Accounting',
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
              <Image
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

export default FeaturesList;
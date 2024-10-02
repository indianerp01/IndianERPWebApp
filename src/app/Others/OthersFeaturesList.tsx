import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OthersFeaturesList = () => {
  const featuresData = [
    {
      title: 'ECOD Secure',
      description: 'ECOD is a solution that will make your data sharing easy, secure, and error-free. Your server and distributor’s computer will be connected for exchanging data which will end the dependency on third parties.',
      image: '/Others/Others-1.svg',
      link: '/Others/ECOD',
    },
    {
      title: 'Payroll Software',
      description: 'Effortless payroll management made easy. Our software automates calculations, tracks time and attendance, and provides accurate paychecks, all in one platform.',
      image: '/Others/Others-2.svg',
      link: '/Others/Payroll',
    },
    {
      title: 'Billing Software',
   description: 'Get the best billing software for your small business, without the hassle of extra costs. Our software includes free GST features, helping you save money and stay compliant.',
      image: '/Others/Others-3.svg',
      link: '/Others/Billing',
    },
    {
      title: 'GST Softwares',
      description: 'Our GST software is packed with features to streamline your business. Generate invoices with pre-defined product templates, track inventory levels, and file returns with just a few clicks.',
      image: '/Others/Others-4.svg',
      link: '/Others/GST',
    },
    {
        title: 'Invoice Software',
        description: 'Our invoice software automates the process of creating GST-compliant invoices. Enjoy streamlined workflows, accurate calculations, and effortless tracking, saving you time and money.',
        image: '/Others/Others-5.svg',
        link: '/Others/Invoice',
      },
    {
      title: 'Web-App Softwares',
      description: 'Experience the power of web-app software. Our solutions offer seamless integration, customization, and scalability to meet the evolving needs of your business.',
      image: '/Others/Others-6.svg',
      link: '/Others/WebApp',
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

export default OthersFeaturesList;
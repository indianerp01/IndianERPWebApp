import React from "react";


interface SoftwareProps {
icon: React.ReactNode; 
  title: string;
  heading: string;
  imageUrl: string;
}

const Software: React.FC<SoftwareProps> = () => {
  const features = [
    { 
      icon: (
        <svg
          className="h-5 w-5 text-teal-400 dark:text-teal-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      heading: "Dedicated customer support",
    },
  ];

  return (
    <div className="p-4 lg:p-20 h-screen dark:bg-gray-800 ">
      <div
        className="max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none lg:flex my-10 shadow-teal border-2"
        style={{ backgroundColor: "white" }}
      >
        <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
          <h3 className="text-2xl text-left leading-8 font-bold sm:text-3xl sm:leading-9 ">
            Retail Software
          </h3>
          <p className="mt-6 text-left leading-8 text-lg">
            Place direct orders to Suppliers/Distributors Online with eRetail
            Order & Payment App Check & manage Stock, Schemes, Shortage,
            Credits, Online Payments & more
          </p>
          <div className="mt-8">
            <div className="flex items-center">
              <h4
                className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-teal-600 dark:text-teal-300 dark:bg-transparent"
                style={{ color: "teal" }}
              >
                What included
              </h4>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <ul className="pl-0 mt-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 space-y-5 lg:space-y-0">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <p
                    className="ml-3 text-lg leading-5 text-gray-700 font-ttnorms text-left"
                    style={{ color: "gray" }}
                  >
                    {feature.heading}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 dark:bg-gray-900"
          style={{ backgroundColor: "lightgray" }}
        >
          <div className="lg:mt-6">
            <div className="rounded-md shadow">
              <img
                className="w-[350px] h-[300px]"
                src="https://1.bp.blogspot.com/-2epyQbrpDzo/X-xv81ntz_I/AAAAAAAAADA/74ML6VLUte8vXgk9w16xs5izDXqpMpycgCLcBGAsYHQ/s840/retailcrm.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
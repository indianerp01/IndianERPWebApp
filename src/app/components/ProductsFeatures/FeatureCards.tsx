import React from "react";

const FeatureCards = ({ feature }: { feature: any }) => {
  return (
    <div className="relative overflow-hidden bg-white shadow-md border rounded-xl h-full">
      <div className="relative p-9 text-5xl">
        <div className="flex justify-center text-6xl ">{feature.icon}</div>
        <h3 className="mt-6 text-xl sm:mt-5 text-center">{feature.title}</h3>
        <p className="mt-6 text-base text-center text-gray-500">
          {feature.description}
        </p>
      </div>
    </div>
  );
};
export default FeatureCards;

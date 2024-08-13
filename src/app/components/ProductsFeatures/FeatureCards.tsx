import React from 'react'

 const FeatureCards  = ({feature}:{feature:any}) => {
  return (
    <div className="relative overflow-hidden bg-white shadow-md border rounded-xl h-full">
        <div className="absolute -inset-1">
            <div className="w-full h-full rotate-180 opacity-30 blur-lg filter"></div>
        </div>
        <div className="relative p-9 text-5xl ">
            {feature.icon}
            <h3 className="mt-6 text-2xl sm:mt-10">{feature.title}</h3>
            <p className="mt-6 text-base">{feature.description}</p>
        </div>
    </div>
  )
}
export default FeatureCards;

import React from 'react';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => {
  return (
    <div className="p-3 lg:w-1/5 md:w-1/4 sm:w-1/3 border rounded-lg m-2 hover:shadow-md transform transition duration-300 hover:scale-105">
      <div className="px-4 py-6">
        <div className="flex justify-center">{icon}</div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      </div>
    </div>
  );
};

export default FeatureItem;
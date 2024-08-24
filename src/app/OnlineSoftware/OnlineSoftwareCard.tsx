//Retail software
export const RetailSoftware = () => {
  const categories = [
    { icon: "💊", label: "Pharmacy Software" },
    { icon: "💍", label: "jewellery Software" },
    { icon: "💻", label: "POS" },
    { icon: "🛒", label: "Supermarket Software" },
    { icon: "👚", label: "Garments Software" },
    { icon: "🍔", label: "Foodstuff Software" },
    { icon: "🛍️", label: "Specialized Retail Software" },
    { icon: "🏨", label: "Restaurant Software" },
  ];

  return (
    <div className="container mx-auto p-4  ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8  ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  border rounded-lg hover:shadow-lg"
          >
            <div className="text-5xl mb-2 ">{category.icon}</div>
            <div className="text-center text-lg">{category.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Distributor Software
export const DistributorSoftware = () => {
  const categories = [
      { icon: "💼", label: "Wholesale Distribution Software " },
      { icon: "🍾", label: "FMCG Software" },
      { icon: "💊", label: "Pharmacy Software" },
    { icon: "🔗", label: "Supply Chain Management Software" },
    { icon: "🚘", label: "Automobile Software" },
    { icon: "🗺️", label: "Muti-location Software" },
  ];

  return (
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8  ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  border rounded-lg hover:shadow-lg"
          >
            <div className="text-5xl mb-2 ">{category.icon}</div>
            <div className="text-center text-lg">{category.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Manufacturing Software
export const ManufacturingSoftware = () => {
  const categories = [
    { icon: "🧵", label: "Textile Software" },
    { icon: "🏭", label: "Industry Software" },
    { icon: "🚗", label: "Automobile Industry Software" },
    { icon: "🏥", label: "Pharmaceutical Manufacturing Software" },
    { icon: "⚕️", label: " Medical Solution Software" },
    { icon: "🏪", label: "Food & Beverage Industry Software" },
  ];

  return (
    <div className="container mx-auto p-4  ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8  ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  border rounded-lg hover:shadow-lg"
          >
            <div className="text-5xl mb-2 ">{category.icon}</div>
            <div className="text-center text-lg">{category.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ERP Corporate Solutions

export const ERPCorporateSolutions = () => {
  const categories = [
    { icon: "🏦", label: "Retail Chain Software" },
    { icon: "🌐", label: "Supply Chain ERP Software" },
    { icon: "👥", label: "ERP Solution Software" },
    { icon: "💉", label: "Pharma ERP Software" },
    { icon: "📦", label: "Manufacturing Management Software" },
  
  ];

  return (
    <div className="container mx-auto p-4  ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8  ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  border rounded-lg hover:shadow-lg"
          >
            <div className="text-5xl mb-2 ">{category.icon}</div>
            <div className="text-center text-lg">{category.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

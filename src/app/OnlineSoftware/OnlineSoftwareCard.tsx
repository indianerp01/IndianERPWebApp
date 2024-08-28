//Retail software
export const RetailSoftware = () => {
  const categories = [
    { icon: "💊", label: "Pharmacy Software", description: "Manage prescriptions, inventory, and customer records." },
    { icon: "💍", label: "Jewellery Software", description: "Track inventory, sales, and customer preferences." },
    { icon: "💻", label: "POS", description: "Point-of-sale system for efficient checkout and inventory management." },
    { icon: "🛒", label: "Supermarket Software", description: "Manage stock, sales, and customer loyalty programs." },
    { icon: "👚", label: "Garments Software", description: "Inventory management, size and style tracking, and sales analysis." },
    { icon: "🍔", label: "Foodstuff Software", description: "Manage menus, ingredients, inventory, and orders." },
    { icon: "🛍️", label: "Specialized Retail Software", description: "Tailored solutions for specific retail industries (e.g., pet stores, bookstores)." },
    { icon: "🏨", label: "Restaurant Software", description: "Manage reservations, orders, inventory, and staff scheduling." },
  ]

  return (
    <div className="container mx-auto p-4  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8  ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  border rounded-lg hover:shadow-lg"
          >
            <div className="text-6xl mb-3 ">{category.icon}</div>
            <div className="text-center text-xl text-semibold">{category.label}</div>
            <div className="text-center text-sm py-2 text-gray-700 ">{ category.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Distributor Software
export const DistributorSoftware = () => {
  const categories = [
    { icon: "💼", label: "Wholesale Distribution Software", description: "Track inventory, manage orders, and optimize logistics." },
    { icon: "🍾", label: "FMCG Software", description: "Specialized for fast-moving consumer goods distribution." },
    { icon: "💊", label: "Pharmacy Software", description: "Manage inventory, prescriptions, and customer records." },
    { icon: "🔗", label: "Supply Chain Management Software", description: "Track products from origin to delivery, manage inventory, and optimize logistics." },
    { icon: "🚘", label: "Automobile Software", description: "Manage inventory, sales, and service for automotive dealerships." },
    { icon: "🗺️", label: "Multi-location Software", description: "Manage operations across multiple locations with inventory synchronization and data consolidation." },
  ]

  return (
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8  ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  border rounded-lg hover:shadow-lg"
          >
            <div className="text-6xl mb-3 ">{category.icon}</div>
            <div className="text-center text-xl text-semibold ">{category.label}</div>
            <div className="text-center text-sm py-2 text-gray-700">{ category.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Manufacturing Software
export const ManufacturingSoftware = () => {
  const categories = [
    { icon: "🧵", label: "Textile Software", description: "Manage production processes, inventory, and quality control." },
    { icon: "🏭", label: "Industry Software", description: "Automate manufacturing processes, track production metrics, and manage inventory." },
    { icon: "🚗", label: "Automobile Industry Software", description: "Manage production processes, inventory, and quality control for automotive manufacturing." },
    { icon: "🏥", label: "Pharmaceutical Manufacturing Software", description: "Manage production processes, quality control, and regulatory compliance." },
    { icon: "⚕️", label: "Medical Solution Software", description: "Manage medical device production, inventory, and quality control." },
    { icon: "🏪", label: "Food & Beverage Industry Software", description: "Manage production processes, recipe management, and food safety compliance." },
  ]

  return (
    <div className="container mx-auto p-4  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8  ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  border rounded-lg hover:shadow-lg"
          >
            <div className="text-6xl mb-3 ">{category.icon}</div>
            <div className="text-center text-xl text-semibold">{category.label}</div>
            <div className="text-center text-sm py-2 text-gray-700">{ category.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ERP Corporate Solutions

export const ERPCorporateSolutions = () => {
  const categories =[
    { icon: "🏦", label: "Retail Chain Software", description: "Manage multiple retail locations, inventory, and customer relationships." },
    { icon: "🌐", label: "Supply Chain ERP Software", description: "Manage the entire supply chain from procurement to delivery." },
    { icon: "👥", label: "ERP Solution Software", description: "Comprehensive business management system for financials, inventory, and operations." },
    { icon: "💉", label: "Pharma ERP Software", description: "Manage pharmaceutical operations, inventory, and regulatory compliance." },
    { icon: "📦", label: "Manufacturing Management Software", description: "Manage production processes, inventory, and quality control." },
  ]

  return (
    <div className="container mx-auto p-4  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8  ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  border rounded-lg hover:shadow-lg "
          >
             <div className="text-6xl mb-3 ">{category.icon}</div>
            <div className="text-center text-xl text-semibold">{category.label}</div>
            <div className="text-center text-sm py-2 text-gray-700">{ category.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

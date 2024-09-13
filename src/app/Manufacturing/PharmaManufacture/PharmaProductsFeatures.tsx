import FeatureCards from "@/app/components/ProductsFeatures/FeatureCards"

import { FaBarcode } from "react-icons/fa";


import { Icon } from '@iconify/react';

const ProductsFeatures = () => {

    const features = [
        {
            title: "Production Planning",
            description:
                "Production planning organizes and optimizes the manufacturing process to ensure efficient production and timely delivery.",
            icon: <Icon icon="logos:producthunt" />,
        },
        {
            title: "Quality Control",
            description:
                "Quality control (QC) ensures products meet specified quality standards through systematic testing and corrective actions.",
            icon: <Icon icon="ic:outline-control-camera"  style={{color: "#ee2f2f"}} />,
        },
        {
            title: "Inventory Management",
            description:
                "Inventory management is the process of ordering, storing, using, and selling a company’s inventory, including raw materials, components, and finished products.",
            icon:  <Icon icon="fa6-solid:warehouse"  style={{color: "#9370db"}} />,
        },
        {
            title: "Material Management",
            description:
                "Material management is the process of planning, organizing, and controlling the flow of materials from procurement to production and ultimately to delivery to customers.",
            icon: <Icon icon="lets-icons:materials-light"  style={{color: "#ba55d3"}} />,
        },
        {
            title: "Finance and Accounting",
            description:
                "Finance and accounting are the systems that manage an organization's money, including planning, recording, analyzing, and reporting on financial transactions.",
            icon: <Icon icon="material-symbols:finance"  style={{color: "#da70d6"}} />,
        },
        {
            title: "Sales & Procurement",
            description:
                "Sales & Procurement are the two sides of the business coin: sales focuses on generating revenue by selling products or services.",
            icon: <Icon icon="emojione:dress" />
            ,
        },
        {
            title: "Purchase Management",
            description:
                "Purchase management is the process of planning, sourcing, negotiating, and acquiring goods and services for an organization, ensuring the best value for money and meeting operational needs.",
            icon: <Icon icon="f7:purchased-circle-fill"  style={{color: "#00bfff"}} />
            ,
        },
        {
            title: "Reporting",
            description:
                "Reporting is the process of collecting, analyzing, and presenting data in a structured format to inform decision-making, track progress, and communicate insights.",
            icon: <Icon icon="mdi:file-report"  style={{color: "#ddb345"}} />
            ,
        },
    ];

    return (
        <section className="py-12 m:py-12 lg:py-16  ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-[42px] font-bold text-center mb-3">
                     Best ERP Process Manufacturing Software
                    </h2>
                </div>
                <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                    {features.map((feature, index) => (
                        <FeatureCards key={index} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};



export default ProductsFeatures;

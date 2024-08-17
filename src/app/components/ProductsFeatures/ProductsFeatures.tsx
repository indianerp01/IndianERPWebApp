import { TbFileInvoice } from "react-icons/tb";
import FeatureCards from "../ProductsFeatures/FeatureCards"
const ProductsFeatures = () => {

    const features = [
        {
            title: "100% Free E-invoicing",
            description:
                "Get 100% Free E-invoicing and easily generate error-free e- invoices without going to the portal with zero downtime using IndianERP",
            icon: <TbFileInvoice />,
        },
        {
            title: "100% Free E-invoicing",
            description:
                "Get 100% Free E-invoicing and easily generate error-free e- invoices without going to the portal with zero downtime using IndianERP",
            icon: <TbFileInvoice />,
        },
        {
            title: "100% Free E-invoicing",
            description:
                "Get 100% Free E-invoicing and easily generate error-free e- invoices without going to the portal with zero downtime using IndianERP",
            icon: <TbFileInvoice />,
        },
        {
            title: "100% Free E-invoicing",
            description:
                "Get 100% Free E-invoicing and easily generate error-free e- invoices without going to the portal with zero downtime using IndianERP",
            icon: <TbFileInvoice />,
        },
        {
            title: "100% Free E-invoicing",
            description:
                "Get 100% Free E-invoicing and easily generate error-free e- invoices without going to the portal with zero downtime using IndianERP",
            icon: <TbFileInvoice />,
        },
        {
            title: "100% Free E-invoicing",
            description:
                "Get 100% Free E-invoicing and easily generate error-free e- invoices without going to the portal with zero downtime using IndianERP",
            icon: <TbFileInvoice />,
        },
    ];

    return (
        <section className="py-12 m:py-12 lg:py-16  ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-2xl font-bold leading-tight sm:text-4xl xl:text-5xl mb-6">
                        Find Better Solutions Build Better Products
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

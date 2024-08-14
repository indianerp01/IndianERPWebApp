import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { BiMessageSquareMinus } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { BsPersonLinesFill, BsDatabaseCheck } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";


interface Feature {
    icon: JSX.Element;
    title: string;
    description: string;
}

const PharmacySection = () => {
    const features: Feature[] = [
        {
            icon: <FaWhatsapp />,
            title: 'Send Invoices on WhatsApp',
            description:
                'Send invoices directly to your customers on WhatsApp. Boost and streamline your business operations with Indian ERP. Reduce paper usage & printing costs.',
        },
        {
            icon: <BiMessageSquareMinus />,
            title: 'Auto-Prescription Reminder',
            description:
                'Directly send auto-prescription reminders to customers on WhatsApp & ensure that the medicines are delivered on time resulting in building a strong relationship with them.',
        },
        {
            icon: <FaRegHandshake />,
            title: 'Promise Order',
            description:
                'Track unavailable medicines during billing, offer back-orders with estimated restock dates, and send automatic SMS notifications when items are back in stock.',
        },
        {
            icon: <BsPersonLinesFill />,
            title: 'ERP-to-ERP Online Order',
            description:
                'Place online orders directly from your ERP to distributor ERPs, track stock levels in real-time, and easily compare deals from multiple suppliers.',
        },
        {
            icon: <BsDatabaseCheck />,
            title: 'Data Entry Free Software',
            description:
                'Place online orders directly from your ERP to distributor ERPs, track stock levels in real-time, and easily compare deals from multiple suppliers.',
        },
        {
            icon: <RiComputerLine />,
            title: 'Digital Salesman (Flip)',
            description:
                'Indian ERP streamlines billing with barcode-wise invoicing and an "All Scan App" that allows scanning batch numbers for barcode-free items.',
        },
    ];

    return (
        <div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h1 className="font-heading mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Why we are the best pharmacy retail software in India?
                        </h1>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 p-7">
                            {features.map((feature) => (
                                <div key={feature.title} className="relative border rounded-md p-5">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-6xl "
                                        >
                                            {feature.icon}
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                                            {feature.title}
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base ">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PharmacySection;
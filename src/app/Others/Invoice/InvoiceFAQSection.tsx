import FAQItem from "@/app/components/FAQSection/FAQItem";
import { InvoiceData } from "@/app/components/FAQSection/FaqData";

const InvoiceFAQSection = () => {
    return (
        <section className=" py-16 m-10">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-[42px] font-bold text-center text-gray-800">
                    Frequently Asked Questions
                </h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <FAQItem question={InvoiceData[0].question} answer={InvoiceData[0].answer} />
                    <FAQItem question={InvoiceData[1].question} answer={InvoiceData[1].answer} />
                    <FAQItem question={InvoiceData[2].question} answer={InvoiceData[2].answer} />
                    <FAQItem question={InvoiceData[3].question} answer={InvoiceData[3].answer} />
                    <FAQItem question={InvoiceData[4].question} answer={InvoiceData[4].answer} />
                </div>
            </div>
        </section>
    );
};

export default InvoiceFAQSection;

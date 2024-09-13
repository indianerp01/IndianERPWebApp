import FAQItem from "@/app/components/FAQSection/FAQItem";
import { E_InvoiceData } from "@/app/components/FAQSection/FaqData";

const E_InvoiceFAQSection = () => {
    return (
        <section className=" py-16 m-10">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-[42px] font-bold text-center text-gray-800">
                    Frequently Asked Questions
                </h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <FAQItem question={E_InvoiceData[0].question} answer={E_InvoiceData[0].answer} />
                    <FAQItem question={E_InvoiceData[1].question} answer={E_InvoiceData[1].answer} />
                    <FAQItem question={E_InvoiceData[2].question} answer={E_InvoiceData[2].answer} />
                    <FAQItem question={E_InvoiceData[3].question} answer={E_InvoiceData[3].answer} />
                    <FAQItem question={E_InvoiceData[4].question} answer={E_InvoiceData[4].answer} />
                </div>
            </div>
        </section>
    );
};

export default E_InvoiceFAQSection;

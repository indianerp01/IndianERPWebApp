import FAQItem from "@/app/components/FAQSection/FAQItem";
import { PayrollData } from "@/app/components/FAQSection/FaqData";

const PayrollFAQSection = () => {
    return (
        <section className=" py-16 m-10">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-[42px] font-bold text-center text-gray-800">
                    Frequently Asked Questions
                </h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <FAQItem question={PayrollData[0].question} answer={PayrollData[0].answer} />
                    <FAQItem question={PayrollData[1].question} answer={PayrollData[1].answer} />
                    <FAQItem question={PayrollData[2].question} answer={PayrollData[2].answer} />
                    <FAQItem question={PayrollData[3].question} answer={PayrollData[3].answer} />
                    <FAQItem question={PayrollData[4].question} answer={PayrollData[4].answer} />
                    <FAQItem question={PayrollData[5].question} answer={PayrollData[5].answer} />
                </div>
            </div>
        </section>
    );
};

export default PayrollFAQSection;

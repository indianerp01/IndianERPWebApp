import FAQItem from "@/app/components/FAQSection/FAQItem";
import { GSTData } from "@/app/components/FAQSection/FaqData";

const GSTFAQSection = () => {
    return (
        <section className=" py-16 m-10">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-[42px] font-bold text-center text-gray-800">
                    Frequently Asked Questions
                </h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <FAQItem question={GSTData[0].question} answer={GSTData[0].answer} />
                    <FAQItem question={GSTData[1].question} answer={GSTData[1].answer} />
                    <FAQItem question={GSTData[2].question} answer={GSTData[2].answer} />
                    <FAQItem question={GSTData[3].question} answer={GSTData[3].answer} />
                </div>
            </div>
        </section>
    );
};

export default GSTFAQSection;

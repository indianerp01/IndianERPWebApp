import FAQItem from "@/app/components/FAQSection/FAQItem";
import  {SuperMarketFAQData }  from "@/app/components/FAQSection/FaqData";

const SuperMarketFAQSection = () => {
  return (
    <section className="py-16 m-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-[42px] font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <FAQItem question={SuperMarketFAQData [0].question} answer={SuperMarketFAQData [0].answer} /> 
          <FAQItem question={SuperMarketFAQData [1].question} answer={SuperMarketFAQData [1].answer} /> 
          <FAQItem question={SuperMarketFAQData [2].question} answer={SuperMarketFAQData [2].answer} /> 
          <FAQItem question={SuperMarketFAQData [3].question} answer={SuperMarketFAQData [3].answer} /> 
          <FAQItem question={SuperMarketFAQData [4].question} answer={SuperMarketFAQData [4].answer} /> 
        </div>
      </div>
    </section>
  );
};

export default SuperMarketFAQSection;

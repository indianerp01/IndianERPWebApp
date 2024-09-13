import FAQItem from "@/app/components/FAQSection/FAQItem";
import  { FMCGFAQData }  from "@/app/components/FAQSection/FaqData";

const FMCGFAQSection = () => {
  return (
    <section className=" py-16 m-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-[42px] font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <FAQItem question={ FMCGFAQData [0].question} answer={ FMCGFAQData [0].answer} /> 
          <FAQItem question={ FMCGFAQData [1].question} answer={ FMCGFAQData [1].answer} /> 
          <FAQItem question={ FMCGFAQData [2].question} answer={ FMCGFAQData [2].answer} /> 
          <FAQItem question={ FMCGFAQData [3].question} answer={ FMCGFAQData [3].answer} /> 
          <FAQItem question={ FMCGFAQData [4].question} answer={ FMCGFAQData [4].answer} />
          <FAQItem question={ FMCGFAQData [5].question} answer={ FMCGFAQData [5].answer} />
          <FAQItem question={ FMCGFAQData [6].question} answer={ FMCGFAQData [6].answer} />
          <FAQItem question={ FMCGFAQData [7].question} answer={ FMCGFAQData [7].answer} />
        </div>
      </div>
    </section>
  );
};

export default FMCGFAQSection;

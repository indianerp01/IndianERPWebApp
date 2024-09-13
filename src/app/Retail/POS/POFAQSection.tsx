import FAQItem from "@/app/components/FAQSection/FAQItem";
import  { POSFAQData  }  from "@/app/components/FAQSection/FaqData";

const POFAQSection = () => {
  return (
    <section className=" py-16 m-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-[42px] font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <FAQItem question={ POSFAQData [0].question} answer={ POSFAQData [0].answer} /> 
          <FAQItem question={ POSFAQData [1].question} answer={ POSFAQData [1].answer} /> 
          <FAQItem question={ POSFAQData [2].question} answer={ POSFAQData [2].answer} /> 
          <FAQItem question={ POSFAQData [3].question} answer={ POSFAQData [3].answer} /> 
        </div>
      </div>
    </section>
  );
};

export default POFAQSection;

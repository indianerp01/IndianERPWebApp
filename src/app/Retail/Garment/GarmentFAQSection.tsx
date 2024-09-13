import FAQItem from "@/app/components/FAQSection/FAQItem";
import  { GarmentFAQData }  from "@/app/components/FAQSection/FaqData";

const GarmentFAQSection = () => {
  return (
    <section className=" py-16 m-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-[42px] font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <FAQItem question={ GarmentFAQData [0].question} answer={ GarmentFAQData [0].answer} /> 
          <FAQItem question={ GarmentFAQData [1].question} answer={ GarmentFAQData [1].answer} /> 
          <FAQItem question={ GarmentFAQData [2].question} answer={ GarmentFAQData [2].answer} /> 
          <FAQItem question={ GarmentFAQData [3].question} answer={ GarmentFAQData [3].answer} /> 
          <FAQItem question={ GarmentFAQData [4].question} answer={ GarmentFAQData [4].answer} /> 
          <FAQItem question={ GarmentFAQData [5].question} answer={ GarmentFAQData [5].answer} /> 
        </div>
      </div>
    </section>
  );
};

export default GarmentFAQSection;

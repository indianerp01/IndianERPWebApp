import FAQItem from "@/app/components/FAQSection/FAQItem";
import  { ErpSolutionData }  from "@/app/components/FAQSection/FaqData";

const ErpSolutionFAQSection = () => {
  return (
    <section className=" py-16 m-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-[42px] font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <FAQItem question={ ErpSolutionData [0].question} answer={ ErpSolutionData [0].answer} /> 
          <FAQItem question={ ErpSolutionData [1].question} answer={ ErpSolutionData [1].answer} /> 
          <FAQItem question={ ErpSolutionData [2].question} answer={ ErpSolutionData [2].answer} /> 
          <FAQItem question={ ErpSolutionData [3].question} answer={ ErpSolutionData [3].answer} /> 
        </div>
      </div>
    </section>
  );
};

export default ErpSolutionFAQSection;

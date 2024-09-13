import FAQItem from "@/app/components/FAQSection/FAQItem";
import  { RestaurantFAQData }  from "@/app/components/FAQSection/FaqData";

const RestaurantFAQSection = () => {
  return (
    <section className=" py-16 m-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-[42px] font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <FAQItem question={ RestaurantFAQData [0].question} answer={ RestaurantFAQData [0].answer} /> 
          <FAQItem question={ RestaurantFAQData [1].question} answer={ RestaurantFAQData [1].answer} /> 
          <FAQItem question={ RestaurantFAQData [2].question} answer={ RestaurantFAQData [2].answer} /> 
          <FAQItem question={ RestaurantFAQData [3].question} answer={ RestaurantFAQData [3].answer} /> 
          <FAQItem question={ RestaurantFAQData [4].question} answer={ RestaurantFAQData [4].answer} />
        </div>
      </div>
    </section>
  );
};

export default RestaurantFAQSection;

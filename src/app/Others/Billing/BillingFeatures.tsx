import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  BillingData } from "@/app/components/FeaturesGlance/featuresData";

const BillingFeatures  = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ BillingData[0].icon}
            title={ BillingData[0].title}
          />
          <FeatureItem
            icon={ BillingData[1].icon}
            title={ BillingData[1].title}
          />
          <FeatureItem
            icon={ BillingData[2].icon}
            title={ BillingData[2].title}
          />
          <FeatureItem
            icon={ BillingData[3].icon}
            title={ BillingData[3].title}
          />
          <FeatureItem
            icon={ BillingData[4].icon}
            title={ BillingData[4].title}
          />
          <FeatureItem
            icon={ BillingData[5].icon}
            title={ BillingData[5].title}
          />
          <FeatureItem
            icon={ BillingData[6].icon}
            title={ BillingData[6].title}
          />
          <FeatureItem
            icon={ BillingData[7].icon}
            title={ BillingData[7].title}
          />
          <FeatureItem
            icon={ BillingData[8].icon}
            title={ BillingData[8].title}
          />
           <FeatureItem
            icon={ BillingData[9].icon}
            title={ BillingData[9].title}
          />
           <FeatureItem
            icon={ BillingData[10].icon}
            title={ BillingData[10].title}
          />
        </div>
      </div>
    </section>
  );
};

export default BillingFeatures ;

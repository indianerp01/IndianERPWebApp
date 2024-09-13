import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  RetailFeaturesData }from "@/app/components/FeaturesGlance/featuresData";

const RetailSoftwareFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ RetailFeaturesData[0].icon}
            title={ RetailFeaturesData[0].title}
          />
          <FeatureItem
            icon={ RetailFeaturesData[1].icon}
            title={ RetailFeaturesData[1].title}
          />
          <FeatureItem
            icon={ RetailFeaturesData[2].icon}
            title={ RetailFeaturesData[2].title}
          />
          <FeatureItem
            icon={ RetailFeaturesData[3].icon}
            title={ RetailFeaturesData[3].title}
          />
          <FeatureItem
            icon={ RetailFeaturesData[4].icon}
            title={ RetailFeaturesData[4].title}
          />
          <FeatureItem
            icon={ RetailFeaturesData[5].icon}
            title={ RetailFeaturesData[5].title}
          />
          <FeatureItem
            icon={ RetailFeaturesData[6].icon}
            title={ RetailFeaturesData[6].title}
          />
          <FeatureItem
            icon={ RetailFeaturesData[7].icon}
            title={ RetailFeaturesData[7].title}
          />
          <FeatureItem
            icon={ RetailFeaturesData[8].icon}
            title={ RetailFeaturesData[8].title}
          />
          <FeatureItem
            icon={ RetailFeaturesData[9].icon}
            title={ RetailFeaturesData[9].title}
          />
          <FeatureItem
            icon={ RetailFeaturesData[10].icon}
            title={ RetailFeaturesData[10].title}
          />
          <FeatureItem
            icon={ RetailFeaturesData[11].icon}
            title={ RetailFeaturesData[11].title}
          />
          
        </div>
      </div>
    </section>
  );
};

export default RetailSoftwareFeatures;

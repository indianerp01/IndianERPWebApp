import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  AutomobileIndustryData } from "@/app/components/FeaturesGlance/featuresData";

const AutomobileIndustryFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ AutomobileIndustryData[0].icon}
            title={ AutomobileIndustryData[0].title}
          />
          <FeatureItem
            icon={ AutomobileIndustryData[1].icon}
            title={ AutomobileIndustryData[1].title}
          />
          <FeatureItem
            icon={ AutomobileIndustryData[2].icon}
            title={ AutomobileIndustryData[2].title}
          />
          <FeatureItem
            icon={ AutomobileIndustryData[3].icon}
            title={ AutomobileIndustryData[3].title}
          />
          <FeatureItem
            icon={ AutomobileIndustryData[4].icon}
            title={ AutomobileIndustryData[4].title}
          />
          <FeatureItem
            icon={ AutomobileIndustryData[5].icon}
            title={ AutomobileIndustryData[5].title}
          />
          <FeatureItem
            icon={ AutomobileIndustryData[6].icon}
            title={ AutomobileIndustryData[6].title}
          />
          <FeatureItem
            icon={ AutomobileIndustryData[7].icon}
            title={ AutomobileIndustryData[7].title}
          />
          <FeatureItem
            icon={ AutomobileIndustryData[8].icon}
            title={ AutomobileIndustryData[8].title}
          />
        </div>
      </div>
    </section>
  );
};

export default AutomobileIndustryFeatures;

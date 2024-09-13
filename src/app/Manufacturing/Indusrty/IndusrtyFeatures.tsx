import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  IndusrtyFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const IndusrtyFeatures= () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ IndusrtyFeaturesData[0].icon}
            title={ IndusrtyFeaturesData[0].title}
          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[1].icon}
            title={ IndusrtyFeaturesData[1].title}
          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[2].icon}
            title={ IndusrtyFeaturesData[2].title}
          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[3].icon}
            title={ IndusrtyFeaturesData[3].title}
          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[4].icon}
            title={ IndusrtyFeaturesData[4].title}
          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[5].icon}
            title={ IndusrtyFeaturesData[5].title}
          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[6].icon}
            title={ IndusrtyFeaturesData[6].title}
          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[7].icon}
            title={ IndusrtyFeaturesData[7].title}
          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[8].icon}
            title={ IndusrtyFeaturesData[8].title}
          />
           <FeatureItem
            icon={ IndusrtyFeaturesData[9].icon}
            title={ IndusrtyFeaturesData[9].title}
          />
           <FeatureItem
            icon={ IndusrtyFeaturesData[10].icon}
            title={ IndusrtyFeaturesData[10].title}
          />
          <FeatureItem
            icon={ IndusrtyFeaturesData[11].icon}
            title={ IndusrtyFeaturesData[11].title}
          />
        </div>
      </div>
    </section>
  );
};

export default IndusrtyFeatures;

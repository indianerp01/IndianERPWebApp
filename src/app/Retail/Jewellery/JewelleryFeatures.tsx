import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  JewelleryFeaturesData }from "@/app/components/FeaturesGlance/featuresData";

const JewelleryFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ JewelleryFeaturesData[0].icon}
            title={ JewelleryFeaturesData[0].title}
          />
          <FeatureItem
            icon={ JewelleryFeaturesData[1].icon}
            title={ JewelleryFeaturesData[1].title}
          />
          <FeatureItem
            icon={ JewelleryFeaturesData[2].icon}
            title={ JewelleryFeaturesData[2].title}
          />
          <FeatureItem
            icon={ JewelleryFeaturesData[3].icon}
            title={ JewelleryFeaturesData[3].title}
          />
          <FeatureItem
            icon={ JewelleryFeaturesData[4].icon}
            title={ JewelleryFeaturesData[4].title}
          />
          <FeatureItem
            icon={ JewelleryFeaturesData[5].icon}
            title={ JewelleryFeaturesData[5].title}
          />
          <FeatureItem
            icon={ JewelleryFeaturesData[6].icon}
            title={ JewelleryFeaturesData[6].title}
          />
          <FeatureItem
            icon={ JewelleryFeaturesData[7].icon}
            title={ JewelleryFeaturesData[7].title}
          />
          <FeatureItem
            icon={ JewelleryFeaturesData[8].icon}
            title={ JewelleryFeaturesData[8].title}
          />
          <FeatureItem
            icon={ JewelleryFeaturesData[9].icon}
            title={ JewelleryFeaturesData[9].title}
          />
          <FeatureItem
            icon={ JewelleryFeaturesData[10].icon}
            title={ JewelleryFeaturesData[10].title}
          />
          <FeatureItem
            icon={ JewelleryFeaturesData[11].icon}
            title={ JewelleryFeaturesData[11].title}
          />
           <FeatureItem
            icon={ JewelleryFeaturesData[12].icon}
            title={ JewelleryFeaturesData[12].title}
          />
        </div>
      </div>
    </section>
  );
};

export default JewelleryFeatures;

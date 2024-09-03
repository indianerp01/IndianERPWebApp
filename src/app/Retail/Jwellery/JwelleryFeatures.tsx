import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  JwelleryFeaturesData }from "@/app/components/FeaturesGlance/featuresData";

const JwelleryFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ JwelleryFeaturesData[0].icon}
            title={ JwelleryFeaturesData[0].title}
          />
          <FeatureItem
            icon={ JwelleryFeaturesData[1].icon}
            title={ JwelleryFeaturesData[1].title}
          />
          <FeatureItem
            icon={ JwelleryFeaturesData[2].icon}
            title={ JwelleryFeaturesData[2].title}
          />
          <FeatureItem
            icon={ JwelleryFeaturesData[3].icon}
            title={ JwelleryFeaturesData[3].title}
          />
          <FeatureItem
            icon={ JwelleryFeaturesData[4].icon}
            title={ JwelleryFeaturesData[4].title}
          />
          <FeatureItem
            icon={ JwelleryFeaturesData[5].icon}
            title={ JwelleryFeaturesData[5].title}
          />
          <FeatureItem
            icon={ JwelleryFeaturesData[6].icon}
            title={ JwelleryFeaturesData[6].title}
          />
          <FeatureItem
            icon={ JwelleryFeaturesData[7].icon}
            title={ JwelleryFeaturesData[7].title}
          />
          <FeatureItem
            icon={ JwelleryFeaturesData[8].icon}
            title={ JwelleryFeaturesData[8].title}
          />
          <FeatureItem
            icon={ JwelleryFeaturesData[9].icon}
            title={ JwelleryFeaturesData[9].title}
          />
          <FeatureItem
            icon={ JwelleryFeaturesData[10].icon}
            title={ JwelleryFeaturesData[10].title}
          />
          <FeatureItem
            icon={ JwelleryFeaturesData[11].icon}
            title={ JwelleryFeaturesData[11].title}
          />
           <FeatureItem
            icon={ JwelleryFeaturesData[12].icon}
            title={ JwelleryFeaturesData[12].title}
          />
        </div>
      </div>
    </section>
  );
};

export default JwelleryFeatures;

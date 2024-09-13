import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  TexttileFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const TexttileFeatures= () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ TexttileFeaturesData[0].icon}
            title={ TexttileFeaturesData[0].title}
          />
          <FeatureItem
            icon={ TexttileFeaturesData[1].icon}
            title={ TexttileFeaturesData[1].title}
          />
          <FeatureItem
            icon={ TexttileFeaturesData[2].icon}
            title={ TexttileFeaturesData[2].title}
          />
          <FeatureItem
            icon={ TexttileFeaturesData[3].icon}
            title={ TexttileFeaturesData[3].title}
          />
          <FeatureItem
            icon={ TexttileFeaturesData[4].icon}
            title={ TexttileFeaturesData[4].title}
          />
          <FeatureItem
            icon={ TexttileFeaturesData[5].icon}
            title={ TexttileFeaturesData[5].title}
          />
          <FeatureItem
            icon={ TexttileFeaturesData[6].icon}
            title={ TexttileFeaturesData[6].title}
          />
          <FeatureItem
            icon={ TexttileFeaturesData[7].icon}
            title={ TexttileFeaturesData[7].title}
          />
          <FeatureItem
            icon={ TexttileFeaturesData[8].icon}
            title={ TexttileFeaturesData[8].title}
          />
           <FeatureItem
            icon={ TexttileFeaturesData[9].icon}
            title={ TexttileFeaturesData[9].title}
          />
           <FeatureItem
            icon={ TexttileFeaturesData[10].icon}
            title={ TexttileFeaturesData[10].title}
          />
        </div>
      </div>
    </section>
  );
};

export default TexttileFeatures;

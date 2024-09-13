import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  FoodFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const FoodFeatures= () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ FoodFeaturesData[0].icon}
            title={ FoodFeaturesData[0].title}
          />
          <FeatureItem
            icon={ FoodFeaturesData[1].icon}
            title={ FoodFeaturesData[1].title}
          />
          <FeatureItem
            icon={ FoodFeaturesData[2].icon}
            title={ FoodFeaturesData[2].title}
          />
          <FeatureItem
            icon={ FoodFeaturesData[3].icon}
            title={ FoodFeaturesData[3].title}
          />
          <FeatureItem
            icon={ FoodFeaturesData[4].icon}
            title={ FoodFeaturesData[4].title}
          />
          <FeatureItem
            icon={ FoodFeaturesData[5].icon}
            title={ FoodFeaturesData[5].title}
          />
          <FeatureItem
            icon={ FoodFeaturesData[6].icon}
            title={ FoodFeaturesData[6].title}
          />
          <FeatureItem
            icon={ FoodFeaturesData[7].icon}
            title={ FoodFeaturesData[7].title}
          />
          <FeatureItem
            icon={ FoodFeaturesData[8].icon}
            title={ FoodFeaturesData[8].title}
          />
           <FeatureItem
            icon={ FoodFeaturesData[9].icon}
            title={ FoodFeaturesData[9].title}
          />
           <FeatureItem
            icon={ FoodFeaturesData[10].icon}
            title={ FoodFeaturesData[10].title}
          />
        </div>
      </div>
    </section>
  );
};

export default FoodFeatures;

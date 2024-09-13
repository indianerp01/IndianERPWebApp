import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { RestaurantFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const RestaurantFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={RestaurantFeaturesData[0].icon}
            title={RestaurantFeaturesData[0].title}
          />
          <FeatureItem
            icon={RestaurantFeaturesData[1].icon}
            title={RestaurantFeaturesData[1].title}
          />
          <FeatureItem
            icon={RestaurantFeaturesData[2].icon}
            title={RestaurantFeaturesData[2].title}
          />
          <FeatureItem
            icon={RestaurantFeaturesData[3].icon}
            title={RestaurantFeaturesData[3].title}
          />
          <FeatureItem
            icon={RestaurantFeaturesData[4].icon}
            title={RestaurantFeaturesData[4].title}
          />
          <FeatureItem
            icon={RestaurantFeaturesData[5].icon}
            title={RestaurantFeaturesData[5].title}
          />
          <FeatureItem
            icon={RestaurantFeaturesData[6].icon}
            title={RestaurantFeaturesData[6].title}
          />
          <FeatureItem
            icon={RestaurantFeaturesData[7].icon}
            title={RestaurantFeaturesData[7].title}
          />
          <FeatureItem
            icon={RestaurantFeaturesData[8].icon}
            title={RestaurantFeaturesData[8].title}
          />
          <FeatureItem
            icon={RestaurantFeaturesData[9].icon}
            title={RestaurantFeaturesData[9].title}
          />
          <FeatureItem
            icon={RestaurantFeaturesData[10].icon}
            title={RestaurantFeaturesData[10].title}
          />
          <FeatureItem
            icon={RestaurantFeaturesData[11].icon}
            title={RestaurantFeaturesData[11].title}
          />
        </div>
      </div>
    </section>
  );
};

export default RestaurantFeatures;

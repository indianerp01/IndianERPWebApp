import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { GarmentFeaturesData} from "@/app/components/FeaturesGlance/featuresData";

const GarmentFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={GarmentFeaturesData[0].icon}
            title={GarmentFeaturesData[0].title}
          />
          <FeatureItem
            icon={GarmentFeaturesData[1].icon}
            title={GarmentFeaturesData[1].title}
          />
          <FeatureItem
            icon={GarmentFeaturesData[2].icon}
            title={GarmentFeaturesData[2].title}
          />
          <FeatureItem
            icon={GarmentFeaturesData[3].icon}
            title={GarmentFeaturesData[3].title}
          />
          <FeatureItem
            icon={GarmentFeaturesData[4].icon}
            title={GarmentFeaturesData[4].title}
          />
          <FeatureItem
            icon={GarmentFeaturesData[5].icon}
            title={GarmentFeaturesData[5].title}
          />
          <FeatureItem
            icon={GarmentFeaturesData[6].icon}
            title={GarmentFeaturesData[6].title}
          />
          <FeatureItem
            icon={GarmentFeaturesData[7].icon}
            title={GarmentFeaturesData[7].title}
          />
          <FeatureItem
            icon={GarmentFeaturesData[8].icon}
            title={GarmentFeaturesData[8].title}
          />
          <FeatureItem
            icon={GarmentFeaturesData[9].icon}
            title={GarmentFeaturesData[9].title}
          />
          <FeatureItem
            icon={GarmentFeaturesData[10].icon}
            title={GarmentFeaturesData[10].title}
          />
          <FeatureItem
            icon={GarmentFeaturesData[11].icon}
            title={GarmentFeaturesData[11].title}
          />
        
        </div>
      </div>
    </section>
  );
};

export default GarmentFeatures;

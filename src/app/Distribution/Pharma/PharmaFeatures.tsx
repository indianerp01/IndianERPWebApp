import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { PharmaFeaturesData} from "@/app/components/FeaturesGlance/featuresData";

const PharmaFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={PharmaFeaturesData[0].icon}
            title={PharmaFeaturesData[0].title}
          />
          <FeatureItem
            icon={PharmaFeaturesData[1].icon}
            title={PharmaFeaturesData[1].title}
          />
          <FeatureItem
            icon={PharmaFeaturesData[2].icon}
            title={PharmaFeaturesData[2].title}
          />
          <FeatureItem
            icon={PharmaFeaturesData[3].icon}
            title={PharmaFeaturesData[3].title}
          />
          <FeatureItem
            icon={PharmaFeaturesData[4].icon}
            title={PharmaFeaturesData[4].title}
          />
          <FeatureItem
            icon={PharmaFeaturesData[5].icon}
            title={PharmaFeaturesData[5].title}
          />
          <FeatureItem
            icon={PharmaFeaturesData[6].icon}
            title={PharmaFeaturesData[6].title}
          />
          <FeatureItem
            icon={PharmaFeaturesData[7].icon}
            title={PharmaFeaturesData[7].title}
          />
          <FeatureItem
            icon={PharmaFeaturesData[8].icon}
            title={PharmaFeaturesData[8].title}
          />
          <FeatureItem
            icon={PharmaFeaturesData[9].icon}
            title={PharmaFeaturesData[9].title}
          />
          <FeatureItem
            icon={PharmaFeaturesData[10].icon}
            title={PharmaFeaturesData[10].title}
          />
          <FeatureItem
            icon={PharmaFeaturesData[11].icon}
            title={PharmaFeaturesData[11].title}
          />
            <FeatureItem
            icon={PharmaFeaturesData[12].icon}
            title={PharmaFeaturesData[12].title}
          />
           <FeatureItem
            icon={PharmaFeaturesData[13].icon}
            title={PharmaFeaturesData[13].title}
          />
           <FeatureItem
            icon={PharmaFeaturesData[14].icon}
            title={PharmaFeaturesData[14].title}
          />
        
        </div>
      </div>
    </section>
  );
};

export default PharmaFeatures;

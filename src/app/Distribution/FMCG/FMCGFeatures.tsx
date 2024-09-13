import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { FMCGFeaturesData} from "@/app/components/FeaturesGlance/featuresData";

const FMCGFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={FMCGFeaturesData[0].icon}
            title={FMCGFeaturesData[0].title}
          />
          <FeatureItem
            icon={FMCGFeaturesData[1].icon}
            title={FMCGFeaturesData[1].title}
          />
          <FeatureItem
            icon={FMCGFeaturesData[2].icon}
            title={FMCGFeaturesData[2].title}
          />
          <FeatureItem
            icon={FMCGFeaturesData[3].icon}
            title={FMCGFeaturesData[3].title}
          />
          <FeatureItem
            icon={FMCGFeaturesData[4].icon}
            title={FMCGFeaturesData[4].title}
          />
          <FeatureItem
            icon={FMCGFeaturesData[5].icon}
            title={FMCGFeaturesData[5].title}
          />
          <FeatureItem
            icon={FMCGFeaturesData[6].icon}
            title={FMCGFeaturesData[6].title}
          />
          <FeatureItem
            icon={FMCGFeaturesData[7].icon}
            title={FMCGFeaturesData[7].title}
          />
          <FeatureItem
            icon={FMCGFeaturesData[8].icon}
            title={FMCGFeaturesData[8].title}
          />
          <FeatureItem
            icon={FMCGFeaturesData[9].icon}
            title={FMCGFeaturesData[9].title}
          />
          <FeatureItem
            icon={FMCGFeaturesData[10].icon}
            title={FMCGFeaturesData[10].title}
          />
          <FeatureItem
            icon={FMCGFeaturesData[11].icon}
            title={FMCGFeaturesData[11].title}
          />
            <FeatureItem
            icon={FMCGFeaturesData[12].icon}
            title={FMCGFeaturesData[12].title}
          />
           <FeatureItem
            icon={FMCGFeaturesData[13].icon}
            title={FMCGFeaturesData[13].title}
          />
           <FeatureItem
            icon={FMCGFeaturesData[14].icon}
            title={FMCGFeaturesData[14].title}
          />
           <FeatureItem
            icon={FMCGFeaturesData[15].icon}
            title={FMCGFeaturesData[15].title}
          />
           <FeatureItem
            icon={FMCGFeaturesData[16].icon}
            title={FMCGFeaturesData[16].title}
          />
           <FeatureItem
            icon={FMCGFeaturesData[17].icon}
            title={FMCGFeaturesData[17].title}
          />
        
        </div>
      </div>
    </section>
  );
};

export default FMCGFeatures;

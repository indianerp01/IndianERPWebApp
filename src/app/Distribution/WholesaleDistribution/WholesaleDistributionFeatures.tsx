import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { WholesaleDistributionFeaturesData} from "@/app/components/FeaturesGlance/featuresData";

const WholesaleDistributionFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[0].icon}
            title={WholesaleDistributionFeaturesData[0].title}
          />
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[1].icon}
            title={WholesaleDistributionFeaturesData[1].title}
          />
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[2].icon}
            title={WholesaleDistributionFeaturesData[2].title}
          />
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[3].icon}
            title={WholesaleDistributionFeaturesData[3].title}
          />
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[4].icon}
            title={WholesaleDistributionFeaturesData[4].title}
          />
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[5].icon}
            title={WholesaleDistributionFeaturesData[5].title}
          />
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[6].icon}
            title={WholesaleDistributionFeaturesData[6].title}
          />
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[7].icon}
            title={WholesaleDistributionFeaturesData[7].title}
          />
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[8].icon}
            title={WholesaleDistributionFeaturesData[8].title}
          />
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[9].icon}
            title={WholesaleDistributionFeaturesData[9].title}
          />
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[10].icon}
            title={WholesaleDistributionFeaturesData[10].title}
          />
          <FeatureItem
            icon={WholesaleDistributionFeaturesData[11].icon}
            title={WholesaleDistributionFeaturesData[11].title}
          />
            <FeatureItem
            icon={WholesaleDistributionFeaturesData[12].icon}
            title={WholesaleDistributionFeaturesData[12].title}
          />
           <FeatureItem
            icon={WholesaleDistributionFeaturesData[13].icon}
            title={WholesaleDistributionFeaturesData[13].title}
          />
           <FeatureItem
            icon={WholesaleDistributionFeaturesData[14].icon}
            title={WholesaleDistributionFeaturesData[14].title}
          />
           <FeatureItem
            icon={WholesaleDistributionFeaturesData[15].icon}
            title={WholesaleDistributionFeaturesData[15].title}
          />
           <FeatureItem
            icon={WholesaleDistributionFeaturesData[16].icon}
            title={WholesaleDistributionFeaturesData[16].title}
          />
           <FeatureItem
            icon={WholesaleDistributionFeaturesData[17].icon}
            title={WholesaleDistributionFeaturesData[17].title}
          />
        
        </div>
      </div>
    </section>
  );
};

export default  WholesaleDistributionFeatures;

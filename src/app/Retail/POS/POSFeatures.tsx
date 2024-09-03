import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { POSFeaturesData }from "@/app/components/FeaturesGlance/featuresData";

const POSFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={POSFeaturesData[0].icon}
            title={POSFeaturesData[0].title}
          />
          <FeatureItem
            icon={POSFeaturesData[1].icon}
            title={POSFeaturesData[1].title}
          />
          <FeatureItem
            icon={POSFeaturesData[2].icon}
            title={POSFeaturesData[2].title}
          />
          <FeatureItem
            icon={POSFeaturesData[3].icon}
            title={POSFeaturesData[3].title}
          />
          <FeatureItem
            icon={POSFeaturesData[4].icon}
            title={POSFeaturesData[4].title}
          />
          <FeatureItem
            icon={POSFeaturesData[5].icon}
            title={POSFeaturesData[5].title}
          />
          <FeatureItem
            icon={POSFeaturesData[6].icon}
            title={POSFeaturesData[6].title}
          />
          <FeatureItem
            icon={POSFeaturesData[7].icon}
            title={POSFeaturesData[7].title}
          />
          <FeatureItem
            icon={POSFeaturesData[8].icon}
            title={POSFeaturesData[8].title}
          />
          <FeatureItem
            icon={POSFeaturesData[9].icon}
            title={POSFeaturesData[9].title}
          />
          <FeatureItem
            icon={POSFeaturesData[10].icon}
            title={POSFeaturesData[10].title}
          />
          <FeatureItem
            icon={POSFeaturesData[11].icon}
            title={POSFeaturesData[11].title}
          />
         
        
        </div>
      </div>
    </section>
  );
};

export default POSFeatures;

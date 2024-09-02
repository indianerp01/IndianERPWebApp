import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {SuperMarketFeaturesData }from "@/app/components/FeaturesGlance/featuresData";

const SuperMarketFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={SuperMarketFeaturesData[0].icon}
            title={SuperMarketFeaturesData[0].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[1].icon}
            title={SuperMarketFeaturesData[1].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[2].icon}
            title={SuperMarketFeaturesData[2].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[3].icon}
            title={SuperMarketFeaturesData[3].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[4].icon}
            title={SuperMarketFeaturesData[4].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[5].icon}
            title={SuperMarketFeaturesData[5].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[6].icon}
            title={SuperMarketFeaturesData[6].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[7].icon}
            title={SuperMarketFeaturesData[7].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[8].icon}
            title={SuperMarketFeaturesData[8].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[9].icon}
            title={SuperMarketFeaturesData[9].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[10].icon}
            title={SuperMarketFeaturesData[10].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[11].icon}
            title={SuperMarketFeaturesData[11].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[12].icon}
            title={SuperMarketFeaturesData[12].title}
          />
          <FeatureItem
            icon={SuperMarketFeaturesData[13].icon}
            title={SuperMarketFeaturesData[13].title}
          />
        
        </div>
      </div>
    </section>
  );
};

export default SuperMarketFeatures;

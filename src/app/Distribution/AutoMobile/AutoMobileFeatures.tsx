import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { AutoMobileFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const AutoMobileFeatures  = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={AutoMobileFeaturesData [0].icon}
            title={AutoMobileFeaturesData [0].title}
          />
          <FeatureItem
            icon={AutoMobileFeaturesData [1].icon}
            title={AutoMobileFeaturesData [1].title}
          />
          <FeatureItem
            icon={AutoMobileFeaturesData [2].icon}
            title={AutoMobileFeaturesData [2].title}
          />
          <FeatureItem
            icon={AutoMobileFeaturesData [3].icon}
            title={AutoMobileFeaturesData [3].title}
          />
          <FeatureItem
            icon={AutoMobileFeaturesData [4].icon}
            title={AutoMobileFeaturesData [4].title}
          />
          <FeatureItem
            icon={AutoMobileFeaturesData [5].icon}
            title={AutoMobileFeaturesData [5].title}
          />
          <FeatureItem
            icon={AutoMobileFeaturesData [6].icon}
            title={AutoMobileFeaturesData [6].title}
          />
          <FeatureItem
            icon={AutoMobileFeaturesData [7].icon}
            title={AutoMobileFeaturesData [7].title}
          />
          <FeatureItem
            icon={AutoMobileFeaturesData [8].icon}
            title={AutoMobileFeaturesData [8].title}
          />
          <FeatureItem
            icon={AutoMobileFeaturesData [9].icon}
            title={AutoMobileFeaturesData [9].title}
          />
          <FeatureItem
            icon={AutoMobileFeaturesData [10].icon}
            title={AutoMobileFeaturesData [10].title}
          />
          <FeatureItem
            icon={AutoMobileFeaturesData [11].icon}
            title={AutoMobileFeaturesData [11].title}
          />
            <FeatureItem
            icon={AutoMobileFeaturesData [12].icon}
            title={AutoMobileFeaturesData [12].title}
          />
           <FeatureItem
            icon={AutoMobileFeaturesData [13].icon}
            title={AutoMobileFeaturesData [13].title}
          />
           <FeatureItem
            icon={AutoMobileFeaturesData [14].icon}
            title={AutoMobileFeaturesData [14].title}
          />
           <FeatureItem
            icon={AutoMobileFeaturesData [15].icon}
            title={AutoMobileFeaturesData [15].title}
          />
           <FeatureItem
            icon={AutoMobileFeaturesData [16].icon}
            title={AutoMobileFeaturesData [16].title}
          />
           <FeatureItem
            icon={AutoMobileFeaturesData [17].icon}
            title={AutoMobileFeaturesData [17].title}
          />
        
        </div>
      </div>
    </section>
  );
};

export default  AutoMobileFeatures ;

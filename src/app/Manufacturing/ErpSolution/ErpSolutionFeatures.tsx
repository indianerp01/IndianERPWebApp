import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import {  ErpSolutionFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const ErpSolutionFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ ErpSolutionFeaturesData[0].icon}
            title={ ErpSolutionFeaturesData[0].title}
          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[1].icon}
            title={ ErpSolutionFeaturesData[1].title}
          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[2].icon}
            title={ ErpSolutionFeaturesData[2].title}
          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[3].icon}
            title={ ErpSolutionFeaturesData[3].title}
          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[4].icon}
            title={ ErpSolutionFeaturesData[4].title}
          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[5].icon}
            title={ ErpSolutionFeaturesData[5].title}
          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[6].icon}
            title={ ErpSolutionFeaturesData[6].title}
          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[7].icon}
            title={ ErpSolutionFeaturesData[7].title}
          />
          <FeatureItem
            icon={ ErpSolutionFeaturesData[8].icon}
            title={ ErpSolutionFeaturesData[8].title}
          />
           <FeatureItem
            icon={ ErpSolutionFeaturesData[9].icon}
            title={ ErpSolutionFeaturesData[9].title}
          />
           <FeatureItem
            icon={ ErpSolutionFeaturesData[10].icon}
            title={ ErpSolutionFeaturesData[10].title}
          />
        </div>
      </div>
    </section>
  );
};

export default ErpSolutionFeatures;

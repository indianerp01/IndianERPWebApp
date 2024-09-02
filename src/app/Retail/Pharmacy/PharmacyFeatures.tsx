import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import featuresData from "@/app/components/FeaturesGlance/featuresData";

const PharmacyFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={featuresData[0].icon}
            title={featuresData[0].title}
          />
          <FeatureItem
            icon={featuresData[1].icon}
            title={featuresData[1].title}
          />
          <FeatureItem
            icon={featuresData[2].icon}
            title={featuresData[2].title}
          />
          <FeatureItem
            icon={featuresData[3].icon}
            title={featuresData[3].title}
          />
          <FeatureItem
            icon={featuresData[4].icon}
            title={featuresData[4].title}
          />
          <FeatureItem
            icon={featuresData[5].icon}
            title={featuresData[5].title}
          />
          <FeatureItem
            icon={featuresData[6].icon}
            title={featuresData[6].title}
          />
          <FeatureItem
            icon={featuresData[7].icon}
            title={featuresData[7].title}
          />
          <FeatureItem
            icon={featuresData[8].icon}
            title={featuresData[8].title}
          />
          <FeatureItem
            icon={featuresData[9].icon}
            title={featuresData[9].title}
          />
          <FeatureItem
            icon={featuresData[10].icon}
            title={featuresData[10].title}
          />
          <FeatureItem
            icon={featuresData[11].icon}
            title={featuresData[11].title}
          />
          <FeatureItem
            icon={featuresData[12].icon}
            title={featuresData[12].title}
          />
          <FeatureItem
            icon={featuresData[13].icon}
            title={featuresData[13].title}
          />
          <FeatureItem
            icon={featuresData[14].icon}
            title={featuresData[14].title}
          />
        </div>
      </div>
    </section>
  );
};

export default PharmacyFeatures;

import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { AccountingFeaturesData } from "@/app/components/FeaturesGlance/featuresData";

const AccountingFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={AccountingFeaturesData[0].icon}
            title={AccountingFeaturesData[0].title}
          />
          <FeatureItem
            icon={AccountingFeaturesData[1].icon}
            title={AccountingFeaturesData[1].title}
          />
          <FeatureItem
            icon={AccountingFeaturesData[2].icon}
            title={AccountingFeaturesData[2].title}
          />
          <FeatureItem
            icon={AccountingFeaturesData[3].icon}
            title={AccountingFeaturesData[3].title}
          />
          <FeatureItem
            icon={AccountingFeaturesData[4].icon}
            title={AccountingFeaturesData[4].title}
          />
          <FeatureItem
            icon={AccountingFeaturesData[5].icon}
            title={AccountingFeaturesData[5].title}
          />
          <FeatureItem
            icon={AccountingFeaturesData[6].icon}
            title={AccountingFeaturesData[6].title}
          />
          <FeatureItem
            icon={AccountingFeaturesData[7].icon}
            title={AccountingFeaturesData[7].title}
          />
          <FeatureItem
            icon={AccountingFeaturesData[8].icon}
            title={AccountingFeaturesData[8].title}
          />
        </div>
      </div>
    </section>
  );
};

export default AccountingFeatures;

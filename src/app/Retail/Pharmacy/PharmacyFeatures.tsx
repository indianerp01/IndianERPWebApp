import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { PharmacyData } from "@/app/components/FeaturesGlance/featuresData";

const PharmacyFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={PharmacyData[0].icon}
            title={PharmacyData[0].title}
          />
          <FeatureItem
            icon={PharmacyData[1].icon}
            title={PharmacyData[1].title}
          />
          <FeatureItem
            icon={PharmacyData[2].icon}
            title={PharmacyData[2].title}
          />
          <FeatureItem
            icon={PharmacyData[3].icon}
            title={PharmacyData[3].title}
          />
          <FeatureItem
            icon={PharmacyData[4].icon}
            title={PharmacyData[4].title}
          />
          <FeatureItem
            icon={PharmacyData[5].icon}
            title={PharmacyData[5].title}
          />
          <FeatureItem
            icon={PharmacyData[6].icon}
            title={PharmacyData[6].title}
          />
          <FeatureItem
            icon={PharmacyData[7].icon}
            title={PharmacyData[7].title}
          />
          <FeatureItem
            icon={PharmacyData[8].icon}
            title={PharmacyData[8].title}
          />
          <FeatureItem
            icon={PharmacyData[9].icon}
            title={PharmacyData[9].title}
          />
          <FeatureItem
            icon={PharmacyData[10].icon}
            title={PharmacyData[10].title}
          />
          <FeatureItem
            icon={PharmacyData[11].icon}
            title={PharmacyData[11].title}
          />
          <FeatureItem
            icon={PharmacyData[12].icon}
            title={PharmacyData[12].title}
          />
          <FeatureItem
            icon={PharmacyData[13].icon}
            title={PharmacyData[13].title}
          />
          <FeatureItem
            icon={PharmacyData[14].icon}
            title={PharmacyData[14].title}
          />
        </div>
      </div>
    </section>
  );
};

export default PharmacyFeatures;

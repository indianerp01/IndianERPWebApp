import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { GSTData  } from "@/app/components/FeaturesGlance/featuresData";

const PayrollFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ GSTData[0].icon}
            title={ GSTData[0].title}
          />
          <FeatureItem
            icon={ GSTData[1].icon}
            title={ GSTData[1].title}
          />
          <FeatureItem
            icon={ GSTData[2].icon}
            title={ GSTData[2].title}
          />
          <FeatureItem
            icon={ GSTData[3].icon}
            title={ GSTData[3].title}
          />
          <FeatureItem
            icon={ GSTData[4].icon}
            title={ GSTData[4].title}
          />
          <FeatureItem
            icon={ GSTData[5].icon}
            title={ GSTData[5].title}
          />
          <FeatureItem
            icon={ GSTData[6].icon}
            title={ GSTData[6].title}
          />
          <FeatureItem
            icon={ GSTData[7].icon}
            title={ GSTData[7].title}
          />
          <FeatureItem
            icon={ GSTData[8].icon}
            title={ GSTData[8].title}
          />
        </div>
      </div>
    </section>
  );
};

export default PayrollFeatures;

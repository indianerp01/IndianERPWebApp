import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { PayrollData  } from "@/app/components/FeaturesGlance/featuresData";

const PayrollFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={ PayrollData[0].icon}
            title={ PayrollData[0].title}
          />
          <FeatureItem
            icon={ PayrollData[1].icon}
            title={ PayrollData[1].title}
          />
          <FeatureItem
            icon={ PayrollData[2].icon}
            title={ PayrollData[2].title}
          />
          <FeatureItem
            icon={ PayrollData[3].icon}
            title={ PayrollData[3].title}
          />
          <FeatureItem
            icon={ PayrollData[4].icon}
            title={ PayrollData[4].title}
          />
          <FeatureItem
            icon={ PayrollData[5].icon}
            title={ PayrollData[5].title}
          />
          <FeatureItem
            icon={ PayrollData[6].icon}
            title={ PayrollData[6].title}
          />
          <FeatureItem
            icon={ PayrollData[7].icon}
            title={ PayrollData[7].title}
          />
          <FeatureItem
            icon={ PayrollData[8].icon}
            title={ PayrollData[8].title}
          />
        </div>
      </div>
    </section>
  );
};

export default PayrollFeatures;

import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { InventoryManagementData} from "@/app/components/FeaturesGlance/featuresData";

const InventoryManagementFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={InventoryManagementData[0].icon}
            title={InventoryManagementData[0].title}
          />
          <FeatureItem
            icon={InventoryManagementData[1].icon}
            title={InventoryManagementData[1].title}
          />
          <FeatureItem
            icon={InventoryManagementData[2].icon}
            title={InventoryManagementData[2].title}
          />
          <FeatureItem
            icon={InventoryManagementData[3].icon}
            title={InventoryManagementData[3].title}
          />
          <FeatureItem
            icon={InventoryManagementData[4].icon}
            title={InventoryManagementData[4].title}
          />
          <FeatureItem
            icon={InventoryManagementData[5].icon}
            title={InventoryManagementData[5].title}
          />
          <FeatureItem
            icon={InventoryManagementData[6].icon}
            title={InventoryManagementData[6].title}
          />
          <FeatureItem
            icon={InventoryManagementData[7].icon}
            title={InventoryManagementData[7].title}
          />
          <FeatureItem
            icon={InventoryManagementData[8].icon}
            title={InventoryManagementData[8].title}
          />
        </div>
      </div>
    </section>
  );
};

export default InventoryManagementFeatures;

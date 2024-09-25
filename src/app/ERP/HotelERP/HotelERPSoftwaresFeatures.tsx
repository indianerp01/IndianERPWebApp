import FeatureItem from "@/app/components/FeaturesGlance/FeatureItem";
import { HotelERPSoftwaresData} from "@/app/components/FeaturesGlance/featuresData";

const HotelERPSoftwaresFeatures = () => {
  return (
    <section>
      <div className="flex justify-center  text-[42px] font-bold text-center ">
        Features at Glance
      </div>
      <div className="container px-5 py-12 mx-auto rounded-lg">
        <div className="flex flex-wrap text-center justify-center">
          <FeatureItem
            icon={HotelERPSoftwaresData[0].icon}
            title={HotelERPSoftwaresData[0].title}
          />
          <FeatureItem
            icon={HotelERPSoftwaresData[1].icon}
            title={HotelERPSoftwaresData[1].title}
          />
          <FeatureItem
            icon={HotelERPSoftwaresData[2].icon}
            title={HotelERPSoftwaresData[2].title}
          />
          <FeatureItem
            icon={HotelERPSoftwaresData[3].icon}
            title={HotelERPSoftwaresData[3].title}
          />
          <FeatureItem
            icon={HotelERPSoftwaresData[4].icon}
            title={HotelERPSoftwaresData[4].title}
          />
          <FeatureItem
            icon={HotelERPSoftwaresData[5].icon}
            title={HotelERPSoftwaresData[5].title}
          />
          <FeatureItem
            icon={HotelERPSoftwaresData[6].icon}
            title={HotelERPSoftwaresData[6].title}
          />
          <FeatureItem
            icon={HotelERPSoftwaresData[7].icon}
            title={HotelERPSoftwaresData[7].title}
          />
          <FeatureItem
            icon={HotelERPSoftwaresData[8].icon}
            title={HotelERPSoftwaresData[8].title}
          />
        </div>
      </div>
    </section>
  );
};

export default HotelERPSoftwaresFeatures;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SwiperSlideComp from "./SwiperSlideComp";

const SwiperComp = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <section className="py-20">
      <div className="mb-10">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SwiperSlideComp
              imgLink={"/Swiper/Banking.svg"}
              title={"Online Banking With MARG ERP with ICICI Bank"}
              desc={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse cumque labore rerum. Sequi eaque neque, nemo voluptatem in dignissimos obcaecati magnam esse non aspernatur laborum et"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComp
              imgLink={"/Swiper/pharma.svg"}
              title={"Comprehensive Solution For Pharmacist"}
              desc={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse cumque labore rerum. Sequi eaque neque, nemo voluptatem in dignissimos obcaecati magnam esse non aspernatur laborum et"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComp
              imgLink={"/Swiper/invoice.svg"}
              title={"100% Free Invoicing Software For Your Business"}
              desc={
                "For businesses with Rs. 5 Crore+ turnover* e-invoicing is going to be mandatory w.e.f. 1 August 2023. Simplify your e-invoicing with India's best e-invoicing software."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComp
              imgLink={"/Swiper/sales.svg"}
              title={"Easy & Simple Way To Get Your Sales Data"}
              desc={
                "Effortlessly analyze your Data via Multiple Reports by directly connecting your server to the distributor's system to end the dependency on third parties"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideComp
              imgLink={"/Swiper/advertise.svg"}
              title={"Advertise To Indias Top Pharma & FMCG Retailers"}
              desc={
                "Advertise to India's top 2.5 Lakh+ Retailers & 1 Lakh+ Distributors. Get unlimited reach to 12000+ Pincodes with high-end placements on Marg ERP software home screen.Advertise to India's top 2.5 Lakh+ Retailers & 1 Lakh+ Distributors. Get unlimited reach to 12000+ Pincodes with high-end placements on Marg ERP software home screen."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperComp;

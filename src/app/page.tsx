import Title from "./components/Heading/Title";
import Landing from "./components/Hero/Landing";
import ShowCase from "./components/Showcase/ShowCase";
import SoftwareComp from "./components/Software/SoftwareComp";
import Ecod from "./components/Ecod/Ecod";
import SwiperComp from "./components/Swiper/SwiperComp";

export default function Home() {
  return (
    <main className="container ">
      {/* <Hero/> */}
      <Landing />
      <Ecod />
      <ShowCase />
      <Title title="Retail Softwares" />
      <SoftwareComp
        src1="/Retail/Retail-1.svg"
        src2="/Retail/Retail-2.svg"
        src3="/Retail/Retail-3.svg"
        src4="/Retail/Retail-4.svg"
        src5="/Retail/Retail-5.svg"
        src6="/Retail/Retail-6.svg"
        src7="/Retail/Retail-7.svg"
        name1="Retail Software"
        name2="Pahrmacy Software"
        name3="SuperMarket Software"
        name4="Garment Software"
        name5="POS Software"
        name6="Jwellery Software"
        name7="Restaurant Software"
      />
      <Title title="Distributor Softwares" />
      <SoftwareComp
        src1="/Dist/Dist-1.svg"
        src2="/Dist/Dist-2.svg"
        src3="/Dist/Dist-3.svg"
        src4="/Dist/Dist-4.svg"
        src5="/Dist/Dist-5.svg"
        src6="/Retail/Retail-1.svg"
        src7="/Dist/Dist-7.svg"
        name1="Pharma Software"
        name2="FMCG Software"
        name3="WholeSale Dist Software"
        name4="Automobile Software"
        name5="Supply Chain Management"
        name6="Retail Software"
        name7="Accounting Software"
      />
      <Title title="Manufacturing Softwares" />
      <SoftwareComp
        src1="/Manufacture/Manufact-1.svg"
        src2="/Manufacture/Manufact-2.svg"
        src3="/Manufacture/Manufact-3.jpg"
        src4="/Manufacture/Manufact-4.svg"
        src5="/Manufacture/Manufact-5.svg"
        src6="/Manufacture/Manufact-7.svg"
        src7="/Manufacture/Manufact-6.svg"
        name1="ERP Software Solution"
        name2="Pharmacy Manufact Software"
        name3="Automobile Indus Software"
        name4="Textile Software"
        name5="Industry Software"
        name6="Food Software"
        name7="Bevrages & Drinks Software"
      />
      <Title title="ERP Corporate Solutions" />
      <SoftwareComp
        src1="/ERP/ERP-1.svg"
        src2="/ERP/ERP-2.svg"
        src3="/Manufacture/Manufact-1.svg"
        src4="/ERP/ERP-4.svg"
        src5="/ERP/ERP-5.svg"
        src6="/ERP/ERP-6.svg"
        src7="/ERP/ERP-7.svg"
        name1="Retail Chain Management"
        name2="Supply Chain Management"
        name3="ERP Software Solution"
        name4="Management Softwares"
        name5="Pharma ERP Softwares"
        name6="Hotel ERP Softwares"
        name7="Inventory Management"
      />
      <Title title="Other Solutions" />
      <SoftwareComp
        src1="/Others/Others-1.svg"
        src2="/Others/Others-2.svg"
        src3="/Others/Others-3.svg"
        src4="/Others/Others-4.svg"
        src5="/Others/Others-5.svg"
        src6="/Others/Others-6.svg"
        src7="/Others/Others-7.svg"
        name1="ECOD Secure"
        name2="Payroll Software"
        name3="Billing Software"
        name4="GST Softwares"
        name5="Invoice Softwares"
        name6="Web-App Softwares"
        name7="Ecommerce App Softwares"
      />

      <SwiperComp />
    </main>
  );
}

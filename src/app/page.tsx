import Title from "./components/Heading/Title";
import Landing from "./components/Hero/Landing";
import ShowCase from "./components/Showcase/ShowCase";
import SoftwareComp from "./components/Software/SoftwareComp";

export default function Home() {
  return (
    <main className="container">
      <Landing />
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
    </main>
  );
}

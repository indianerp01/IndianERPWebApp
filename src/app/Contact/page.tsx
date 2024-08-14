
import ShowCase from "../components/Showcase/ShowCase";
import Footer from "../components/Footer/Footer"
import FAQSection from "../components/FAQSection/FAQSection";
import ProductsFeatures from "../components/ProductsFeatures/ProductsFeatures"
// import Software from "../components/Software/Software";
const page = () => {
  return <div>
    <ShowCase />
    {/* <Software/>  */}
    <ProductsFeatures />
    <FAQSection />
    <Footer />
  </div>;

}
export default page;


import ShowCase from "../components/Showcase/ShowCase";
import Footer from "../components/Footer/Footer"
import FAQSection from "../components/FAQSection/FAQSection";
import ProductsFeatures from "../components/ProductsFeatures/ProductsFeatures"
const page = () => {
  return <div>
    <ShowCase />
    <ProductsFeatures />
    <FAQSection />
    <Footer />
  </div>;

}
export default page;

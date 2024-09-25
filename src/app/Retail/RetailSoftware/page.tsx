import ShowCase from "@/app/components/Showcase/ShowCase";
import RetailSoftwareFeatures from "./RetailSoftwareFeatures";
import Header from "@/app/components/HeroPages/Header";

const page = () => {
  return <div className="container">
     <Header 
  title="Retail Software" 
  description="Manage billing, accounting, and inventory all in one place. Get a powerful POS system, robust inventory tracking, and seamless accounting integration. Simplify your retail operations with the right software." 
  link="/Contact" 
  img1= "/HeropagesImages/img34.svg"
  img2= "/HeropagesImages/img35.svg"
  img3= "/HeropagesImages/img36.svg"
  heading1="Point of Sale (POS)"
  heading2="Inventory Management"
  heading3="E-commerce Integration"
 /> 
  <ShowCase/>
  <RetailSoftwareFeatures/>
  </div>;
};

export default page;

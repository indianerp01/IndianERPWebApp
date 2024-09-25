import ShowCase from "@/app/components/Showcase/ShowCase";
import SuperMarketFeatures from "./SuperMarketFeatures";
import SuperMarketFAQSection from "./SuperMarketFAQSection";
import Header from "@/app/components/HeroPages/Header";

const SuperMarket = () => {
  return <div className="container">
 <Header 
  title="Super Market Software" 
  description="Take your pharmacy to the next level with Indian Pharmacy Software. Streamline your operations, boost customer loyalty, and increase profitability with features like automated invoice sending, prescription reminders, and real-time inventory management." 
  link="/Contact" 
  img1= "/HeropagesImages/img4.svg"
  img2= "/HeropagesImages/img5.svg"
  img3= "/HeropagesImages/img6.svg"
  heading1="Online Ordering and Delivery"
  heading2="Warehouse Management"
  heading3="Financial Management"
 /> 
    <ShowCase/>
    <SuperMarketFeatures/>
    <SuperMarketFAQSection/>
  </div>;
};

export default SuperMarket;

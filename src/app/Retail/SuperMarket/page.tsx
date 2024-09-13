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
 /> 
    <ShowCase/>
    <SuperMarketFeatures/>
    <SuperMarketFAQSection/>
  </div>;
};

export default SuperMarket;

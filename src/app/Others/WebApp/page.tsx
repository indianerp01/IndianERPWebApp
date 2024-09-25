import Header from "@/app/components/HeroPages/Header";
import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import WebAppFeatures from "./WebAppFeatures";

const WebApp = () => {
  return <div className="container">
    <Header 
  title="Web-App Software" 
  description= "Web-app software offers a powerful way to reach your audience. Access your application from any device with an internet connection, making it convenient and accessible. Streamline your processes and enhance your business with the power of web apps." 
  link="/Contact" 
  img1= "/HeropagesImages/img101.svg"
  img2= "/HeropagesImages/img102.svg"
  img3= "/HeropagesImages/img103.svg"
  heading1="Responsive Design"
  heading2="Version Control"
  heading3="Deployment and Hosting"
 />
    <ShowCase/>
    <WebAppFeatures/>
  </div>;
};

export default WebApp;

import Header from "@/app/components/HeroPages/Header";
import ShowCase from "@/app/components/Showcase/ShowCase";
import React from "react";
import ManagementSoftwareFeatures from "./ManagementSoftwareFeatures";

const ManagementSoftwares = () => {
  return <div className="container">
      <Header 
  title="Management Software" 
  description= "Boost productivity, improve collaboration, and gain valuable insights. Management software empowers you to effectively manage your business, projects, teams, and customers. Discover how software can make your life easier and your business more successful." 
  link="/Contact" 
  img1= "/HeropagesImages/img79.svg"
  img2= "/HeropagesImages/img80.svg"
  img3= "/HeropagesImages/img81.svg"
  heading1="Task Management"
  heading2="Resource Management"
  heading3="Sales Pipeline Management"
 /> 
  <ShowCase/>
  <ManagementSoftwareFeatures/>
  </div>;
};

export default ManagementSoftwares;

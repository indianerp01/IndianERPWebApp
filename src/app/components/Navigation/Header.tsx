"use client";

import Link from "next/link";
import DemoBtn from "./DemoBtn";
import DropDown from "./DropDown";
import HeaderLogo from "./HeaderLogo";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleLinkClick = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <header className="mx-auto py-4 sticky top-0 backdrop-filter backdrop-blur-xl bg-opacity-80 z-20 border-b">
        <div className="flex items-center justify-between text-sm container ">
          <nav className="flex items-center justify-center">
            <span className="pr-5">
              <HeaderLogo />
            </span>
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center justify-center gap-6">
              <Link
                href="/"
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200"
              >
                Home
              </Link>
              <DropDown
                title="Retail"
                dropDownT1="Pharmacy Software"
                dropDownT2="Super Market Software"
                dropDownT3="Garment Software"
                dropDownT4="POS Software"
                dropDownT5="Jewellery Software"
                dropDownT6="Retail Software"
                dropDownT7="Restaurant Billing"
                titleHREF="/Retail"
                href1="/Retail/Pharmacy"
                href2="/Retail/SuperMarket"
                href3="/Retail/Garment"
                href4="/Retail/POS"
                href5="/Retail/Jewellery"
                href6="/Retail/RetailSoftware"
                href7="/Retail/Restaurant"
              />
              <DropDown
                title="Distribution"
                dropDownT1="Pharma Software"
                dropDownT2="FMCG Software India"
                dropDownT3="Wholesale Dist Software"
                dropDownT4="Automobile Softwares"
                dropDownT5="Supplychain Mgt"
                dropDownT6="Retail Software"
                dropDownT7="Accounting Software"
                titleHREF="/Distribution"
                href1="/Distribution/Pharma"
                href2="/Distribution/FMCG"
                href3="/Distribution/WholesaleDistribution"
                href4="/Distribution/AutoMobile"
                href5="/Distribution/SupplyChain"
                href6="/Retail/RetailSoftware"
                href7="/Distribution/Accounting"
              />
              <DropDown
                title="Manufacturing"
                dropDownT1="ERP Software Solution"
                dropDownT2="Pharmacy Manufac Software"
                dropDownT3="Automobile Indus Software"
                dropDownT4="Textile Softwares"
                dropDownT5="Industry Software"
                dropDownT6="Food Software"
                dropDownT7="Beverage & Drinks Software"
                titleHREF="/Manufacturing"
                href1="/Manufacturing/ErpSolution"
                href2="/Manufacturing/PharmaManufacture"
                href3="/Manufacturing/AutomobileIndustry"
                href4="/Manufacturing/Texttile"
                href5="/Manufacturing/Indusrty"
                href6="/Manufacturing/Food"
                href7="/Manufacturing/Bevrages&Drinks"
              />
              <DropDown
                title="ERP"
                dropDownT1="Retail Chain Mgt"
                dropDownT2="Supply Chain Mgt"
                dropDownT3="ERP Software Solution"
                dropDownT4="Management Softwares"
                dropDownT5="Pharma ERP Software"
                dropDownT6="Hotel ERP Software"
                dropDownT7="Inventory Mgt"
                titleHREF="/ERP"
                href1="/ERP/RetailChain"
                href2="/ERP/SupplyChain"
                href3="/ERP/ERPSoft"
                href4="/ERP/ManagementSoftware"
                href5="/ERP/PharmaERP"
                href6="/ERP/HotelERP"
                href7="/ERP/InventoryManagement"
              />
              {/* <DropDown
                title="Mobile Apps"
                dropDownT1="E-Retail App"
                dropDownT2="E-Order App"
                dropDownT3="E-Owner App"
                dropDownT4="E-Delievery App"
                dropDownT5="SFA-Xpert App"
                dropDownT6="GPS Tracking App"
                dropDownT7="Ecommerce App"
                titleHREF="/MobileApps"
                href1="/MobileApps/E-Retail"
                href2="/MobileApps/E-Order"
                href3="/MobileApps/E-Owner"
                href4="/MobileApps/E-Delievery"
                href5="/MobileApps/SFA-Xpert"
                href6="/MobileApps/GPS-Tracking"
                href7="/MobileApps/Ecommerce"
              /> */}
              <DropDown
                title="Others"
                dropDownT1="ECOD Secure"
                dropDownT2="Payroll Software"
                dropDownT3="Billing Software"
                dropDownT4="GST Software"
                dropDownT5="Invoice Software"
                dropDownT6="Ecommerce App Softwares"
                dropDownT7="Web-Apps Software"
                titleHREF="/Others"
                href1="/Others/ECOD"
                href2="/Others/Payroll"
                href3="/Others/Billing"
                href4="/Others/GST"
                href5="/Others/Invoice"
                href6="/Others/E_AppSoftwares"
                href7="/Others/WebApp"
              />
              <Link
                href="/OnlineSoftware"
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer  transition-all ease-linear duration-200"
              >
                OnlineS/W
              </Link>
              <Link
                href="/Contact"
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer  transition-all ease-linear duration-200"
              >
                Contact
              </Link>
            </ul>
          </nav>
          <div className="max-sm:hidden  max-lg:hidden">
            <ul>
              <DemoBtn />
            </ul>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className="lg:hidden text-3xl" onClick={toggleMobileMenu}>
            <IoMenu />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transition-all ease-in-out duration-300 ${
            showMobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-3xl"
            onClick={toggleMobileMenu}
          >
            <IoMdClose />
          </button>

          <ul className="flex flex-col p-4 gap-4 m-20 items-center text-lg h-screen">
            <li className="bg-stone-100 w-full text-center px-3 py-2 rounded-sm ring-1 ring-stone-300">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200 uppercase"
              >
                Home
              </Link>
            </li>
            <li className="bg-stone-100 w-full text-center px-3 py-2 rounded-sm ring-1 ring-stone-300">
              <Link
                href="/Retail"
                onClick={handleLinkClick}
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200 "
              >
                Retail
              </Link>
            </li>
            <li className="bg-stone-100 w-full text-center px-3 py-2 rounded-sm ring-1 ring-stone-300">
              <Link
                href="/Distribution"
                onClick={handleLinkClick}
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200 "
              >
                Distribution
              </Link>
            </li>
            <li className="bg-stone-100 w-full text-center px-3 py-2 rounded-sm ring-1 ring-stone-300">
              <Link
                href="/Manufacturing"
                onClick={handleLinkClick}
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200 "
              >
                Manufacturing
              </Link>
            </li>
            <li className="bg-stone-100 w-full text-center px-3 py-2 rounded-sm ring-1 ring-stone-300">
              <Link
                href="/ERP"
                onClick={handleLinkClick}
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200"
              >
                ERP
              </Link>
            </li>
            {/* <li>
              <Link
                href="/MobileApps"
                onClick={handleLinkClick}
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200"
              >
                Mobile Apps
              </Link>
            </li> */}
            <li className="bg-stone-100 w-full text-center px-3 py-2 rounded-sm ring-1 ring-stone-300">
              <Link
                href="/Others"
                onClick={handleLinkClick}
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200 bg-stone-100 px-3 py-1 rounded-sm"
              >
                Others
              </Link>
            </li>
            <li className="bg-stone-100 w-full text-center px-3 py-2 rounded-sm ring-1 ring-stone-300">
              <Link
                href="/OnlineSoftware"
                onClick={handleLinkClick}
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200 bg-stone-100 px-3 py-1 rounded-sm"
              >
                Online Software
              </Link>
            </li>
            <li className="bg-stone-100 w-full text-center px-3 py-2 rounded-sm ring-1 ring-stone-300">
              <Link
                href="/Contact"
                onClick={handleLinkClick}
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200 bg-stone-100 px-3 py-1 rounded-sm"
              >
                Contact Us
              </Link>
            </li>
            <div className="xl:hidden flex">
              <ul className="m-3 ">
                <DemoBtn />
              </ul>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;

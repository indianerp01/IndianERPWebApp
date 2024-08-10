import Link from "next/link";
import DemoBtn from "./DemoBtn";
import DropDown from "./DropDown";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <>
      <header className="mx-auto py-4 sticky top-0 backdrop-filter backdrop-blur-xl bg-opacity-80 z-20 ">
        <div className="flex items-center justify-between text-sm container">
          <nav className="flex items-center justify-center">
            <span className="pr-5">
              <HeaderLogo />
            </span>
            <ul className="flex items-center justify-center gap-4">
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
                dropDownT5="Jwellery Software"
                dropDownT6="Retail Software"
                dropDownT7="Restaurant Billing"
                href1="/Retail/Pharmacy"
                href2="/Retail/SuperMarket"
                href3="/Retail/Garment"
                href4="/Retail/POS"
                href5="/Retail/Jwellery"
                href6="/Retail"
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
                href1="/Distribution/Pharma"
                href2="/Distribution/FMCG"
                href3="/Distribution/WholesaleDistribution"
                href4="/Distribution/AutoMobile"
                href5="/Distribution/SupplyChain"
                href6="/Retail"
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
                href1="/ERP/RetailChain"
                href2="/ERP/SupplyChain"
                href3="/ERP/ERPSoft"
                href4="/ERP/ManagementSoftware"
                href5="/ERP/PharmaERP"
                href6="/ERP/HotelERP"
                href7="/ERP/InventoryManagement"
              />
              <DropDown
                title="Mobile Apps"
                dropDownT1="E-Retail App"
                dropDownT2="E-Order App"
                dropDownT3="E-Owner App"
                dropDownT4="E-Delievery App"
                dropDownT5="SFA-Xpert App"
                dropDownT6="GPS Tracking App"
                dropDownT7="Ecommerce App"
                href1="/MobileApps/E-Retail"
                href2="/MobileApps/E-Order"
                href3="/MobileApps/E-Owner"
                href4="/MobileApps/E-Delievery"
                href5="/MobileApps/SFA-Xpert"
                href6="/MobileApps/GPS-Tracking"
                href7="/MobileApps/Ecommerce"
              />
              <DropDown
                title="Others"
                dropDownT1="ECOD Secure"
                dropDownT2="Payroll Software"
                dropDownT3="Billing Software"
                dropDownT4="GST Software"
                dropDownT5="Invoice Software"
                dropDownT6="E-Invoicing Software"
                dropDownT7="Web-Apps Software"
                href1="/Others/ECOD"
                href2="/Others/Payroll"
                href3="/Others/Billing"
                href4="/Others/GST"
                href5="/Others/Invoice"
                href6="/Others/E_Invoice"
                href7="/Others/WebApp"
              />
              <Link
                href="/categories/onlineSoftwares"
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer  transition-all ease-linear duration-200"
              >
                Online Software
              </Link>
              <Link
                href="/Contact"
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer  transition-all ease-linear duration-200"
              >
                Contact Us
              </Link>
            </ul>
          </nav>
          <nav>
            <ul>
              <DemoBtn />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

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
                href1="/categories/retail/pharmacy"
                href2="/categories/retail/superMarket"
                href3="/categories/retail/garment"
                href4="/categories/retail/pos"
                href5="/categories/retail/jwellery"
                href6="/categories/retail/retail"
                href7="/categories/retail/restaurant"
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
                href1="/categories/distribution/pharma"
                href2="/categories/distribution/fmcg"
                href3="/categories/distribution/wholesale"
                href4="/categories/distribution/automobile"
                href5="/categories/distribution/supplychain"
                href6="/categories/distribution/retail"
                href7="/categories/distribution/accounting"
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
                href1="/categories/manufacturing/erp"
                href2="/categories/manufacturing/pharma-manufacturing"
                href3="/categories/manufacturing/automobile"
                href4="/categories/manufacturing/textile"
                href5="/categories/manufacturing/industry"
                href6="/categories/manufacturing/food"
                href7="/categories/manufacturing/beverage-drinks"
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
                href1="/categories/erp/retailChain"
                href2="/categories/erp/supplyChain"
                href3="/categories/erp/erpSoftwareSolution"
                href4="/categories/erp/management"
                href5="/categories/erp/pharmaERP"
                href6="/categories/erp/hotelERP"
                href7="/categories/erp/inventory"
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
                href1="/categories/mobileApps/eRetail"
                href2="/categories/mobileApps/eOrder"
                href3="/categories/mobileApps/eOwner"
                href4="/categories/mobileApps/eDelhivery"
                href5="/categories/mobileApps/sfa-expert"
                href6="/categories/mobileApps/gps"
                href7="/categories/mobileApps/ecommerce"
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
                href1="/categories/others/ecod"
                href2="/categories/others/payroll"
                href3="/categories/others/billing"
                href4="/categories/others/GST"
                href5="/categories/others/invoice"
                href6="/categories/others/e-invoicing"
                href7="/categories/others/web-app"
              />
              <Link
                href="/categories/onlineSoftwares"
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer  transition-all ease-linear duration-200"
              >
                Online Software
              </Link>
              <Link
                href="/contactUs"
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

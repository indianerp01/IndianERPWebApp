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
                href1="/"
                href2="/"
                href3="/"
                href4="/"
                href5="/"
                href6="/"
                href7="/"
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
                href1="/"
                href2="/"
                href3="/"
                href4="/"
                href5="/"
                href6="/"
                href7="/"
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
                href1="/"
                href2="/"
                href3="/"
                href4="/"
                href5="/"
                href6="/"
                href7="/"
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
                href1="/"
                href2="/"
                href3="/"
                href4="/"
                href5="/"
                href6="/"
                href7="/"
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
                href1="/"
                href2="/"
                href3="/"
                href4="/"
                href5="/"
                href6="/"
                href7="/"
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
                href1="/"
                href2="/"
                href3="/"
                href4="/"
                href5="/"
                href6="/"
                href7="/"
              />
              <Link
                href="/"
                className="text-neutral-500 hover:text-neutral-900 cursor-pointer  transition-all ease-linear duration-200"
              >
                Online Software
              </Link>
              <Link
                href="/"
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

import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#0c0b0b11] ">
        <div className="container mx-auto p-0 md:p-8 xl:px-0 ">
          <div className="mx-auto max-w-7xl px-6  pt-3">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-4">
                <div>
                  <Link href="/">
                    <div className="flex items-center space-x-2 text-2xl font-medium">
                      <span className="flex items-center justify-center font-bold">
                        <span className="text-orange-500 text-2xl">I-</span>
                        <span className="text-blue-500 text-2xl">C-</span>
                        <span className="text-green-500 text-2xl">TECH</span>
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="max-w-md pr-16 text-md0">
                  Indian Computer Technology is a web-based, easy-to-use
                  software which gives you more control in managing your chain
                  of shops.
                </div>
                <div className="flex space-x-2 text-3xl ">
                  <Link href="" target="_blank">
                    <FaFacebook />
                  </Link>
                  <Link href="" target="_blank">
                    <FaSquareXTwitter />
                  </Link>
                  <Link href="" target="_blank">
                    <FaLinkedin />
                  </Link>
                  <Link href="" target="_blank">
                    <FaSquareInstagram />
                  </Link>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 ">
                      Navigation Links
                    </h3>
                    <ul role="list" className="mt-6 space-y-2">
                      <li>
                        <Link href="/" className="text-md leading-6">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/Retail" className="text-md leading-6">
                          Retail
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Distribution"
                          className="text-md leading-6"
                        >
                          Distribution
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Manufacturing"
                          className="text-md leading-6"
                        >
                          Manufacturing
                        </Link>
                      </li>
                      <li>
                        <Link href="/ERP" className="text-md leading-6">
                          ERP
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6 ">
                      Softwares
                    </h3>
                    <ul role="list" className="mt-6 space-y-2">
                      <li>
                        <Link href="/MobileApps" className="text-md leading-6 ">
                          Mobile Apps
                        </Link>
                      </li>
                      <li>
                        <Link href="/Others" className="text-md leading-6 ">
                          Others
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/OnlineSoftware"
                          className="text-md leading-6 "
                        >
                          Online Software
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 ">
                      Resources
                    </h3>
                    <ul role="list" className="mt-6 space-y-2">
                      <li>
                        <Link href="/aboutus" className="text-md leading-6 ">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/Contact" className="text-md leading-6 ">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6">
                      Contact Details
                    </h3>
                    <h4 className="mt-6 space-y-2">Email id :</h4>
                    <p>indiancomptech@gmail.com</p>

                    <h4 className="mt-6 space-y-2">Contact Number :</h4>
                    <p>
                      +91 9921163448 , <br /> +91 9922163448
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-6">
              <div className="text-md text-center  ">
                © 2023 ICT — @All Rights Reserved
                <Link rel="noopener" href="/">
                  {" "}
                  ICT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

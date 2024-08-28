import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0c0b0b11] ">
        <div className="container mx-auto p-0 md:p-8 xl:px-0 ">
          <div className="mx-auto max-w-7xl px-6  pt-3">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-4">
                <div>
                  <a href="/">
                    <div className="flex items-center space-x-2 text-2xl font-medium">
                      <span className="flex items-center justify-center font-bold">
                        <span className="text-orange-500 text-2xl">I-</span>
                        <span className="text-blue-500 text-2xl">C-</span>
                        <span className="text-green-500 text-2xl">TECH</span>
                      </span>
                    </div>
                  </a>
                </div>
                <div className="max-w-md pr-16 text-md0">
                  Enhance productivity and efficiency with cutting-edge
                  artificial intelligence solutions for your business
                  operations.
                </div>
                <div className="flex space-x-2 text-2xl">
                  <a href="" target="_blank">
                    <FaFacebook  />
                  </a>
                  <a href="" target="_blank">
                    <FaSquareXTwitter/>
                  </a>
                  <a href="" target="_blank">
                    <FaLinkedin />
                  </a>
                  <a href="" target="_blank">
                    <FaSquareInstagram />
                  </a>

                </div>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 ">
                      Useful Links
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="/" className="text-md leading-6">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/Retail" className="text-md leading-6">
                          Retail
                        </a>
                      </li>
                      <li>
                        <a
                          href="/Distribution"
                          className="text-md leading-6"
                        >
                          Distribution
                        </a>
                      </li>
                      <li>
                        <a
                          href="/Manufacturing"
                          className="text-md leading-6"
                        >
                          Manufacturing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ERP"
                          className="text-md leading-6"
                        >
                          ERP
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6 ">
                      Use Software
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a
                          href="/MobileApps"
                          className="text-md leading-6 "
                        >
                          Mobile Apps
                        </a>
                      </li>
                      <li>
                        <a
                          href="/Others"
                          className="text-md leading-6 "
                        >
                          Others
                        </a>
                      </li>
                      <li>
                        <a href="/OnlineSoftware" className="text-md leading-6 ">
                          Online Software
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 ">
                      Resources
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="/aboutus" className="text-md leading-6 ">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/Contact" className="text-md leading-6 ">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6">
                      Contact Details
                    </h3>
                    <h4 className="mt-6 space-y-4">Email id :</h4>
                    <p>indiancomptech@gmail.com</p>

                    <h4 className="mt-6 space-y-4">Contact Number :</h4>
                    <p>
                      
                      +91 9921163448 , <br /> +91 9922163448
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-6">
              <div className="text-md text-center  ">
                Copyright © 2024 .
                <a rel="noopener" href="/">
                  {" "}
                  ICT
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

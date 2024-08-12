<<<<<<< HEAD
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <span className="flex items-center justify-center font-bold">
              <span className="text-orange-500 text-3xl">I-</span>
              <span className="text-blue-500 text-3xl">C-</span>
              <span className="text-green-500 text-3xl">TECH</span>
            </span>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-orange-600 font-bold">
              Useful Links
            </div>
            <Link className="my-3 block" href="/#">
              Pharmacy software
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" href="/#">
              Super Market Software
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" href="/#">
              Jewellery Software
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" href="/#">
              Restaurant Software
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" href="/#">
              Garment Software
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" href="/#">
              Retail Software<span className="text-teal-600 text-xs p-1"></span>
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-orange-600 font-bold">
              Support
            </div>
            <Link className="my-3 block" href="/#">
              Help Center <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" href="/#">
              Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" href="/#">
              Conditions <span className="text-teal-600 text-xs p-1"></span>
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-orange-600 font-bold">
              Contact us
            </div>
            <p className="my-3 block">
              {" "}
              Address Indian Computer Technology : Office No.1, Sr.No.99/12B/2,
              Vijay Nagar Alfanso Residency, Near Mother Teresa Fly Over,
              Kalewadi, Pimpri, Pimpri-Chinchwad, Pune-411017
              <span className="text-teal-600 text-xs p-1"></span>
            </p>
            <p className="my-3 block">
              indiancomptech@gmail.com{" "}
              <span className="text-teal-600 text-xs p-1"></span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <Link href="/#" className="w-6 mx-1"></Link>
            <Link href="/#" className="w-6 mx-1"></Link>
            <Link href="/#" className="w-6 mx-1"></Link>
            <Link href="/#" className="w-6 mx-1"></Link>
            <Link href="/#" className="w-6 mx-1"></Link>
          </div>
          <div className="my-5">© Copyright 2020. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
=======
import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer
>>>>>>> main

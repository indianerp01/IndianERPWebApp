const page = () => {
  return (
    <>
      <div className="">
        {/* CONTACT US */}
        <div className="container m-auto flex flex-col md:flex-col max-w-7xl  my-10 ">
          <h2 className=" text-3xl font-bold  flex justify-center m-10 ">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="flex border rounded-lg p-4 text-3xl  items-center gap-4">
              📞
              <div className="ml-2">
                <h4 className="font-semibold text-base  tracking-normal">
                  Contact Number :
                </h4>
                <p className="text-sm font-normal text-gray tracking-normal">
                  {" "}
                  +91 9921163448 , +91 9922163448
                </p>
              </div>
            </div>
            <div className="flex border rounded-lg p-4 text-3xl items-center  gap-4">
              ✉️
              <div className="ml-2">
                <h4 className="font-semibold text-base  tracking-normal">
                  Mail Id :
                </h4>
                <p className="text-sm font-normal text-gray tracking-normal">
                  indiancomptech@gmail.com
                </p>
              </div>
            </div>
            <div className="flex border rounded-lg p-4 text-3xl items-center  gap-4">
              📍
              <div className="ml-2">
                <h4 className="font-semibold text-base  tracking-normal">
                  Address :
                </h4>
                <p className="text-sm font-normal text-gray tracking-normal">
                  Office No.1, Sr.No.99/12B/2, Vijay Nagar Alfanso Residency,
                  Near Mother Teresa Fly Over, Kalewadi, Pimpri,
                  Pimpri-Chinchwad, Pune-411017
                </p>
              </div>
            </div>
            <div className="flex border rounded-lg p-4 text-3xl items-center  gap-4">
              🕒
              <div className="ml-2">
                <h4 className="font-semibold text-base  tracking-normal">
                  Business Hours :
                </h4>
                <p className="text-sm font-normal text-gray tracking-normal">
                  Mon-Sat : 9am - 8pm , Sun : Closed{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" container m-auto flex flex-col-reverse md:flex-row  p-8 md:p-16  border rounded-lg shadow-lg max-w-7xl  my-10">
          {/* Map Information */}
          <div className="flex-1 mb-8 md:mb-0 md:mr-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.6117095672309!2d73.79199718802717!3d18.6238514422496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9cdc19611ef%3A0x3b4e25791140511!2sINDIAN%20COMPUTER%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1724249577403!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-3 ">
                📝 Fill up this form for reaching out to us!
              </p>
            </div>
            <form className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your Email address"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your message"
                  className="w-full p-2 border border-gray-300 rounded-md h-32 resize-none "
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md w-full hover:bg-white hover:text-black border border-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;

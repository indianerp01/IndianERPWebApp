const Ecod = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Grow your Pharma Business 3X Faster with ECOD Secure
        </h1>
        <p className="text-lg text-center mb-8">
          Stepping up in the world of data & technology, Indian ERP Ltd has
          launched ECOD Secure the first data management platform for ease of
          data visibility amongst manufacturers & distributors in India.
        </p>
        <p className="text-center mb-8">
          ECOD Secure thrives as the first Indian product to offer three unique
          solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-200 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Indian Panel
            </h2>

            <img
              src="/images/Indiapanel.svg"
              alt=""
              className=" rounded-lg mb-4 w-full h-[300px] object-contain object-center"
            />

            <p className="text-base mb-4">
              Easy & simple way to get your Secondary Sales Data
            </p>
            <button className="bg-black hover:bg-[#444242] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Read More
            </button>
          </div>
          <div className="bg-gray-200 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Advertisement on ICT
            </h2>
            <img
              src="/images/ad.svg"
              alt=""
              className=" rounded-lg mb-4 w-full h-[300px] object-contain object-center"
            />
            <p className="text-base mb-4">
              Advertise to India's top 2.5 Lakh+ Retailers & 1 Lakh+
              Distributors on Indian ERP Screen
            </p>
            <button className="bg-black hover:bg-[#444242] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Read More
            </button>
          </div>
          <div className="bg-gray-200 rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Digital Salesman (Flip)
            </h2>
            <img
              src="/images/salesman.svg"
              alt=""
              className=" rounded-lg mb-4 w-full h-[300px] object-contain object-center"
            />
            <p className="text-base mb-4">
              Knock out the competition by substituting your products
            </p>
            <button className="bg-black hover:bg-[#444242] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ecod;

const Ecod = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-center">
          <h1 className="text-[42px] font-bold text-center max-w-5xl text-neutral-700 mb-8">
            Grow your Pharma Business 3X Faster with ECOD Secure
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-lg font-base text-center mb-8 max-w-5xl">
            Stepping up in the world of data & technology, Indian ERP Ltd has
            launched ECOD Secure the first data management platform for ease of
            data visibility amongst manufacturers & distributors in India.
          </div>
        </div>
        <p className="text-center font-light mb-8">
          <q>
            {" "}
            ECOD Secure thrives as the first Indian product to offer three
            unique solutions.
          </q>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*Card 1 */}

          <div className="border border-neutral-200 p-6">
            <img
              src="/images/Indiapanel.svg "
              alt=""
              className=" rounded-sm mb-4 w-full h-[300px] object-contain object-center border"
            />
            <h2 className="text-2xl font-semibold text-start">Indian Panel</h2>
            <p className="text-base my-4 font-light">
              Easy & simple way to get your Secondary Sales Data Online
            </p>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-black transition-all ease-linear duration-300 hover:text-black py-2 px-4 rounded focus:outline-none text-md focus:shadow-outline">
              Read More
            </button>
          </div>

          {/*Card 2 */}

          <div className="border border-neutral-200 p-6">
            <img
              src="/images/ad.svg"
              alt=""
              className="rounded-sm mb-4 w-full h-[300px] object-contain object-center border"
            />
            <h2 className="text-2xl font-semibold text-start">
              Advertisement on ICT
            </h2>
            <p className="text-base my-4 font-light">
              Advertise to India's top 2.5 Lakh+ Retailers & 1 Lakh+
              Distributors on Indian ERP Screen
            </p>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-black transition-all ease-linear duration-300 hover:text-black py-2 px-4 rounded focus:outline-none text-md focus:shadow-outline">
              Read More
            </button>
          </div>

          {/*Card 3 */}

          <div className="border border-neutral-200  p-6">
            <img
              src="/images/salesman.svg"
              alt=""
              className="rounded-sm mb-4 w-full h-[300px] object-contain object-center border"
            />
            <h2 className="text-2xl font-semibold text-start">
              Digital Salesman (Flip)
            </h2>
            <p className="text-base my-4 font-light">
              Knock out the competition by substituting your products
            </p>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-black transition-all ease-linear duration-300 hover:text-black py-2 px-4 rounded focus:outline-none text-md focus:shadow-outline">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ecod;

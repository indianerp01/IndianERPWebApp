const Ecod = () => {
    return (
      <>
        <div className="container mx-auto px-4  m-20 ">
          <div className="flex items-center justify-center">
            <h1 className="text-[39px] font-bold text-center max-w-5xl text-neutral-700 mb-10">
              Grow your Business 3X Faster with ECOD Secure
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {/*Card 1 */}
  
            <div className="border border-neutral-200 p-6">
              <img
                src="/ERP/ERP-4.svg "
                alt=""
                className=" rounded-sm mb-4 w-full h-[300px] object-contain object-center border "
              />
              <h2 className="text-2xl font-semibold text-start">MR Panel
              </h2>
              <p className="text-base my-4 font-light">
              The ultimate solution for marketing representatives to simplify the reporting tasks and enhance their efficiency.
              </p>        
            </div>
  
            {/*Card 2 */}
  
            <div className="border border-neutral-200 p-6">
              <img
                src="/images/Ecod.svg"
                alt=""
                className="rounded-sm mb-4 w-full h-[300px] object-contain object-center border"
              />
              <h2 className="text-2xl font-semibold text-start">
              ECOD
              </h2>
              <p className="text-base my-4 font-light">
              Each Company Own Data A reliable data management solution for easy, secure, and error-free data sharing for distributors and retailers.
              </p>
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
              An advertising solution that allows users to increase sales by 2X by promoting products on Indian ERP software to a large customer base.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default Ecod;
  
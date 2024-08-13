
const FAQSection = () => {
  return (
    <section>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-tight text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer">
            Why Do You Need Pharmacy Software?
            </summary>
            <div className="px-4 pb-4">
              <p>
              A pharmacy management software allows you to track the entire purchase history of a customer, their medical information, prescriptions, bills and other relevant information. This will give a better experience to the customers, and at the same time, easily keep track of your sales.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer">
            What is the benefits of the Pharmacy Management Software for Pharmacy?
            </summary>
            <div className="px-4 pb-4">
              <p>
              The pharmacy software provides transparency to any business process. Using pharmacy software is a boon for pharmacists as it helps is ease out the business operations & helps in running a business more competently. It also makes sales and profits more predictable and increases clientele.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer">
            Which software is best for pharmacy?
            </summary>
            <div className="px-4 pb-4">
              <p>
              There are numerous pharmacy softwares available in the market. The pharmacy software which is capable of handling every detailed process & is affordable is the best pharmacy software for any business. For small & medium businesses Marg pharmacy software is one of the best software that is available for use.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer">
            Which is the best pharmacy software for small businesses?
            </summary>
            <div className="px-4 pb-4">
              <p>
              The cost of pharmacy software depends on the complexity, quantity and requirement of the number of users of the software and hardware.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer">
            Which is the best pharmacy software for small businesses?
            </summary>
            <div className="px-4 pb-4">
              <p>
              Marg pharmacy software is one of the best pharmacy software for small businesses. Marg pharmacy software provides all updated features & options to digitize a pharmacy.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

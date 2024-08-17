import React from 'react';
import { FAQItemProps } from '@/app/TS/interfaces/interface';

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <details>
      <summary className="py-2 outline-none cursor-pointer">{question}</summary>
      <div className="px-4 pb-4">
        <p>{answer}</p>
      </div>
    </details>
  );
};

const FAQSection: React.FC = () => {
  const faqItems: FAQItemProps[] = [
    {
      question: 'Why Do You Need Pharmacy Software?',
      answer:
        'A pharmacy management software allows you to track the entire purchase history of a customer, their medical information, prescriptions, bills and other relevant information. This will give a better experience to the customers, and at the same time, easily keep track of your sales.',
    },
    {
      question: 'What is the benefits of the Pharmacy Management Software for Pharmacy?',
      answer:
        'The pharmacy software provides transparency to any business process. Using pharmacy software is a boon for pharmacists as it helps is ease out the business operations & helps in running a business more competently. It also makes sales and profits more predictable and increases clientele.',
    },
    {
      question: 'Which software is best for pharmacy?',
      answer:
        'There are numerous pharmacy softwares available in the market. The pharmacy software which is capable of handling every detailed process & is affordable is the best pharmacy software for any business. For small & medium businesses Marg pharmacy software is one of the best software that is available for use.',
    },
    {
      question: 'Which is the best pharmacy software for small businesses?',
      answer:
        'The cost of pharmacy software depends on the complexity, quantity and requirement of the number of users of the software and hardware.',
    },
    {
      question: 'Which is the best pharmacy software for small businesses?',
      answer:
        'Marg pharmacy software is one of the best pharmacy software for small businesses. Marg pharmacy software provides all updated features & options to digitize a pharmacy.',
    },
  ];

  return (
    <section>
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-2xl font-bold text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          {faqItems.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
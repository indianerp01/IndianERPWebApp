import React from 'react';

import { FAQItemProps } from  "@/app/TS/interfaces/interface"

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <details>
      <summary className="py-2 outline-none cursor-pointer my-2 ">
        <span className="text-md">{question}</span>
      </summary>
      <div className=" text-md px-4 pb-4 text-neutral-600">
        <p>{answer}</p>
      </div>
    </details>
  );
};

export default FAQItem;
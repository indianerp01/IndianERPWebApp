import { Titlee } from "@/app/TS/interfaces/interface";
import React from "react";

const Title = ({ title }: Titlee) => {
  return (
    <div className="text-4xl text-center py-20 font-bold leading-loose text-neutral-600 uppercase">
      {title}
    </div>
  );
};

export default Title;

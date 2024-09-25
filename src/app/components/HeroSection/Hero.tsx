/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { HeroProps } from '@/app/TS/interfaces/interface';



const Hero = ({ title, description, buttonText, buttonLink, imageSrc } : HeroProps) => {
  return (
    <div>
      <div className="px-7 lg:px-10  mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14">
        <div className="lg:px-5 flex flex-col gap-y-5 ">
          <h1 className=" text-5xl  text-neutral-700 md:text-5xl xl:text-5xl leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold sm:text-4xl max-sm:text-center">
            {title} <br /> 
          </h1>
          <p className="text-base text-neutral-600 md:max-w-xl md:mx-auto lg:mx-0  md:text-center lg:text-left">
            {description}
          </p>
          <div className="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
            <a
              href={buttonLink}
              className="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-black px-6 py-2.5 hover:bg-white  hover:text-black border border-black transition-all ease-linear duration-300"
            >
              <span>{buttonText}</span>
            </a>
          </div>
        </div>
        <div className=" md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10  bg-gray-200 bg-opacity-20">
        
          <img
            className="rounded-3xl w-full border h-[400px]  object-fit-cover  grayscale-[20%]"
            src={imageSrc}
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

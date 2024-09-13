import { HeroHeader } from '@/app/TS/interfaces/interface';
import Link from 'next/link';

 
const Header = ({ title, description, link }:HeroHeader) => {
  return (
    <div className=" m-20 flex justify-center items-center">
      <div className="text-center">
        <h1 className="my-3 text-5xl font-bold tracking-tight text-gray-800   max-sm:text-4xl">
          {title}
        </h1>
        <div>
          <p className="max-w-4xl mx-auto my-2  text-gray-500 md:leading-relaxed md:text-lg max-sm:text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-6 md:flex-row md:gap-8">
          <Link
            className="  text-center px-6 py-3 text-white transition-all rounded-md  bg-black hover:bg-white hover:text-black border border-black "
            href={link}
          >
            Contact Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
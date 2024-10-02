import { HeroHeader } from "@/app/TS/interfaces/interface";
import Image from "next/image";
import Link from "next/link";

const Header = ({
  title,
  description,
  link,
  img1,
  img2,
  img3,
  heading1,
  heading2,
  heading3,
}: HeroHeader) => {
  return (
    <div className=" mt-10 flex justify-center items-center">
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

   {/*our services */}

        <div className="mt-10 border p-10 pb-4 rounded-lg">
          {/* <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-800   max-sm:text-3xl  text-start">
            Our Services
          </h1> */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  ">
            <div className="flex flex-col items-center">
              <Image
                src={img1}
                alt="Image 1"
                className="rounded-md  w-[250px] h-[230px] border  object-fit-cover "
              />
              <h3 className="text-lg font-medium mt-2">{heading1}</h3>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={img2}
                alt="Image 2"
                className="rounded-md  w-[250px] h-[230px] border object-fit-cover"
              />
              <h3 className="text-lg font-medium mt-2">{heading2}</h3>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={img3}
                alt="Image 3"
                className="rounded-md  w-[250px] h-[230px] border object-fit-cover"
              />
              <h3 className="text-lg font-medium mt-2">{heading3}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

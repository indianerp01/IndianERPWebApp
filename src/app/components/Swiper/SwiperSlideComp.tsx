const SwiperSlideComp = ({ imgLink, title, desc }: any) => {
  return (
    <div className="h-[500px] border rounded-sm flex items-center justify-center ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 p-5 md:mb-5 mb-20">
        {/* Right */}
        <div className="h-full w-full md:pt-0 pt-16">
          <img
            src={imgLink}
            alt=""
            className="h-auto object-contain rounded-tr-3xl rounded-bl-3xl my-1"
          />
        </div>

        {/* Left */}
        <div className="flex items-start justify-center flex-col gap-y-5">
          <div className="bg-stone-100 ring-1 ring-stone-400 rounded-md px-4 py-1">
            <h1>Latest Offerings</h1>
          </div>
          <div>
            <h1 className="sm:text-3xl text-lg font-semibold text-start">
              {title}
            </h1>
          </div>
          <div className="text-base text-start line-clamp-3">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlideComp;

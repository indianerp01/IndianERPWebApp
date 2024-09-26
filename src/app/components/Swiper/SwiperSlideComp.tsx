const SwiperSlideComp = () => {
  return (
    <div className="h-[500px] border rounded-sm flex items-center justify-center ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 p-5 md:mb-5 mb-20">
        {/* Right */}
        <div className="h-full w-full md:pt-0 pt-16">
          <img
            src="https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-auto object-cover rounded-tr-3xl rounded-bl-3xl"
          />
        </div>

        {/* Left */}
        <div className="flex items-start justify-center flex-col gap-y-5">
          <div className="bg-stone-100 ring-1 ring-stone-400 rounded-md px-4 py-1">
            <h1>Latest Offerings</h1>
          </div>
          <div>
            <h1 className="sm:text-3xl text-lg font-semibold text-start">
              100% Free Invoice software fir your business
            </h1>
          </div>
          <div className="text-base text-start line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            esse cumque labore rerum. Sequi eaque neque, nemo voluptatem in
            dignissimos obcaecati magnam esse non aspernatur laborum et
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlideComp;

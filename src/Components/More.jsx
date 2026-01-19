const More = (Props) => {
  return (
    <>
      <div className="group inline-block gap-2 px-3  ">
        <div
          className="w-[218px] h-[310px]  bg-cover bg-center inline-block rounded-lg  
                    flex items-start justify-start text-left  overflow-hidden
                     transition-transform duration-300 ease-out
                     border border-black card-bg rounded-xl
                      group-hover:scale-105 group-hover:shadow-xl group-hover:z-10 relative "
        >
          <h1 className="text-white p-4 ps-3 font-bold text-2xl">
            {Props.title}
          </h1>
          <p className="text-gray-300 ps-3 pe-3 leading-tight">{Props.desc}</p>
          <img
            src={Props.img}
            className="w-20 h-20 opacity-40 absolute bottom-4 right-4 opacity-80 filter invert-[29%] sepia-[93%] saturate-[4580%] hue-rotate-[292deg] brightness-[96%] contrast-[105%]"


            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default More;

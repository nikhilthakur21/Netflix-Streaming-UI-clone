const Trending = (Props) => {
 
  return (
    <>
    

        
       <div className="group inline-block gap-2 px-3  ">
        
        <div className="w-[158px] h-[237px]  bg-cover bg-center inline-block rounded-lg  
                    flex items-start justify-start text-left  overflow-hidden
                     transition-transform duration-300 ease-out
                    
                      group-hover:scale-105 group-hover:shadow-xl group-hover:z-10 ">
                     
          
          <img
          src={Props.image}
          className="w-full h-full object-cover"
        />
        </div>  
        </div>
      

    </>
  );
};


export default Trending

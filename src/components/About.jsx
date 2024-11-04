import React from "react";

function About() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.3"  className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[3.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className=" w-full flex border-t-[1px] mt-20 border-[#8eaa2a]">
        <div className="w-1/2">
        <h1 className="text-7xl mt-5">Our approach:</h1>
        <button className="flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-7 uppercase">
            Read More
            <div className="w-2.5 h-2.5 bg-zinc-100 rounded-full "></div>
        </button>

        </div>
        <div className="rounded-3xl  w-[650px] h-[470px] mt-5 bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]">
        </div>

      </div>
    </div>
  );
}

export default About;

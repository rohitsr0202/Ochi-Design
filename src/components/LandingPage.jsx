import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen pt-1">
      <div className="textstructure mt-52 px-16">
        {["We create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className=" w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1],duration:1 }}
                    className=" mr-1vw w-[9vw] h-[6vw] bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] mt-4 rounded-lg"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center px-20 py-5">
        {[
          "For public and private companies",
          "From the frist pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-normal tracking-light leading-none ">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-[1px] border-zinc-500 rounded-full font-normal">
            START THE PEOJECT
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full ">
            <span className=" rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

// import { motion } from 'framer-motion'
import { motion } from "framer-motion";
import React from "react";


function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl text-white  bg-[#014D43]">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex whitespace-nowrap overflow-hidden ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease:"linear", duration:12 }}
          className="text-[20vw] leading-none tracking-tighter font-bold uppercase mb-5 pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease:"linear", duration:12 }}
          className="text-[20vw] leading-none tracking-tighter font-bold uppercase mb-5 pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;

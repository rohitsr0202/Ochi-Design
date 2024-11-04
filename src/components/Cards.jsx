import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center px-[50px] gap-5 bg-zinc-100'>
        <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#014D43] flex items-center justify-center'>
            <img className='w-[8vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='px-5 py-1 border-2 border-[#9EC360] text-[#9EC360] rounded-3xl font-bold absolute left-10 bottom-10'>&copy;2019-2022</button>
        </div>
        </div>
        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#212121] flex items-center justify-center'>
            <img className='w-[7vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='px-5 py-1 border-2 border-[#FFF] text-[#FFF] rounded-3xl font-bold absolute left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative rounded-xl w-full h-full bg-[#212121] flex items-center justify-center'>
            <img className="w-[7vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='px-5 py-1 border-2 border-[#FFF] text-[#FFF] rounded-3xl font-bold absolute left-10 bottom-10'>BUSINESS BOOTCAMP ALUMINI</button>
        </div>
        </div>
    </div>
  )
}

export default Cards

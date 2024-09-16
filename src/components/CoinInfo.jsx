import React, { useState } from 'react'

const CoinInfo = ({title, desc}) => {

    const shortDesc = desc?.slice(0, 300) + "<br/><p style='color:var(--grey);cursor:pointer;'>Read More...</p>";
    const longDesc = desc + "<br/><p style='color:var(--grey);cursor:pointer;'>Read Less...</p>";

   const [toggle, setToggle] = useState(false);

  return (
    <div className=" p-4 pb-2 rounded-xl w-[90%] block m-4 my-8 mx-auto text-gray-300 bg-[#0F0F0F] border-2 border-customYellow">
    <h1 className=' text-xl md:text-3xl m-0 text-white'>{title}</h1>
    <p
      dangerouslySetInnerHTML={{
        __html: desc?.length >= 300 ? (toggle ? longDesc : shortDesc) : desc,
      }}
      className="hover:text-gray-50 transition-all text-base md:text-xl leading-5 md:leading-8 mt-4 cursor-pointer"
      onClick={() => setToggle(!toggle)}
    />
  </div>
  )
}

export default CoinInfo
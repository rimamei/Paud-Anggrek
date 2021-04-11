import React from "react";
import * as Fa from "react-icons/fa";

const Quote = () => {
  return (
    <div className="mb-20 flex flex-col text-center">
      <h1 className="text-3xl text-center mb-8">PENGAJAR KAMI</h1>
      <div className="flex justify-center mx-16">
        <Fa.FaQuoteLeft />
        <h1 className="text-base lg:text-xl mb-3 font-normal">
          est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
          dolores neque fugiat blanditiis voluptate porro vel
        </h1>
        <Fa.FaQuoteRight />
      </div>
      <h1 className="text-base">-Nur-</h1>
    </div>
  );
};

export default Quote;

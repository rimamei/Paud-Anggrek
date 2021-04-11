import React from "react";

const Content = () => {
  return (
    <div className="mt-20 flex flex-col-reverse justify-center mx-14 lg:mx-14 lg:flex-row lg:justify-around items-center mb-24">
      <div className="text-base text-center font-light md:text-xl lg:text-2xl lg:ml-8 lg:text-left ">
        <h1>
          Mari Belajar{" "}
          <span className="text-xl md:text-2xl lg:text-3xl font-normal">
            Membaca
          </span>{" "}
          dan{" "}
          <span className="text-xl md:text-2xl lg:text-3xl font-normal">
            Menghitung
          </span>
        </h1>
        <h1>
          Bersama{" "}
          <span className="text-xl md:text-2xl lg:text-3xl font-normal">
            Paud Anggrek
          </span>
        </h1>
      </div>
      <img className="w-full lg:w-2/4 mb-10" src="images/animasi.png" alt="" />
    </div>
  );
};

export default Content;

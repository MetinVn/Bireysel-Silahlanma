import React from "react";
import { BsExclamationLg } from "react-icons/bs";
import UsaMap from "./usaMap";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col w-full mx-auto">
        <div className="bg-white justify-center">
          <div className="flex items-center justify-center my-3">
            <BsExclamationLg className="order-first w-[25px] h-[25px] mr-[-5px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] md:mr-[-10px] lg:mr-[-29px] z-10 shadow-lg shadow-black/40 bg-black/90 rounded-full fill-white/60" />
            <h1 className='bg-white px-3 py-1 text-[10px] md:px-5 md:py-2 lg:px-10 lg:py-4 md:text-md lg:text-2xl tracking-tighter font-semibold shadow-lg shadow-black/40 font-["Arial"]'>
              Amerika Birleşik Devletleri
            </h1>
          </div>
          <div className="lg:col-span-2">
            <UsaMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

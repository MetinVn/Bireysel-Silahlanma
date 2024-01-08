import React from "react";
import Map from "./World-map";
import { BsExclamationLg } from "react-icons/bs";
const Footer = () => {
  
  return (
    <>
      <div className="hidden md:flex md:flex-col md:bg-slate-300 md:w-full md:justify-between">
        <div className="py-1 w-full bg-gradient-to-b from-black/30 via-slate-200/10 to-white"></div>

        <div className="flex flex-col min-w-fit w-full gap-10 md:p-5 lg:p-7 bg-white">
          <div className="flex flex-row m-auto justify-between md:max-w-[850px] lg:max-w-[1370px] md:gap-[150px] min-w-fit w-full">
            <div className="flex items-center">
              <h1 className='bg-white px-3 py-1 text-[10px] md:px-5 md:py-2 lg:px-10 lg:py-4 md:text-md lg:text-2xl tracking-tighter font-semibold shadow-lg shadow-black/40 font-["Arial"]'>
                Amerika Birleşik Devletleri
              </h1>
              <BsExclamationLg className="order-first w-[25px] h-[25px] mr-[-5px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] md:mr-[-10px] lg:mr-[-29px] z-10 shadow-lg shadow-black/40 bg-black/90 rounded-full fill-white/60" />
            </div>
            <div className="flex items-center">
              <h1 className='bg-white px-3 py-1 text-[10px] md:px-5 md:py-2 lg:px-10 lg:py-4 md:text-md lg:text-2xl tracking-tighter font-semibold shadow-lg shadow-black/40 font-["Arial"]'>
                Suç oranları
              </h1>
              <BsExclamationLg className="order-first w-[25px] h-[25px] mr-[-5px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] md:mr-[-10px] lg:mr-[-29px] z-10 shadow-lg shadow-black/40 bg-black/90 rounded-full fill-white/60" />
            </div>
          </div>
          <Map/>
        </div>
      </div>
      {/*Mobile view */}
      <div className="md:hidden">
        <Map/>
      </div>
    </>
  );
};

export default Footer;

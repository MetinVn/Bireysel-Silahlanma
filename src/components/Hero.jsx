import React from "react";
import photor from "../icons/photo-r.png";
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="mt-[30px] lg:mt-[50px] min-w-fit w-full bg-white">
      <div className="flex bg-[#FDE83D] min-w-fit w-full h-[100px] max-h-[150px] gap-3 md:h-[200px] md:gap-5 lg:gap-10 md:max-h-[190px] lg:max-h-[240px] lg:h-full ">
        {/*Flex 1*/}
        <div className="h-[40px] md:h-[120px] flex items-center m-auto lg:h-[240px]">
          <img
            src={photor}
            className="w-[40px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[170px] lg:h-[140px] rotate-[-90deg]"
            alt="photo"
          />
          <div className="h-[30px] py-1 min-w-[3px] ml-[-5px] mr-[5px] md:h-[90px] md:py-2 md:min-w-[4px] md:ml-[-20px] md:mr-[12px] lg:py-5 lg:h-[130px] lg:min-w-[8px] bg-black lg:ml-[-34px] lg:mr-5"></div>
          <div className="flex items-center">
            <p className='text-[16px] leading-[15px] tracking-tighter md:text-[45px] lg:text-[85px] font-semibold md:leading-[55px] lg:leading-[65px] md:tracking-wide font-["Arial"]'>
              Bireysel <br /> Silahlanma
            </p>
          </div>
        </div>

        {/*Flex 2*/}
        <div className='relative flex flex-col m-auto mr-[10px] min-h-[69px] sm:h-fit max-w-[170px] md:mr-[50px] lg:mr-[450px] md:max-w-[360px] md:min-w-[280px] lg:max-w-[500px] lg:min-w-[460px] md:p-3 lg:p-5 font-["Arial"] bg-white shadow-lg shadow-black/30'>
          <h1 className="text-[9px] indent-2 md:text-lg md:indent-2 lg:text-2xl lg:indent-5 font-bold">Yasaları oku...</h1>
          <div className="flex flex-row">
            <GoDotFill className="w-5 md:w-10 lg:w-16" />
            <p className="flex flex-row text-[7px] leading-[7px] tracking-[-0.2px] md:text-[13px] lg:text-[14px] md:leading-[14px] lg:leading-[19px] md:tracking-tighter lg:tracking-tight font-semibold">
              {" "}
              Son zamanlarda hem dünyada hem de Türkiye'de şiddet davranışları
              birbirini taklit ederek toplumlarda yayılmaktadır. Çocuklar ve
              gençlerle ilgili şiddet haberleri giderek yaygın şiddet
              davranışları haline gelmekte ve ateşli silahların şiddet
              olaylarında kullanım oranı da artmaktadır.
            </p>
          </div>
          <div className="absolute bottom-[-5px] right-[-5px] md:bottom-[-10px] md:right-[-15px] shadow-lg shadow-black/40">
            <Link 
              to='/details'
              className="flex flex-row h-full border border-black items-center text-center gap-2 bg-black text-white text-[11px] md:text-sm lg:text-lg md:px-2 lg:px-4 md:py-0 lg:py-1 hover:bg-white hover:text-black duration-300 group">
              Detaylar{" "}
              <FaArrowRightLong className="fill-white p-[1px] md:p-0 group-hover:fill-black duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

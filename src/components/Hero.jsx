import React, { memo } from "react";
import photor from "../icons/photo-r.png";
import { Link } from "react-router-dom";

const GoDotFill = React.lazy(() => import("react-icons/go").then((module) => ({ default: module.GoDotFill })));
const FaArrowRightLong = React.lazy(() =>
  import("react-icons/fa6").then((module) => ({
    default: module.FaArrowRightLong,
  }))
);

const Hero = memo(() => {
  return (
    <div className="w-full bg-white">
      <div className="flex bg-[#a2d2ff] pt-9 w-full h-[200px] items-center max-h-[240px]">
        <div className="h-[120px] flex items-center mx-auto">
          <img src={photor} className="w-[100px] h-[100px] transform rotate-[-90deg]" alt="photo" />
          <div className="h-[90px] py-2 min-w-[4px] mx-[12px] bg-black"></div>
          <p className='text-[40px] leading-[55px] tracking-wide font-semibold font-["Arial"]'>
            Bireysel <br /> Silahlanma
          </p>
        </div>
        <div className='relative flex flex-col mx-auto min-h-[69px] max-w-[500px] min-w-[460px] p-5 font-["Arial"] bg-white shadow-lg shadow-black/30'>
          <h1 className="text-lg indent-2 font-bold">Yasaları oku...</h1>
          <div className="flex flex-row">
            <React.Suspense fallback={<div>Loading...</div>}>
              <GoDotFill className="w-10" />
            </React.Suspense>
            <p className="text-[13px] leading-[14px] tracking-tighter font-semibold">
              Son zamanlarda hem dünyada hem de Türkiye{"'"}de şiddet davranışları birbirini taklit ederek toplumlarda
              yayılmaktadır. Çocuklar ve gençlerle ilgili şiddet haberleri giderek yaygın şiddet davranışları haline
              gelmekte ve ateşli silahların şiddet olaylarında kullanım oranı da artmaktadır.
            </p>
          </div>
          <div className="absolute bottom-[-10px] right-[-15px] shadow-lg shadow-black/40">
            <React.Suspense fallback={<div>Loading...</div>}>
              <Link
                to="/Bireysel-Silahlanma/details"
                className="flex flex-row h-full border border-black items-center text-center gap-2 bg-black text-white text-sm px-2 py-1 hover:bg-white hover:text-black duration-300 group">
                Detaylar{" "}
                <FaArrowRightLong className="fill-white p-0 group-hover:fill-black duration-300 group-hover:translate-x-1" />
              </Link>
            </React.Suspense>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;

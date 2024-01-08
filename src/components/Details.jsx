import React from "react";
import photo from "../icons/photo.jpg";
import photor from "../icons/photo-r.png";
import { IoWarningOutline } from "react-icons/io5";
import transition from "../Transition";
import { Link } from "react-router-dom";
const Details = () => {
  return (
    <>
      <div className="fixed top-0 flex items-center h-[30px] lg:h-[50px] justify-end z-[14] min-w-fit w-full bg-white shadow-lg shadow-black/20">
        {/*Header image*/}
        <div className="flex flex-col justify-end items-center overflow-hidden m-auto bg-white shadow-lg rounded-full shadow-black/40 mt-[-30px] w-[80px] h-[80px] md:mt-[-60px] lg:mt-[-80px] md:w-[130px] md:h-[130px] lg:w-[180px] lg:h-[190px]">
          <img
            src={photo}
            className="w-[60px] h-[60px] md:w-[100px] md:h-[90px] lg:w-[140px] lg:h-[110px] object-cover rounded-full"
            alt="photo"
          />
        </div>
        {/*Header image*/}
      </div>
      <div className="mt-auto md:mt-[25px] lg:mt-[50px] bg-white">
        <div className="h-[150px] md:h-[240px] flex justify-between items-center bg-[#FDE83D]">
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
        </div>

        <div className="m-auto h-fit w-full flex flex-col items-center text-center">
            <div className="w-full max-w-[780px] text-start">
              <Link to="/Bireysel-Silahlanma" className="underline">Geri dön</Link>
            </div>
            <p className="text-lg underline-offset-2 pb-2 md:text-3xl md:underline-offset-[5px] md:pb-5 underline">
              Yasalar
            </p>
          <ul className="p-3 mx-3 md:m-auto text-xs md:text-xl md:p-10 bg-slate-300 rounded-lg">
            <li>Valilik Makamına Dilekçe</li>
            <li>Silah Satın Alma İstek Formu</li>
            <li>Nüfus Cüzdanı Sureti</li>
            <li>Nüfus Cüzdanı Aslı</li>
            <li>İkametgah Belgesi</li>
            <li>Adli Sicil Belgesi</li>
            <li>Doktor Raporu (Devlet Hastanesinden Sağlık Kurul Raporu)</li>
            <li>
              5 Adet Fotoğraf (Son 6 Ay içerisinde Renkli Çekilmiş Vesikalık
              Fotoğraf)
            </li>
          </ul>
          <a
            className="text-sm md:text-xl underline text-red-600 hover:text-red-400 duration-300"
            href="http://www.vakfikebir.gov.tr/silah-tasima-ve-bulundurma-ruhsatlari-icin-istenen-belgeler"
            target="blank"
          >
            Gerekli belgelerin devamını görmek ve daha fazla bilgi edinmek için
            buraya tıklayın
          </a>
          <p className="flex items-center text-sm mx-2 mt-3 md:text-[24px] md:mt-5 py-1 px-2 rounded-md border border-yellow-600 bg-yellow-300 text-black">
            <IoWarningOutline size={25} className="stroke-yellow-700" />
            Her ülkeye göre silah taşıma yasaları farklıdır
          </p>
        </div>
      </div>
    </>
  );
};

export default transition(Details);

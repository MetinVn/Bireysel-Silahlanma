import React from "react";
import photo from "../icons/photo.jpg";
const Header = () => {
  return (
    <div className="fixed top-0 flex items-center h-[30px] lg:h-[50px] z-[14] w-full bg-white shadow-lg shadow-black/20">
      <div className="flex flex-col justify-end items-center overflow-hidden m-auto bg-white shadow-lg rounded-full shadow-black/40 mt-[-30px] w-[80px] h-[80px] md:mt-[-60px] lg:mt-[-80px] md:w-[130px] md:h-[130px] lg:w-[180px] lg:h-[190px]">
        <img
          src={photo}
          className="w-[60px] h-[60px] md:w-[100px] md:h-[90px] lg:w-[140px] lg:h-[110px] object-cover rounded-full"
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Header;

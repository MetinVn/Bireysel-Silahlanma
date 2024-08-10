import React from "react";
import { motion } from "framer-motion";
import photo from "../icons/photo.jpg";
import photor from "../icons/photo-r.png";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <header className="fixed top-0 flex items-center h-[30px] lg:h-[50px] justify-end z-[14] min-w-fit w-full bg-white shadow-lg shadow-black/20">
        <div className="flex flex-col justify-end items-center overflow-hidden m-auto bg-white shadow-lg rounded-full shadow-black/40 mt-[-30px] w-[80px] h-[80px] md:mt-[-60px] lg:mt-[-80px] md:w-[130px] md:h-[130px] lg:w-[180px] lg:h-[190px]">
          <img
            src={photo}
            className="w-[60px] h-[60px] md:w-[100px] md:h-[90px] lg:w-[140px] lg:h-[110px] object-cover rounded-full"
            alt="photo"
          />
        </div>
      </header>

      <section className="mt-auto md:mt-[25px] lg:mt-[50px] bg-white">
        <motion.div
          className="h-[150px] md:h-[240px] flex justify-between items-center bg-[#a2d2ff]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
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
        </motion.div>

        <motion.div
          className="m-auto h-fit w-full flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}>
          <div className="w-full max-w-[780px] text-start">
            <Link to="/Bireysel-Silahlanma" className="underline">
              Geri dön
            </Link>
          </div>

          <p className="text-lg underline-offset-2 pb-2 md:text-3xl md:underline-offset-[5px] md:pb-5 underline">
            Türkiye ve Silah Kontrolü
          </p>

          <div className="p-3 mx-3 md:m-auto text-xs md:text-xl md:p-10 bg-slate-300 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Güncel Durum
            </h2>
            <p className="mb-4">
              Türkiye'de bireysel silahlanma oranları son yıllarda artmaktadır.
              Ateşli silahların kullanımıyla gerçekleşen şiddet olaylarının
              sayısı da buna paralel olarak yükselmektedir.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">Etkileri</h2>
            <p className="mb-4">
              Silah kullanımı toplum üzerinde derin psikolojik ve sosyal etkiler
              yaratmaktadır. Bireylerin güvenlik hissini azaltmakta ve toplumsal
              huzuru tehdit etmektedir. Silah kullanımı, hem bireysel hem de
              toplumsal seviyede uzun vadeli travmalara ve güvenlik sorunlarına
              yol açar.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Uzun Vadeli Yan Etkiler
            </h2>
            <p className="mb-4">
              Silah kullanımının uzun vadeli yan etkileri arasında artan şiddet
              olayları, toplumda güvensizlik hissi, psikolojik travmalar ve aile
              içi şiddet oranlarının yükselmesi bulunmaktadır. Ayrıca,
              silahların yanlışlıkla veya kasıtlı olarak kullanılma riski, ciddi
              yaralanmalar ve ölümlerle sonuçlanabilir.
            </p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Details;

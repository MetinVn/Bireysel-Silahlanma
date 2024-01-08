import React from "react";
import photo from "../icons/photo.jpg";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
const Header = () => {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  return (
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
      <ThemeProvider theme={theme}>
          <ChatBot
            steps={[
              {
                id:'1',
                message:'Bilgi almak istediğin birini seç',
                trigger:2,
              },
              {
                id: '2',
                options: [
                  { value: 1, label: 'Av Tezkeresi ve Sahiplik Belgesi İçin İstenen Belgeler', trigger: '3' },
                  { value: 2, label: 'Patlayıcı Madde Ruhsatı Almak İsteyenlerden İstenen Belgeler', trigger: '4' },
                ],
              },
              {
                id: '3',
                component: (
                    <ul>
                      <li>1)Valilik Makamına Dilekçe</li>
                      <li>2)Nüfus Cüzdanı Aslı</li>
                      <li>3)Nüfus Cüzdanı Sureti</li>
                      <li>4)İkametgah Belgesi</li>
                      <li>5)Adli Sicil Belgesi</li>
                      <li>6)Doktor Raporu</li>
                      <li>7)2 Adet Yarım Kapaklı karton dosya</li>
                      <li>8)5 adet renkli fotoğraf</li>
                      <li>9)Av Tezkeresi için müracaat edenlerden Avcılar Derneğinden alacakları Avcılık Sertifikası</li>
                    </ul>
                ),
                trigger:2,
              },
              {
                id: '4',
                component:(
                  <ul>
                    <li>1)Valilik Makamına Dilekçe</li>
                    <li>2)Depolama İzin Belgesi</li>
                    <li>3)Depo Tespit Tutanağı</li>
                    <li>4)Depo uygunluk Raporu veya Depo Denetleme Formu</li>
                    <li>5)Bayındırlık ve İskan Müdürlüğünden İhtiyaç Raporu</li>
                    <li>6)Noterden Taahhütname</li>
                    <li>7)Ateşçi Yeterlilik Belgesi</li>
                    <li>8)İşe Dair Belge </li>
                    <li>9)Depo Muvafakat namesi (Depo Başkasına ait ise)</li>
                    <li>10)Tehlikeli Maddeler Zorunlu Sorumluluk Sigortası Poliçesi</li>
                    <li>11)Eski İzin Belgesi (Ruhsatın yenilenmesinde)</li>
                    <li>12)Beyanname</li>
                    <li>13)Ticaret Sicil Gazetesi (En son değişikliklerin yayımlandığı)</li>
                    <li>14)Şirket İmza Sirküsü</li>
                  </ul>
                ),
                trigger:2,
              },
            ]}
            floating={true}
            hideSubmitButton={true}
            headerTitle={'Hoş geldin'}
            hideBotAvatar={true}
            placeholder={'Cevapla'}
          />
      </ThemeProvider>
    </div>
  );
};

export default Header;

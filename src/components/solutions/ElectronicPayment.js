import payment1 from "./solutionsImage/payment1.png";
import payment2 from "./solutionsImage/payment2.png";
import { TiTickOutline } from "react-icons/ti";
import "./solutionStyles/solutionsAll.css";
import "./solutionStyles/solutionsAll.css";
import highway1 from "./solutionsImage/highway1.png";
import highway2 from "./solutionsImage/highway2.png";
import highway3 from "./solutionsImage/highway3.png";
import highway4 from "./solutionsImage/highway4.png";
import highway5 from "./solutionsImage/highway5.png";

import { FaFilePdf } from "react-icons/fa";
import paymentPdf from "../../paymentPdf.pdf";

import Slider from "react-slick";

function ElectronicPayment() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div id="electronic-payment">
      <div
        id="header-smartStop"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
      >
        <h1 className="text-4xl font-bold text-white cursorCity text-center">
          ELEKTRONİK ÜCRET TOPLAMA (KİOSK) SİSTEM ÇÖZÜMLERİ
        </h1>
      </div>

      <div class="flex justify-center items-center my-12">
        <a
          href={paymentPdf}
          download="fsmElektronikOdeme.pdf"
          class="inline-block"
        >
          <FaFilePdf class="text-5xl" />
        </a>
      </div>

      <div id="infos" className="text-center">
        <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
          Otomatik Ödeme Veznesi
        </h1>
        <hr />
        <div className="responsive-class flex items-center justify-around">
          <div className="flex items-center justify-center mb-24">
            <img
              src={payment1}
              alt="im-1"
              className="text-center mx-auto w-[400]"
            />
          </div>
          <ul className="mr-20">
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
                Dokunmatik Ekran
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
                Endüstriyel PC
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
                Nakit para alma ünitesi
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
                Kilitli para saklama kasası
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
                Therman yazıcı ünitesi
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
                Self Service POS modülü
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
                Doküman tarayıcı modülü
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
                GSM/GPRS Modem bağlantısı
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
                Ethernet Bağlantısı
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
                Sunucu ve Uygulama Yazılımı
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
                Entegrasyon
              </li>
            </div>
          </ul>
          <div className="flex items-center justify-center mb-24">
            <img
              src={payment2}
              alt="im-1"
              className="text-center mx-auto w-[400]"
            />
          </div>
        </div>
      </div>

      <div id="highway">
        <div
          id="header-smartStop"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
        >
          <h1 className="text-4xl font-bold text-white cursorCity">
            OTOYOL ÇÖZÜMLERİ
          </h1>
        </div>
      </div>
      <Slider {...settings} className="my-12">
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={highway1}
            alt="im-1"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={highway2}
            alt="im-2"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={highway3}
            alt="im-3"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={highway4}
            alt="im-4"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={highway5}
            alt="im-5"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ElectronicPayment;

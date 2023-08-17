import hospital1 from "./solutionsImage/hospital1.png";
import hospital2 from "./solutionsImage/hospital2.png";
import hospital3 from "./solutionsImage/hospital3.png";
import hospital4 from "./solutionsImage/hospital4.png";
import "./solutionStyles/solutionsAll.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import hospitalVideo from "./solutionsImage/hospitalVideo.mp4";

import { FaFilePdf } from "react-icons/fa";
import hospitalPdf from "../../hospitalPdf.pdf";

import Slider from "react-slick";

function MobileHospital() {

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
    <div id="mobile-hospital">
      <div
        id="header-smartStop"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
      >
        <h1 className="text-4xl font-bold text-white cursorCity text-center">
          MOBİL HASTANE ÇÖZÜMLERİ
        </h1>
      </div>
      <div class="flex justify-center items-center my-12">
        <a
          href={hospitalPdf}
          download="fsmMobilHastane.pdf"
          class="inline-block"
        >
          <FaFilePdf class="text-5xl" />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center mx-12">
        <video controls>
          <source src={hospitalVideo} type="video/mp4"/>
          Tarayıcınız video eklentisini desteklemiyor.
        </video>
      </div>

      <div className="responsive-class flex flex-col items-center justify-center">
        <div className="flex flex-col my-24 items-center justify-around">
          <p className="mx-12 font-semibold text-lg text-center m-2">
            FSM Bilgi Teknolojileri uzun yıllara dayanan tecrübesi ile Mobil
            Hastane’yi alt yüklenici olarak tasarlamıştır.{" "}
          </p>
          <p className="mx-12 font-semibold text-lg text-center m-2">
            1 adedi tam tüm medikal donanımları ile birlikte tam set olarak
            yapılmıştır.
          </p>
          <p className="mx-12 font-semibold text-lg text-center m-2">
            2. Mobil hastane ise medikal malzemesiz olarak ana yükleniciye
            tarafımızdan teslim edilmiştir.
          </p>
        </div>
      </div>

      <div id="infos" className="responsive-class my-16">
        <h1 className="text-2xl font-bold cursorCity mb-8 mt-24 text-center">
          Mobil Hastane Oluşturan Bölümler
        </h1>
        <hr />
        <ul>
          <div className="lists my-2">
            <IoIosArrowDroprightCircle className="inline-block text-4xl text-green-500" />
            <li className="font-semibold text-lg inline-block">
              Cerrahi Müdehale Odası
            </li>
          </div>
          <div className="lists my-2">
            <IoIosArrowDroprightCircle className="inline-block text-4xl text-green-500" />
            <li className="font-semibold text-lg inline-block">
              Kan Alma Odası
            </li>
          </div>
          <div className="lists my-2">
            <IoIosArrowDroprightCircle className="inline-block text-4xl text-green-500" />
            <li className="font-semibold text-lg inline-block">
              Muayene Odası
            </li>
          </div>
          <div className="lists my-2">
            <IoIosArrowDroprightCircle className="inline-block text-4xl text-green-500" />
            <li className="font-semibold text-lg inline-block">
              Bekleme ve Sekretarya Bölümü
            </li>
          </div>
          <div className="lists my-2">
            <IoIosArrowDroprightCircle className="inline-block text-4xl text-green-500" />
            <li className="font-semibold text-lg inline-block">
              Röntgen Odası
            </li>
          </div>
        </ul>
      </div>
      <Slider {...settings} className="my-24">
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={hospital1}
            alt="im-1"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={hospital2}
            alt="im-2"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={hospital3}
            alt="im-3"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={hospital4}
            alt="im-4"
          />
        </div>
      </Slider>
    </div>
  );
}

export default MobileHospital;

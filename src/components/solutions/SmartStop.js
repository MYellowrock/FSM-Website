import "./solutionStyles/solutionsAll.css";
import turkeyMap from "./solutionsImage/turkeyMapLocations.jfif";
import { TiTickOutline } from "react-icons/ti";
import { FaFilePdf } from "react-icons/fa";
import smartStopPdf from "../../smartStopPdf.pdf";
import smartStop1 from "./solutionsImage/smartStop1.png";
import smartStop2 from "./solutionsImage/smartStop2.png";
import smartStop3 from "./solutionsImage/smartStop3.png";
import smartStop4 from "./solutionsImage/smartStop4.png";
import smartStop5 from "./solutionsImage/smartStop5.png";
import Slider from "react-slick";

function SmartStop() {
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
    <div id="smart-stop">
      <div
        id="header-smartStop"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
      >
        <h1 className="text-4xl font-bold text-white cursorCity text-center">
          AKILLI DURAK ÇÖZÜMLERİ
        </h1>
      </div>
      <div class="flex justify-center items-center my-12">
        <a
          href={smartStopPdf}
          download="fsmAkilliDurak.pdf"
          class="inline-block"
        >
          <FaFilePdf class="text-5xl" />
        </a>
      </div>
      <div id="text-part">
        <h2 className="text-2xl font-semibold text-fsm-blue my-4 text-center">
          Akıllı Durak ve Yolcu Bilgilendirme Ekranları
        </h2>
        <p className="text-lg font-medium my-6 text-center">
          Durağa gelecek otobüsün, tramvayın, metronun… gelmesine kalan süreyi
          görsel ve sesli olarak gösteren yolcu bilgilendirme ekranlarıdır.
        </p>
        <hr />
        <p className="text-2xl font-semibold text-center my-6">
          Kurulum Yaptığımız İller
        </p>
        <div className="flex justify-center items-center mb-8">
          <img
            src={turkeyMap}
            alt="turkey-map"
            width={1000}
            className="rounded-xl"
          />
        </div>
      </div>

      <div id="infos" className="text-center">
        <ul>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              RGB Led ile teknolojisi ile her satır farklı renkte
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Durakta olan aracı kırmızı renkte gösterme
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Alüminyum ve Paslanmaz Satine çelik kasa ile şık tasarımlar
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Uzak masaüstü uygulama yazılımı
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Bootloader ile uzaktan güncelleme
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              32 bit MCU teknoloisi
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Endüstriyel donanım ve tasarımlar
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              4-6mm tamperli anti reflekte cam ekran
            </li>
          </div>
        </ul>
      </div>

      <Slider {...settings} className="my-12">
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={smartStop1}
            alt="im-1"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={smartStop2}
            alt="im-2"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={smartStop3}
            alt="im-3"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={smartStop4}
            alt="im-4"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={smartStop5}
            alt="im-5"
          />
        </div>
      </Slider>

      <div id="solutions-footer" className="responsive-class flex items-center justify-around">
        <div>
          <h1 className="text-2xl font-semibold my-4">
            Sosyal Sorumluluk Projesi Akıllı Durak Sistemi
          </h1>
          <hr />
          <ul>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Çift yüzlü Led li yolcu bilgilendirme ekranı
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Wi-Fi nternet noktası
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Engelli aracı şarj noktası
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                USB şarj noktası
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Otobüs kartı bakiye sorgulama
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Panik Butonu
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Çağrı merkezi ile online sesli görüşme
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                SpeedDome kamera ile canlı görüntü
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Acil durumlarda kırmızı/beyaz/mavi ledli sinyal verici
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Durak ile Otobüs arası çift yönlü haberleşme
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Speak to text özelliği
              </li>
            </div>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold my-4">
            LCD Yolcu Bilgilendirme Ekranı
          </h1>
          <hr />
          <ul>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">PC Tabanlı</li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Endüstriyel Ekranlı
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Windows/Linux işletim sistemi
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                3G Modem/WiFi/Ethernet özelliği
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Uzaktan kontrol ve yönetim özelliği
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Online-offline çalışma
              </li>
            </div>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-semibold my-4">
            Ledli Yolcu Bilgilendirme Ekranı
          </h1>
          <hr />
          <ul>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                MCU Tabanlı
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Endüstriyel Led Modül Ekran
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Gömülü sistem mimarisi
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                3G Modem/WiFi/Ethernet özelliği
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Uzaktan kontrol ve yönetim özelliği
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Online-offline çalışma
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SmartStop;

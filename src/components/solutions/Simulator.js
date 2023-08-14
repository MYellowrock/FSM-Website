import { TiTickOutline } from "react-icons/ti";
import "./solutionStyles/solutionsAll.css";
import simulator1 from "./solutionsImage/simulator1.png";
import simulator2 from "./solutionsImage/simulator2.png";
import simulator3 from "./solutionsImage/simulator3.png";
import simulator4 from "./solutionsImage/simulator4.png";
import simulator5 from "./solutionsImage/simulator5.png";

import { FaFilePdf } from "react-icons/fa";
import simulatorPdf from "../../simulatorPdf.pdf";

function Simulator() {
  return (
    <div id="simulator">
      <div
        id="header-smartStop"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
      >
        <h1 className="text-4xl font-bold text-white cursorCity text-center">
          SİMÜLATÖR ÇÖZÜMLERİ
        </h1>
      </div>

      <div class="flex justify-center items-center my-12">
        <a
          href={simulatorPdf}
          download="fsmSimülasyon.pdf"
          class="inline-block"
        >
          <FaFilePdf class="text-5xl" />
        </a>
      </div>

      <div className="flex justify-center items-center">
        <div id="infos">
          <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
            İLERİ SÜRÜŞ EĞİTİM SİMÜLATÖRÜ
          </h1>
          <ul>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Gerçek tam kabin oto donanımı
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Frenli Servo motor kontrollü actuator motion platform
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Payload 1500Kg 6 Dof Motion Platform
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Oyun ve eğitmen Bilgisayar sistemleri
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                4 LCD Ekran ile gerçek kullanım hissi
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Araç içi göstergeler ve elektrikli tüm donanımın araç beyni
                üzerinden gerçek zamanlı kontroller
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                POMEM okulları için Hyundai Accent Era ekip Otosu simülatörü (5
                Adet)
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                BTR80 Zırhlı Personel Taşıyıcı Simülatörü (1 Adet)
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Kamaz Askeri araç simülatörü (1 Adet)
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Toyota Hilux simülatörü (1 Adet)
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={simulator1}
            alt="im-1"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
          <img
            src={simulator2}
            alt="im-2"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
        </div>
      </div>

      <div className="flex justify-center items-center my-24">
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={simulator3}
            alt="im-3"
            width={400}
            height={600}
            className="text-center mx-auto"
          />
          <img
            src={simulator4}
            alt="im-4"
            width={400}
            height={600}
            className="text-center mx-auto"
          />
        </div>
        <div id="infos">
          <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
            UÇAK SİMÜLATÖRÜ
          </h1>
          <ul>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                3 Dof motion platform
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Fiberglass kokpit
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                3 IPS LCD Ekran
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                PC GTX1050 OC
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Online UPS ise kesintisiz eğitim
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                İleri geri ayarlanabilir koltuk
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Logitech Flight Yoke System and Pedals
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Harici monitör ile eğitimi dışarıdan izleme
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Simulator için harici 192 adet kontrol butonlu dashboard
                tasarımı
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Klavye+Mouse kullanmadan, kontrol butonları üzerinden simülatörü
                çalıştırma ve kontrol
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Microsoft flight simulator ve X-plane ile uyumlu
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Uçak simülatör oyunlarına kolay entegrasyon
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Havacılık Meslek Liseleri, üniversiteler ve Eğlence merkezleri
                için ihtiyaçlara özgün özel çözümler üretmekteyiz.
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div id="infos">
          <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
            MOTION PLATFORM
          </h1>
          <h2 className="text-xl font-bold cursorCity">
            2 DOF, 3 DOF VE 6 DOF MOTION PLATFORM
          </h2>
          <hr />
          <ul>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Kendi tasarımımız actuator ve redüktörlü motion platform üretimi
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                İstenilen payload değerinde platform üretimi
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Servo motor kontrollü platformlar
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Kendi tasarımımız 32 bir MCU ile servo motor kontrol
                çözümlerimiz
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Servis bakım kolaylığı için test arayüz yazılımımız
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Platformun Simülasyon oyununa entegrasyonu için gerekli
                haberleşme ve data paket entegrasyonu
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={simulator5}
            alt="im-5"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Simulator;

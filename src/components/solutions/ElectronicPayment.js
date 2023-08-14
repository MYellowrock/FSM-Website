import payment1 from "./solutionsImage/payment1.png";
import payment2 from "./solutionsImage/payment2.png";
import { TiTickOutline } from "react-icons/ti";
import "./solutionStyles/solutionsAll.css";
import "./solutionStyles/solutionsAll.css";
import highway1 from "./solutionsImage/highway1.png";
import highway2 from "./solutionsImage/highway2.png";

import { FaFilePdf } from "react-icons/fa";
import paymentPdf from "../../paymentPdf.pdf";

function ElectronicPayment() {
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
              <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
              <li className="font-semibold text-lg inline-block">
                Dokunmatik Ekran
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
              <li className="font-semibold text-lg inline-block">
                Endüstriyel PC
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
              <li className="font-semibold text-lg inline-block">
                Nakit para alma ünitesi
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
              <li className="font-semibold text-lg inline-block">
                Kilitli para saklama kasası
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
              <li className="font-semibold text-lg inline-block">
                Therman yazıcı ünitesi
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
              <li className="font-semibold text-lg inline-block">
                Self Service POS modülü
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
              <li className="font-semibold text-lg inline-block">
                Doküman tarayıcı modülü
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
              <li className="font-semibold text-lg inline-block">
                GSM/GPRS Modem bağlantısı
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
              <li className="font-semibold text-lg inline-block">
                Ethernet Bağlantısı
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
              <li className="font-semibold text-lg inline-block">
                Sunucu ve Uygulama Yazılımı
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
              <li className="font-semibold text-lg inline-block">
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
        <div id="highway-images">
          <div className="flex flex-col justify-center items-center">
            <img src={highway1} alt="highway-1" width={1000} className="m-24" />
            <img src={highway2} alt="highway-2" width={1000} className="m-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectronicPayment;

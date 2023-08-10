import payment1 from "./solutionsImage/payment1.png";
import payment2 from "./solutionsImage/payment2.png";
import { TiTickOutline } from "react-icons/ti";
import "./solutionStyles/solutionsAll.css";

function ElectronicPayment() {
  return (
    <div id="electronic-payment">
      <div
        id="header-smartStop"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
      >
        <h1 className="text-4xl font-bold text-white cursorCity">
          ELEKTRONİK ÜCRET TOPLAMA (KİOSK) SİSTEM ÇÖZÜMLERİ
        </h1>
      </div>
      <div id="infos" className="text-center">
        <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
          Otomatik Ödeme Veznesi
        </h1>
        <hr />
        <div className="flex items-center justify-around">
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
    </div>
  );
}

export default ElectronicPayment;

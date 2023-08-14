import { TiTickOutline } from "react-icons/ti";
import datacenter1 from "./solutionsImage/datacenter1.png";
import datacenter2 from "./solutionsImage/datacenter2.png";
import datacenter3 from "./solutionsImage/datacenter3.png";

function Datacenter() {
  return (
    <div id="datacenter">
      <div
        id="header-smartStop"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
      >
        <h1 className="text-4xl font-bold text-white cursorCity text-center">DATACENTER</h1>
      </div>

      <div id="text-part">
        <h2 className="text-2xl font-semibold text-fsm-blue my-4 text-center">
          Datacenter ve Yapısal Kablolama
        </h2>
        <p className="text-lg font-medium my-6 text-center">
          Yapısal kablolama: İşyeri, kampus, ev, vb. gibi sınırlı mesafelerdeki
          bilgisayarları ve çevre birimlerini birbirine bağlamak ve bu
          sistemlerin enerji ihtiyacını karşılamak için kullanılan kablo
          sistemleridir.
        </p>
        <hr />
      </div>

      <div className="responsive-class flex items-center justify-around">
        <div className="flex items-center justify-center">
          <img
            src={datacenter1}
            alt="im-1"
            className="text-center mx-auto w-[400]"
          />
        </div>
        <ul className="mr-20">
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Direk üstü kabinetler
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              PTZ Kameralar
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Allied Telesis Endüstriyel Switchler
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Allied Telesis Endüstriyel SFP Modüller
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              FO Patch Kablolar
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Rack Kabinetler
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Necron UPS cihazları
            </li>
          </div>
        </ul>
        <div className="flex items-center justify-center">
          <img
            src={datacenter2}
            alt="im-1"
            className="text-center mx-auto w-[400]"
          />
        </div>
      </div>

      <div className="responsive-class flex justify-center items-center my-24">
        <div id="infos">
          <h2 className="text-xl font-bold cursorCity">
            PDU Power Distribution Unit
          </h2>
          <hr />
          <ul>
            <div className="lists mt-4">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                AC ve DC Akıllı PDU sistemleri
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                LAN portu üzerinden Uzaktan kontrol ve izleme
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Proje ihtiyaçlarına özgün çıkış akımlarını sınırlandırma
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Proje ihtiyaçlarına göre çıkış portlarını arttırma
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                AC PDU sistemlerde çıkışların röle ile kontrolü
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                DC PDU sistemlerde çıkışların yarı ilketken ile kontrolü
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                AC ve DC Akıllı PDU larda her bir çıkış portundan çekilen akımın
                uzaktan izlenmesi, kontrolü
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Seçilen portta sınırların dışında akım çekilmesi durumunda alarm
                üretme
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Masaüstü ve Mobil uygulama yazılımı ile uzaktan kontrol ve
                izleme
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Bootloader özelliği ile MCU işlemcilerin uzaktan firmware
                güncellemelerini yapımı
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Yapısal kablolama işlerinde 50 adet PDU üretimlerini başarı ile
                yaptık.
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={datacenter3}
            alt="im-2"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Datacenter;

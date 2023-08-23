import factoryAutomation1 from "./solutionsImage/factoryAutomation1.jpg";
import factoryAutomation2 from "./solutionsImage/factoryAutomation2.png";
import factoryAutomation3 from "./solutionsImage/factoryAutomation3.jpg";
import { TiTickOutline } from "react-icons/ti";

function FactoryAutomation() {
  return (
    <div id="factory-automation">
      <div
        id="header-smartStop"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
      >
        <h1 className="text-4xl font-bold text-white cursorCity text-center">
          FABRİKA VERİMLİLİĞİ
        </h1>
      </div>

      <div className="flex items-center justify-center my-24">
        <img
          src={factoryAutomation3}
          alt="datalogger"
          className="text-center mx-auto w-[750px] rounded-2xl"
        />
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">
        Dijital Dönüşümün Lideri: Fabrika Verimliliği ve Otomasyon Çözümleri
      </h1>
      <hr />
      <p className="text-2xl font-semibold text-center mb-12 mt-8">
        Sektörünüzde rekabet gücünüzü artırmak, üretim süreçlerinizi optimize
        etmek ve verimliliği en üst seviyeye çıkarmak mı istiyorsunuz? Artık
        aradığınız çözümler burada! Siz de dijital dönüşümün öncüsü olun,
        fabrikanızı akıllı ve etkili bir şekilde yönetmek için en son
        teknolojiyle buluşun.
      </p>
      <p className="text-2xl font-semibold text-center mb-12 mt-8">
        Neden biz ?
      </p>
      <ul className="mx-36 ulist-datalogger">
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Uzmanlık ve Deneyim: Yılların getirdiği deneyimle, fabrika
            verimliliği ve otomasyon konusunda uzmanlaşmış bir ekibiz.
            Sektörünüzün gereksinimlerini anlıyor, özelleştirilmiş çözümler
            sunuyoruz.
          </li>
        </div>
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Akıllı Üretim Hatları: Üretim süreçlerinizi akıllı hale getiriyoruz.
            Endüstri 4.0 normlarına uygun, veri odaklı üretim hatları ile hızlı,
            hatasız ve esnek üretimi keşfedin.
          </li>
        </div>
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Verimliliği Artırın: Kaynaklarınızı en iyi şekilde kullanarak
            verimliliği artırın. Enerji, zaman ve malzeme israfını minimize
            ederek karlılığınızı optimize edin.
          </li>
        </div>
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Otomasyonun Gücü: Rutin işleri otomatikleştirerek insan faktöründen
            kaynaklanan hataları en aza indirin. Üretim hızını ve kalitesini
            artırarak müşteri memnuniyetini yükseltin.
          </li>
        </div>
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Gerçek Zamanlı İzleme: Fabrikanızı her an her yerden izleyin. Üretim
            süreçlerini uzaktan yönetin, verileri gerçek zamanlı analiz ederek
            anlık kararlar alın.
          </li>
        </div>
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Müşteri Odaklı Çözümler: Her işletme farklıdır, bu yüzden
            çözümlerimiz de özelleştirilmiştir. İhtiyaçlarınıza en uygun çözümü
            geliştirirken bütçenizi aşmadan en yüksek değeri elde edin.
          </li>
        </div>
      </ul>

      <div className="datalogger-image-class flex justify-around items-center">
        <div className="flex items-center justify-center my-24">
          <img
            src={factoryAutomation1}
            alt="datalogger"
            className="text-center mx-auto w-[600px] rounded-2xl"
          />
        </div>

        <div className="flex items-center justify-center my-24">
          <img
            src={factoryAutomation2}
            alt="datalogger"
            className="text-center mx-auto w-[600px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default FactoryAutomation;

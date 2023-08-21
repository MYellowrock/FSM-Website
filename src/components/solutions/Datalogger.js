import datalogger1 from "./solutionsImage/datalogger1.jpg";
import datalogger2 from "./solutionsImage/datalogger2.png";
import datalogger3 from "./solutionsImage/datalogger3.jpg";

import { TiTickOutline } from "react-icons/ti";

import "./solutionStyles/solutionsAll.css";

function Datalogger() {
  return (
    <div id="datalogger">
      <div
        id="header-smartStop"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
      >
        <h1 className="text-4xl font-bold text-white cursorCity text-center">
          DATALOGGER
        </h1>
      </div>

      <div className="flex items-center justify-center my-24">
        <img
          src={datalogger1}
          alt="datalogger"
          className="text-center mx-auto w-[750px] rounded-2xl"
        />
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">
        Veriyi Yakalayın ve Analiz Edin: İleri Düzey Datalogger İle Tanışın!
      </h1>
      <hr />
      <p className="text-2xl font-semibold text-center mb-12 mt-8">
        Veri her şeyin temelidir. Doğru veri toplandığında, işletmeniz için
        stratejik kararlar almak ve performansını optimize etmek çok daha kolay
        hale gelir. İşte bu noktada, güvenilir ve gelişmiş bir dataloggerın
        değeri devreye giriyor.
      </p>
      <ul className="mx-36 ulist-datalogger">
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Gelişmiş Teknoloji ile Kesintisiz Veri Toplama: Üstün teknolojiye
            sahip dataloggerımız, çeşitli sensörler ve cihazlarla sorunsuz
            entegrasyon sağlar. Üretim hattından laboratuvara, lojistikten
            enerji izlemeye kadar geniş bir yelpazede veri toplamanıza olanak
            tanır.
          </li>
        </div>
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Güvenilirlik ve Veri Bütünlüğü: İşletmeniz için veri güvenliği ve
            bütünlüğü önemlidir. Dataloggerımız end-to-end şifreleme ve güvenlik
            protokolleri ile donatılmıştır, böylece verileriniz her zaman
            güvende kalır.
          </li>
        </div>
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Kapsamlı Veri Analizi: Sadece veri toplamak değil, aynı zamanda
            ondan anlamlı bilgi çıkarmak da önemlidir. Dataloggerımız, kolay
            kullanılabilir ara yüzü ve güçlü analiz araçları ile verilerinizi
            anlamlı görüntüler ve raporlar haline getirir.
          </li>
        </div>
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Uzaktan Erişim ve Kontrol: Dataloggerımıza her yerden erişim
            sağlayabilirsiniz. Mobil cihazınız veya bilgisayarınız aracılığıyla
            verilerinizi takip edebilir, gerektiğinde ayarlamalar
            yapabilirsiniz.
          </li>
        </div>
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Geleceğe Hazır Tasarım: İş dünyası sürekli olarak değişiyor ve
            büyüyor. Dataloggerımız, ölçeklenebilir ve esnek bir yapıya
            sahiptir, böylece işletmeniz büyüdükçe de ihtiyaçlarınıza cevap
            verebilir.
          </li>
        </div>
        <div className="lists mb-6 list-datalogger">
          <li className="font-semibold text-lg inline-block">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            Veriyi en iyi şekilde kullanmak için doğru araçlara sahip olmanız
            gerektiğini unutmayın. İleri düzey dataloggerımız, veri toplamanızı
            daha akıllı, verimli ve etkili hale getirir.
          </li>
        </div>
      </ul>

      <div className="datalogger-image-class flex justify-around items-center">
        <div className="flex items-center justify-center my-24">
          <img
            src={datalogger2}
            alt="datalogger"
            className="text-center mx-auto w-[600px] rounded-2xl"
          />
        </div>

        <div className="flex items-center justify-center my-24">
          <img
            src={datalogger3}
            alt="datalogger"
            className="text-center mx-auto w-[600px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Datalogger;

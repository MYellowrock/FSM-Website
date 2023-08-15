import security1 from "../solutions/solutionsImage/security1.png";
import security2 from "../solutions/solutionsImage/security2.png";
import security3 from "../solutions/solutionsImage/security3.png";
import { TiTickOutline } from "react-icons/ti";

import { FaFilePdf } from "react-icons/fa";
import securityPdf from "../../securityPdf.pdf";

function Security() {
  return (
    <div id="security">
      <div
        id="header-smartStop"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
      >
        <h1 className="text-4xl font-bold text-white cursorCity text-center">
          GÜVENLİK ÇÖZÜMLERİ
        </h1>
      </div>

      <div class="flex justify-center items-center my-12">
        <a href={securityPdf} download="fsmGuvenlik.pdf" class="inline-block">
          <FaFilePdf class="text-5xl" />
        </a>
      </div>

      <div className="responsive-class flex flex-row items-center justify-around">
        <div id="first-image">
          <div className="flex flex-col items-center justify-center mx-12">
            <img
              src={security1}
              alt="im-1"
              width={750}
              height={750}
              className="text-center mx-auto"
            />
          </div>
        </div>
        <div id="text-area" className="mt-8">
          <h2 className="text-xl font-bold cursorCity">
            Doppler Radar Çevre Güvenlik Sistemi
          </h2>
          <hr />
          <p className="text-lg font-semibold p-3 mx-8 my-2 flex">
            <TiTickOutline className="text-5xl text-green-600" />
            Çevre Güvenlik Sistemimiz Doppler Radar, PTZ Kamera ve IP Horn
            Hoparlör Sistemlerini bir arada kullanılarak entegre çözümler
            oluşturduk.
          </p>
          <p className="text-lg font-semibold p-3 mx-8 my-2 flex">
            <TiTickOutline className="text-5xl text-green-600" />
            Bu sayede güvenlik sınır bölgesinde direk üzerine konan Doppler
            Radar sistemimiz ile tüm alan X (uzaklık), Y (genişlik), Z
            (yükseklik) ekseninde tam tarama gerçekleştirmekteyiz.{" "}
          </p>
          <p className="text-lg font-semibold p-3 mx-8 my-2 flex">
            <TiTickOutline className="text-5xl text-green-600" />
            Sistemimiz, Dopler Radarın algıladığı obejelere PTZ kameraları
            otomatik olarak yönlendirerek objeye zoom ve autofocus yaparak
            kaydedecek şekilde otonom çalışmaktadır.
          </p>{" "}
          <p className="text-lg font-semibold p-3 mx-8 my-2 flex">
            <TiTickOutline className="text-5xl text-green-600" />
            Algılanan nesnenin ürettiği alarm bilgisine göre operatör canlı yada
            sesli mesajı mikrofona okur, IP hoparlör sistemi alarm olan bölgede
            sesli yayını yapar diğer gölgelerde sesli yayın yapılmaz.
          </p>
        </div>
      </div>

      <div className="responsive-class flex justify-center items-center my-24">
        <div id="infos">
          <h2 className="text-xl font-bold cursorCity">
            Video-Radar Çevre Güvenlik Sistemi
          </h2>
          <hr />
          <ul>
            <div className="lists mt-4">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Radar ile hareketli nesneleri algılama
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Hareketli nesne yoğunluğuna, hareketin şiddetine göre alarm
                üretme
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Algılanan hareket yoğunluğuna PTZ kamera ile odaklanma
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Alarm oluşan hareketlerin olduğu noktaya IP protokol üzerinden
                sesli uyarı yapma
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                IP hoparlör sistemi merkezi ses yayını yapma
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Merkezi ses yayınını gerektiğinde tek lokasyona yönlendirme
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Sesli-Görüntülü güvenlik ile kesintisiz çözümler sunar.
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={security2}
            alt="im-2"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
        </div>
      </div>

      <div className="responsive-class flex justify-around items-center">
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={security3}
            alt="im-3"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
        </div>
        <div id="infos">
          <h2 className="text-xl font-bold cursorCity">
            Video-Radar Mobil Çevre Güvenlik Sistemi
          </h2>
          <hr />
          <ul>
            <div className="lists mt-4">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Mobil Gözetleme Kule Sistemi
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                4 Doppler Radar ile 4 yön kontrolü
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                2 PTZ Kamera
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                IP Horn Hoparlör
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Direk üstü kabinet
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Online-Offline çalışma
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Outdoor wifi – Ethernet haberleşme
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Spiral kablolama
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                6m mekanik Acctuator platform / Frenli Servo Motor Teknolojisi
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Güneş paneli
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
                {" "}
                <TiTickOutline className="inline-block text-4xl text-green-500" />
                Jel Akü Sistemi
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Security;

import { FaFilePdf } from "react-icons/fa";
import videowallPdf from "../../fsmVideowall.pdf";
import { TiTickOutline } from "react-icons/ti";
import videowall2 from "./solutionsImage/videowall2.jpg";
import videowall4 from "./solutionsImage/videowall4.jpg";
import videowall5 from "./solutionsImage/videowall5.jpg";

import videowallVideo from "./solutionsImage/videowall.mp4";

function Videowall() {
  return (
    <div id="videowall">
      <div
        id="header-smartStop"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-center my-12"
      >
        <h1 className="text-4xl font-bold text-white cursorCity text-center">
          VIDEOWALL & VIDEO PANEL
        </h1>
      </div>
      <div class="flex justify-center items-center my-12">
        <a href={videowallPdf} download="fsmVideowall.pdf" class="inline-block">
          <FaFilePdf class="text-5xl" />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center m-12">
          <img
            src={videowall4}
            alt="im-4"
            width={900}
            height={900}
            className="text-center mx-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center m-12">
          <img
            src={videowall5}
            alt="im-5"
            width={900}
            height={900}
            className="text-center mx-auto"
          />
        </div>
      <div className="responsive-class flex justify-center items-center my-24">
        <div id="infos">
          <h2 className="text-xl font-bold cursorCity">
            Videowall Ürün Tanımları
          </h2>
          <hr />

          <ul>
            <div className="lists mt-4">
              <li className="font-semibold text-lg inline-block">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
                Out: Kontrol kartı bağlantı noktasıdır. Bu kısım cihazın
                panellere görüntü iletmesini sağlar. Eğer bu kablo çıkartılır
                veya arızalanırsa görüntü gidebilir veya görüntüyü
                değiştiremezsiniz.
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              Audio: Cihazın ses girişidir.
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
                USB: USB Disk girişidir, ayarladığınız programı USB aracılığı
                ile buradan yükleyebilirsiniz. Detaylar USB ile Program Yükleme
                başlığı altında anlatılmaktadır.
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
                IN: Cihazı lokal ağa bağlamanızı sağlar, böylelikle aynı ağ
                üzerinden cihaza erişebilirsiniz. Cihaz IP adresini veya ağ
                bilgilerini öğrenmek için Cihaz bilgileri kısmına bakmalısınız.
                Detaylar Cihaz Ayarlarının Tanımlanması başlığı altında
                anlatılmaktadır
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
                DC 12V: 12V güç girişidir.
              </li>
            </div>
            <div className="lists">
              <li className="font-semibold text-lg inline-block">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
                Wi-Fi: Wi-Fi anten girişidir. Kablonun çıkarılması halinde
                cihaza uzaktan bağlanılamaz.
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={videowall2}
            alt="im-2"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-12">
      <video controls>
        <source src={videowallVideo} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
        </div>
    </div>
  );
}

export default Videowall;

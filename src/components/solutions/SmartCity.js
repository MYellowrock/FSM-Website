import "./solutionStyles/solutionsAll.css";
import { TiTickOutline } from "react-icons/ti";
import smartCity1 from "./solutionsImage/smartCity1.png";
import smartCity2 from "./solutionsImage/smartCity2.png";
import smartCity3 from "./solutionsImage/smartCity3.png";
import smartCity4 from "./solutionsImage/smartCity4.png";
import Slider from "react-slick";
import smartCity5 from "./solutionsImage/smartCity5.png";
import smartCity6 from "./solutionsImage/smartCity6.png";
import smartCity7 from "./solutionsImage/smartCity7.png";
import smartCity8 from "./solutionsImage/smartCity8.png";
import smartCity9 from "./solutionsImage/smartCity9.png";
import smartCity10 from "./solutionsImage/smartCity10.png";
import smartCity11 from "./solutionsImage/smartCity11.png";
import smartCity12 from "./solutionsImage/smartCity12.png";

import { FaFilePdf } from "react-icons/fa";
import smartCityPdf from "../../smartCityPdf.pdf";

function SmartCity() {
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
          AKILLI ŞEHİR ÇÖZÜMLERİ
        </h1>
      </div>

      <div class="flex justify-center items-center my-12">
        <a
          href={smartCityPdf}
          download="fsmAkilliSehir.pdf"
          class="inline-block"
        >
          <FaFilePdf class="text-5xl" />
        </a>
      </div>

      <div id="infos" className="text-center">
        <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
          ADAPTİF KAVŞAK ve RADAR HIZ GÖSTERİM SİSTEMİ
        </h1>
        <ul>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Radar Teknolojisini kullanarak kavşaktaki Araç ve Nesnelerin
              sayımı, sınıflandırılması ve hızlarının tespiti
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Geldiği konumdan gitmekte olduğu güzergahın çıkarılması
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Her nesneye farklı ID numarası ve farklı renkte gösterme
              işlemlerini yapmaktayız
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Bu verilerle kavşakların anlık yoğunluğu
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Kavşağın rahatlaması için gerekli ışık sürelerinin hesaplanması
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Tüm kavşakların canlı olarak çalışması
            </li>
          </div>
          <div className="lists">
            <TiTickOutline className="inline-block text-4xl text-green-500 mb-2" />
            <li className="font-semibold text-lg inline-block">
              Her kavşak kendinden sonraki kavşağa gönderdiği trafik yoğunluğunu
              hesaplama özelliklerine sahiptir
            </li>
          </div>
        </ul>
        <div className="flex items-center justify-center mb-24">
          <img
            src={smartCity5}
            alt="im-1"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
          <img
            src={smartCity6}
            alt="im-1"
            width={500}
            height={700}
            className="text-center mx-auto"
          />
        </div>
      </div>
      <hr />

      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={smartCity7}
            alt="im-7"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
        </div>
        <div id="infos">
          <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
            RADAR HIZ UYARI SİSTEMLERi
          </h1>
          <ul>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Hız bilgi gösterimi tek renk, çift renk (Kırmızı-yeşil), full
                renk olarak yapılmaktadır.
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Algılanan hız bilgisi limitlerin altında ise Yeşil, üstünde ise
                Kırmızı renkte yayınlama
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                innosent iSYS Radar sistemine entegrasyon
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Algılama Aralığı *: 5 ... 300m
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Tetikleme alanı *: 20 ... 8m
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Tüm kavşakların canlı olarak çalışması
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Algılama açısı: 40 ° (+/- 20 °)
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Hız ölçümü: 1 ... 300km /s
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Hız ölçüm doğruluğu: 1km / s den az.
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Yön: geri çekilme ve trafiğe yaklaşma
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Sayma hassasiyeti: % 90 hassasiyet
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Sınıflandırma hassasiyeti: % 80 hassasiyet
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Sınıflar: 2 + 1 (binek araç, kamyon, diğerleri)
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Güncelleme süresi: 60ms
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Koruma sınıfı: IP67
              </li>
            </div>
          </ul>
        </div>
      </div>

      <Slider {...settings} className="my-24">
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={smartCity1}
            alt="im-1"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={smartCity2}
            alt="im-2"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={smartCity3}
            alt="im-3"
          />
        </div>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <img
            className="inline-block mx-auto border-solid rounded-2xl"
            src={smartCity4}
            alt="im-4"
          />
        </div>
      </Slider>


      <div className="flex justify-center items-center">
        <div id="infos">
          <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
            RADAR HIZ UYARI SİSTEMLERİ
          </h1>
          <h2 className="text-xl font-bold cursorCity">
            VMS/VTS Sistemler
          </h2>
          <hr />
          <ul>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Kullanım alanına göre özel tasarım
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Düşük enerji tüketimi
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Güneş enerjisi seçeneği
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Tek yada Full renk opsiyonu
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
                Kolay montaj olanağı
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Bluetooth bağlantı ile ön cepheden uzaktan bakım
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Yüksek duyarlılık için dar açı radar seçeneği
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Tek ünite veya bütün ağ için merkezi kontrol seçeneği
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Değerlendirme ve istatistik için bütün değerlerin saklanması
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Yansımayı önlemek için özel ön cephe dizaynı
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Akıllı hata tespit sistemi
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              GSM ve Ethernet ile uzak bağlantı
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={smartCity8}
            alt="im-8"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
        </div>
      </div>


      <div className="flex justify-center items-center my-24">
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={smartCity9}
            alt="im-9"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
        </div>
        <div id="infos">
          <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
            DEĞİŞKEN TRAFİK İŞARETLERİ (VTS)
          </h1>
          <h2 className="text-xl font-bold cursorCity">
            VMS/VTS Sistemler
          </h2>
          <hr />
          <ul>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              İstenilen ölçülerde tasarım.
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Uzaktan kablosuz (bluetooth) kontrol ile servis kolaylığı 
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Tarama ile düşük enerji tüketimi 
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Alarm durumuna göre çalışma şartları oluşturma
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              IP67 outdoor kasa
              </li>
            </div>
          </ul>
        </div>
      </div>


      <div className="flex justify-center items-center my-36">
        <div id="infos">
          <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
            ROBOTİK OTOPARK SİSTEMLERİ
          </h1>
          <h2 className="text-xl font-bold cursorCity">
            8-10-12-14-16 ARAÇ KAPASİTELİ KULE OTOPARK
          </h2>
          <hr />
          <ul>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              2 araç kapasiteli zemine 8-10-12-14 veya 16 araç kapasiteli asansör otopark ile yerden tasarruf etmenizi sağlar
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Girişte aracın plakası okunur
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Asansör gelen aracı alıp yükü dengeli dağıtarak boş kabini giriş alanına getirir
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Çıkacak araç istendiğinde sistem aracı en alt kata getirerek çıkışına imkan tanır
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Elektronik ücret toplamasını self servis ödeme noktaları size özgü kartlar üzerinden online tahsilat gerçekleştirebilirsiniz
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={smartCity10}
            alt="im-10"
            width={300}
            height={600}
            className="text-center mx-auto"
          />
        </div>
      </div>


      <div className="flex justify-center items-center my-24">
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={smartCity11}
            alt="im-11"
            width={500}
            height={600}
            className="text-center mx-auto"
          />
        </div>
        <div id="infos">
          <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
            KAPALI OTOPARK SİSTEMİ
          </h1>
          <ul>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Sensörler ile araç algılama
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Algılanan araç park yeri için Dolu/Boş sinyal lambası
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Yönlendirme VTS işaretlerle boş park bölgelerine yönlendirme
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              VTS bilgilendirme ekranı ile içerideki boş ve dolu park yeri sayısını gösterme
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Plaka tanıma sistem entegrasyonu
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Gişe uygulamalı sistemler için bilet makinası ve turnike entegrasyonu
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              İhtiyaçlarınıza özgün Elektronik Ücret Toplama
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Mevcut toplu ulaşım kartlarından bakiye düşebilme özelliği
              </li>
            </div>
            <div className="lists my-2">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Özel abonelik kartı entegrasyonu
              </li>
            </div>
          </ul>
        </div>
      </div>


      <div className="flex justify-center items-center my-36">
        <div id="infos">
          <h1 className="text-2xl font-bold cursorCity mb-8 mt-24">
            AÇIK OTOPARK SİSTEMİ (Görüntü işleme ve Radar Teknolojisi)
          </h1>
          <ul>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Açık otopark sistemlerinde outdoor kamera ile araç algılama 
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Algılanan araç bilgisi görüntü işleme ile sayısallaştırma
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Bulk yada PTZ kamera ile alanlardaki araç boş/doluluk sayılarını çıkarma
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Kamera sistemi online ve ofline çalışma özelliği ile sürekli çalışmayı destekler
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Merkez sunucu ile kablolu yada kablosuz bağlantı imkanı 
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Kamera kabini içerinde gömülü sistem kartlar ile yerinde veri işleme özelliği 
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Büyük ve küçük ölçekli her türlü otoparklarda işletme maliyeti düşüktür
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-4xl text-green-500" />
              <li className="font-semibold text-lg inline-block">
              Kazı vb dış etmenlerle sensör arızalarına son
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center mx-12">
          <img
            src={smartCity12}
            alt="im-12"
            width={600}
            height={600}
            className="text-center mx-auto mt-24"
          />
        </div>
      </div>


      <div id="solutions-footer" className="flex items-center justify-around">
        <div>
          <h1 className="text-2xl font-semibold my-4">
            Milli Park HGS ve Otogar Ücret Göstergesi
          </h1>
          <hr />
          <ul>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                32 bit MCU tabanlı
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
                Ethernet bağlantı özelliği
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Kırmızı Yeşil Trafik lamba özelliği
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
                5 Milli park sahasına kurulumu yapıldı.
              </li>
            </div>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold my-4">HGS Ücret Göstergesi</h1>
          <hr />
          <ul>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                32 bit MCU tabanlı
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
                Ethernet bağlantı özelliği
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Online – offline çalışabilme
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
                Türkiye’de 186 çıkış gişesine kuruldu
              </li>
            </div>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-semibold my-4">
            Ledli Otobüs Yolcu Bilgilendirme Ekranı
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
                Endüstriyel tasarım
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                WiFi/Ethernet özelliği
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Online – offline çalışabilme
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                EÜTS Validatör ile entegrasyon
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                MCU Bootloader ile uzaktan güncelleme
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Internet bağlantı ile uzaktan kontrol ve izleme
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                PWM tekniği ile led parlaklığını ayarlama
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Ön Yan ve Arka panel ile yolcu bilgilendirme
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Paneller arası kablolu ve kablosuz veri iletimi
              </li>
            </div>
            <div className="lists">
              <TiTickOutline className="inline-block text-xl text-green-500 mb-2" />
              <li className="font-semibold text-md inline-block">
                Panellerin Validatör ile kontrolü
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SmartCity;

import "../styles/info2.css";
import handtools from "../image/handtools.png";
import department from "../image/department.png";

function Info2() {
  return (
    <div
      id="info"
      className="flex justify-center items-center h-screen bg-gray-100 mt-12"
    >
      <div id="info-2-parts" className="flex items-center justify-center">
        <div id="info-2-first" className="flex flex-col items-center mr-8">
          <div className="companyImage">
            <img src={handtools} alt="company" width={128} className="mb-8" />
          </div>
          <div className="companyText">
            <p className="companyParagraph max-w-xl text-center text-md font-semibold">
            FSM Bilgi Teknolojileri güçlü ve yerli sermaye yapısı ile İnsanların hayatını kolaylaştıran, Sorunlara özgün çözümler üreten, Sistem verimlilik ve üretkenliklerini artıran ARGE faaliyetlerini başarı ile yürütmektedir. Bu çalışmaları geniş mühendis ve teknik kadrosuyla fikri mülkiyet hakları kendisine ait olan Elektronik dananım tasarımları, Gömülü sistem yazılımları, web tabanlı uygulama yazılımları ve Mekanik tasarımlar ile zamanın gerekliliklerine uygun çözümler üretmektedir.
            </p>
          </div>
        </div>
        <div id="info-2-second">
          <div id="info-2-first" className="flex flex-col items-center ml-8">
            <div className="companyImage">
              <img src={department} alt="company" width={128} className="mb-8" />
            </div>
            <div className="companyText">
              <p className="companyParagraph max-w-xl text-center text-md font-semibold">
              FSM Bilgi Teknolojileri ARGE çalışmaları yanı sıra; Mühendislik, Sistem entegrasyonu, Proje yönetimi, Kurulum-devreye alma, Bakım-onarım hizmetleri vermektedir. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info2;

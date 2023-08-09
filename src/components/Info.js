import "../styles/info.css";
import company from "../image/company.png";

function Info() {
  return (
    <div id="info-section" className="flex justify-center items-center h-screen bg-gray-100 mt-12">
      <div id="companyInfo" className="flex flex-col items-center">
        <div className="companyImage">
          <img src={company} alt="company" width={198} />
        </div>
        <div className="companyText">
            <p className="companyParagraph max-w-xl text-center text-xl font-semibold">
            30 yılı aşkın süredir Bilişim sektöründe orta ve büyük ölçekli projelerin geliştirilmesi, ülkemize yeni Bilişim teknolojilerinin getirilmesi ve teknolojideki son yenilikleri takip ederek bilişim sektörümüzün çağdaş düzeye ulaşmasına katkı sağlıyoruz.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Info;

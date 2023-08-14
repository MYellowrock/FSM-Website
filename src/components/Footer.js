import { AiOutlineCopyright } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {

  const scrollToInfo = (e) => {
    e.preventDefault();
    const infoSection = document.getElementById("info-section");
    if (infoSection) {
      const targetOffset = infoSection.offsetTop;
      const initialPosition = window.scrollY;
      const distance = Math.abs(targetOffset - initialPosition);
      const speed = 1.2;
      const duration = distance / speed;

      const startTime = performance.now();
      const endTime = startTime + duration;

      function step() {
        const currentTime = performance.now();
        const progress = (currentTime - startTime) / duration;

        if (currentTime >= endTime) {
          window.scrollTo(0, targetOffset);
          return;
        }

        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        const newPosition =
          initialPosition + (targetOffset - initialPosition) * easeProgress;
        window.scrollTo(0, newPosition);
        requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }
  };

  return (
    <div id="contact-section" className="footer">
      <div className="info-section my-16 flex justify-around">
        <div className="destek mt-12">
            <h1 className="text-xl font-semibold">Destek</h1> <hr /> <br />
          <ul>
            <li className="mb-2 hover:text-fsm-red"><Link to="/security-policy">Gizlilik Politikası</Link></li>
            <li className="mb-2 hover:text-fsm-red"><Link to="/delivery-and-return">Teslimat ve İade Koşulları</Link></li>
            <li className="mb-2 hover:text-fsm-red"><Link to="/sales-contract">Mesafeli Satış Sözleşmesi</Link></li>
            <li className="mb-2 hover:text-fsm-red"><a href="/" onClick={scrollToInfo} >Hakkımızda</a></li>
            <li className="mb-2 hover:text-fsm-red"><Link to="/communication">İletişim</Link></li>
          </ul>
        </div>
        <div className="çözümlerimiz">
            <h1 className="text-xl font-semibold">Çözümlerimiz</h1> <hr /> <br />
            <ul>
                <li className="mb-2 hover:text-fsm-red"><Link to="/smart-stop">Akıllı Durak Çözümleri</Link></li>
                <li className="mb-2 hover:text-fsm-red"><Link to="/smart-city">Akıllı Kent Çözümleri</Link></li>
                <li className="mb-2 hover:text-fsm-red"><Link to="/videowall">Videowall Ekran</Link></li>
                <li className="mb-2 hover:text-fsm-red"><Link to="/electronic-payment">Elektronik Ücret Toplama</Link></li>
                <li className="mb-2 hover:text-fsm-red"><Link to="/simulator">Simulatörler</Link></li>
                <li className="mb-2 hover:text-fsm-red"><Link to="/security">Güvenlik Çözümleri</Link></li>
                <li className="mb-2 hover:text-fsm-red"><Link to="/mobile-hospital">Mobil Hastane</Link></li>
                <li className="mb-2 hover:text-fsm-red"><Link to="/datacenter">Datacenter</Link></li>
            </ul>
        </div>
        <div className="iletişim mt-12">
            <h1 className="text-xl font-semibold">İletişim</h1> <hr /> <br />
            <h3>Adres: Macun Mah. Bağdat Cad. Mehmet Emin Erdoğan İş Merkezi No:93 D:65 Yenimahalle/Ankara</h3>
                <label>Email:</label>
                <a className="mb-1 hover:text-fsm-red" href="mailto:info@fsmbilgi.com"> info@fsmbilgi.com</a> <br />
                <label>Telefon:</label>
                <a className="mb-1 hover:text-fsm-red" href="tel:+903123870109"> 0 (312) 387 01 09</a> <br />
        </div>
      </div>
      <hr/>
      <div id="last-part" className="py-6 flex flex-col items-center justify-between">
        <div id="copyright">
          <p>Copyright <AiOutlineCopyright className="inline-block"/> 2023 Bilgi Teknolojileri</p>
        </div>
        <div className="end-part-copyright">
          <a href="/" className="inline-block mr-2 hover:text-fsm-red">Gizlilik Politikası</a>
          <p className="inline-block mr-2 text-2xl font-semibold">-</p> 
          <a href="/" className="inline-block mr-2 hover:text-fsm-red">Teslimat ve İade Koşulları</a>
          <p className="inline-block mr-2 text-2xl font-semibold">-</p>
          <a href="/" className="inline-block hover:text-fsm-red">Mesafeli Satış Sözleşmesi</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

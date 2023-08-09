function Footer() {
  return (
    <div id="footer">
      <div className="info-section my-36 flex justify-around">
        <div className="destek">
            <h1 className="text-xl font-semibold">Destek</h1> <hr /> <br />
          <ul>
            <li className="mb-2 hover:text-fsm-red"><a href="/">Gizlilik Politikası</a></li>
            <li className="mb-2 hover:text-fsm-red"><a href="/">Teslimat ve İade Koşulları</a></li>
            <li className="mb-2 hover:text-fsm-red"><a href="/">Mesafeli Satış Sözleşmesi</a></li>
            <li className="mb-2 hover:text-fsm-red"><a href="/">Hakkımızda</a></li>
            <li className="mb-2 hover:text-fsm-red"><a href="/">İletişim</a></li>
          </ul>
        </div>
        <div className="çözümlerimiz">
            <h1 className="text-xl font-semibold">Çözümlerimiz</h1> <hr /> <br />
            <ul>
                <li className="mb-2 hover:text-fsm-red"><a href="/">Akıllı Kent Çözümleri</a></li>
                <li className="mb-2 hover:text-fsm-red"><a href="/">Medikal Çözümler</a></li>
                <li className="mb-2 hover:text-fsm-red"><a href="/">Endüstriyel Çözümler</a></li>
                <li className="mb-2 hover:text-fsm-red"><a href="/">Simülasyon Çözümleri</a></li>
                <li className="mb-2 hover:text-fsm-red"><a href="/">Radar ve Çevre Güvenlik Çözümleri</a></li>
                <li className="mb-2 hover:text-fsm-red"><a href="/">Savunma Sanayi Çözümleri</a></li>
            </ul>
        </div>
        <div className="iletişim">
            <h1 className="text-xl font-semibold">İletişim</h1> <hr /> <br />
            <h3>Adres: Macun Mah. Bağdat Cad. Mehmet Emin Erdoğan İş Merkezi No:93 D:65 Yenimahalle/Ankara</h3>
                <label>Email:</label>
                <a className="mb-1 hover:text-fsm-red" href="/"> info@fsmbilgi.com</a> <br />
                <label>Telefon:</label>
                <a className="mb-1 hover:text-fsm-red" href="/"> 0 (312) 387 01 09</a> <br />
                <label>Fax:</label>
                <a className="mb-1 hover:text-fsm-red" href="/"> 0 (312) 999 81 97</a> <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;

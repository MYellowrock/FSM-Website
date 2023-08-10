function Communication() {
  return (
    <div id="communication" className="flex items-center justify-around">
      <div id="Connections">
        <h1 className="text-3xl text-center font-semibold">İletişim</h1> <hr />{" "}
        <br />
        <h3 className="text-lg text-center">
          Adres: Macun Mah. Bağdat Cad. Mehmet Emin Erdoğan İş Merkezi No:93
          D:65 Yenimahalle/Ankara
        </h3>{" "}
        <br />
        <div className="text-center">
          <label>Email:</label>
          <a className="mb-1 text-lg hover:text-fsm-red" href="/">
            {" "}
            info@fsmbilgi.com
          </a>{" "}
        </div>
        <br />
        <div className="text-center">
          <label>Telefon:</label>
          <a className="mb-1 text-lg hover:text-fsm-red" href="/">
            {" "}
            0 (312) 387 01 09
          </a>{" "}
        </div>
        <br />
        <div className="text-center">
          <label>Fax:</label>
          <a className="mb-1 text-lg hover:text-fsm-red" href="/">
            {" "}
            0 (312) 999 81 97
          </a>{" "}
        </div>
        <br />
      </div>
      <div id="map" className="mt-6">
        <iframe
          title="Google Map"
          width="500"
          height="450"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.7071886985826!2d32.854573!3d39.918861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3194d869eefb7%3A0xdd47d44e0c1aa18f!2sPodium%20AVM!5e0!3m2!1sen!2str!4v1567680769815!5m2!1sen!2str"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Communication;

import Slider from "react-slick";
import smartStop from "../image/1.jpg";
import smartCity from "../image/smartCity.png";
import videowall from "../image/videowall.jpg";
import payment from "../image/electronicPayment.jpg";
import simulator from "../image/simulator.png";
import security from "../image/security.png";
import hospital from "../image/mobileHospital.png";
import datacenter from "../image/datacenter.jpg";

import { Link } from "react-router-dom";

function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="mx-auto mt-12 z-0">
      <Slider {...settings}>
        <div
          id="smart-stop-solutions"
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-xl mb-2 font-semibold text-center text-fsm-blue">Akıllı Durak</h1>
          <Link to="/smart-stop">
            <img
              className="w-[200px] h-[400px] inline-block mx-auto border-solid border-4 rounded-2xl"
              src={smartStop}
              alt="im-1"
            />
          </Link>
        </div>
        <div
          id="smart-city-solutions"
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-xl mb-2 font-semibold text-center text-fsm-blue">Akıllı Şehir</h1>
          <Link to="/smart-city">
            <img
              className="w-[500px] h-[400px] inline-block mx-auto"
              src={smartCity}
              alt="im-1"
            />
          </Link>
        </div>
        <div
          id="videowall-solutions"
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-xl mb-2 font-semibold text-center text-fsm-blue">Videowall Ekran</h1>
          <Link to="/videowall">
            <img
              className="w-[750px] h-[400px] inline-block mx-auto"
              src={videowall}
              alt="im-2"
            />
          </Link>
        </div>
        <div
          id="electronic-payment-solutions"
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-xl mb-2 font-semibold text-center text-fsm-blue">Elektronik Ücret Toplama</h1>
          <Link to="/electronic-payment">
            <img
              className="w-[750px] h-[400px] inline-block mx-auto border-solid border-4 rounded-2xl"
              src={payment}
              alt="im-1"
            />
          </Link>
        </div>
        <div
          id="simulator-solutions"
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-xl mb-2 font-semibold text-center text-fsm-blue">Simülatörler</h1>
          <Link to="/simulator">
            <img
              className="w-[750px] h-[400px] inline-block mx-auto border-solid border-4 rounded-2xl"
              src={simulator}
              alt="im-1"
            />
          </Link>
        </div>
        <div
          id="security-solutions"
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-xl mb-2 font-semibold text-center text-fsm-blue">Güvenlik Çözümleri</h1>
          <Link to="/security">
            <img
              className="w-[550px] h-[400px] inline-block mx-auto"
              src={security}
              alt="im-1"
            />
          </Link>
        </div>
        <div
          id="mobile-hospital-solutions"
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-xl mb-2 font-semibold text-center text-fsm-blue">Mobil Hastane</h1>
          <Link to="/mobile-hospital">
            <img
              className="w-[750px] h-[400px] inline-block mx-auto border-solid border-4 rounded-2xl"
              src={hospital}
              alt="im-1"
            />
          </Link>
        </div>
        <div
          id="datacenter-solutions"
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-xl mb-2 font-semibold text-center text-fsm-blue">Datacenter</h1>
          <Link to="/datacenter">
            <img
              className="w-[750px] h-[400px] inline-block mx-auto border-solid border-4 rounded-2xl"
              src={datacenter}
              alt="im-1"
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default ProductSlider;

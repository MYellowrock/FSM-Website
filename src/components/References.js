import egm from "../image/egm.png";
import ogm from "../image/ogm.png";
import ptt from "../image/ptt.png";
import dora from "../image/dora.png";
import novamed from "../image/novamed.jpg";
import inetra from "../image/inetra.png";
import asis from "../image/asis.png";

import "../styles/references.css";

function References() {
  return (
    <div id="references">
      <div className="flex flex-col justify-center items-center my-12">
        <h1 className="inline-block w-full text-center font-bold text-3xl py-12 mb-12 bg-gray-100">REFERANSLARIMIZ</h1>
        <div className="references-class-grid grid grid-cols-5 gap-8">
          <div className="flex justify-center items-center m-4 p-4 border-solid border-4 rounded-2xl border-fsm-blue">
            <img
              src={egm}
              alt="egm"
              width={70}
              height={70}
              className="mx-8 footer-logo-class text-center"
            />
          </div>
          <div className="flex justify-center items-center m-4 p-4 border-solid border-4 rounded-2xl border-fsm-blue">
            <img
              src={ogm}
              alt="ogm"
              width={90}
              height={90}
              className="mx-8 footer-logo-class text-center"
            />
          </div>
          <div className="flex justify-center items-center m-4 p-4 border-solid border-4 rounded-2xl border-fsm-blue">
            <img
              src={ptt}
              alt="ptt"
              width={100}
              height={100}
              className="mx-8 footer-logo-class text-center rounded-xl"
            />
          </div>
          <div className="flex justify-center items-center m-4 p-4 border-solid border-4 rounded-2xl border-fsm-blue">
            <img
              src={dora}
              alt="dora"
              width={100}
              height={100}
              className="mx-8 footer-logo-class text-center"
            />
          </div>
          <div className="flex justify-center items-center m-4 p-4 border-solid border-4 rounded-2xl border-fsm-blue">
            <img
              src={novamed}
              alt="novamed"
              width={100}
              height={100}
              className="mx-8 footer-logo-class text-center"
            />
          </div>
          <div className="flex justify-center items-center m-4 p-4 border-solid border-4 rounded-2xl border-fsm-blue">
            <img
              src={asis}
              alt="asis"
              width={100}
              height={100}
              className="mx-8 footer-logo-class text-center rounded-2xl"
            />
          </div>
          <div className="flex justify-center items-center m-4 p-4 border-solid border-4 rounded-2xl border-fsm-blue">
            <img
              src={inetra}
              alt="inetra"
              width={300}
              height={100}
              className="mx-8 footer-logo-class text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default References;

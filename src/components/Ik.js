import { PiStudentBold } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
import "../styles/ik.css";
import { Link } from "react-router-dom";

function Ik() {
  return (
    <div id="ik">
      <div className="flex flex-row justify-around items-center my-24 p-12">
        <Link to="/hiring">
          <div className="hiring-intern p-24 border-4 border-solid border-black rounded-3xl flex flex-col justify-center items-center hover:bg-fsm-blue hover:text-white hover:ease-in hover:duration-600">
            <MdWorkOutline className="text-center text-5xl mb-4" />
            <h1 className="font-semibold text-2xl text-center">İş İlanı</h1>
          </div>
        </Link>
        <Link to="/intern">
          <div className="hiring-intern p-24 border-4 border-solid border-black rounded-3xl flex flex-col justify-center items-center hover:bg-fsm-blue hover:text-white hover:ease-in hover:duration-600">
            <PiStudentBold className="text-center text-5xl mb-4" />
            <h1 className="font-semibold text-2xl text-center">Stajyer İlanı</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Ik;

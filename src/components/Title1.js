import { FaFilePdf } from "react-icons/fa";
import catalog from "../fsmGenelKatalog.pdf";

function Title1() {
    return (
        <div id="solutions-section" className="mt-12">
            <div className="text-3xl font-semibold text-fsm-blue m-12">
                <h1 className="text-center">ÇÖZÜMLERİMİZ - <a href={catalog} download="fsmGenelKatalog.pdf"><FaFilePdf className="inline-block mb-2 text-5xl"/></a></h1>
            </div>
        </div>
    )
}

export default Title1;
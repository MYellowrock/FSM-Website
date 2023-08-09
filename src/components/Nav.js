import React, { useState } from "react";
import logo from "../image/logo1.png";
import "../styles/nav.css";
import fsmLogo from "../image/fsmLogo.png";
import backgroundImage from "../image/navbargif1.gif";

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const showDropdown = (index) => {
    setActiveDropdown(index);
  };

  const hideDropdown = () => {
    setActiveDropdown(null);
  };

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <nav id="nav-bar" style={backgroundStyles}>
      <div className="logoPlusNavbar flex items-center bg-white fixed w-full border-solid border-2 rounded-lg">
      <div id="logo" className="flex items-center justify-center mr-56">
        <a href="/">
          <img src={logo} alt="FSM logo"/>
        </a>
      </div>
      <div id="navbar-section" className="ml-56">
        <ul className="flex items-center justify-center my-5">
          <li
            className={`relative p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue ${
              activeDropdown === 0 ? "dropdown-open" : ""
            }`}
            onMouseEnter={() => showDropdown(0)}
            onMouseLeave={hideDropdown}
          >
            <a className="text-2xl font-semibold" href="/">Çözümlerimiz</a>
            <div
              className={`dropdown-menu absolute bg-white border border-gray-300 mt-1 py-2 rounded-lg ${
                activeDropdown === 0 ? "" : "hidden"
              }`}
            >
              <a href="/solution-1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Akıllı Kent Çözümleri</a>
              <a href="/solution-2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Medikal Çözümler</a>
              <a href="/solution-3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Simülasyon Çözümleri</a>
              <a href="/solution-3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Radar ve Çevre Güvenlik Sistemler</a>
              <a href="/solution-3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Savunma Sanayi Çözümleri</a>
            </div>
          </li>
          <li className="p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue">
            <a className="text-2xl font-semibold" href="/1">Hakkımızda</a>
          </li>
          <li className="p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue">
            <a className="text-2xl font-semibold" href="/2">Blog</a>
          </li>
          <li className="p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue">
            <a className="text-2xl font-semibold" href="/3">İletişim</a>
          </li>
        </ul>
      </div>
      </div>
      <a href="/">
      <img src={fsmLogo} alt="fsmLogo" width={96} className="fixed bottom-4 right-4 opacity-60"/>
      </a>
    </nav>
  );
};

export default Nav;

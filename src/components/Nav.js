import React, { useState } from "react";
import logo from "../image/logo1.png";
import "../styles/nav.css";
import fsmLogo from "../image/fsmLogo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [onButton, setOnButton] = useState(true);

  const scrollToSolutions = (e) => {
    e.preventDefault();
    const solutionsSection = document.getElementById("solutions-section");
    if (solutionsSection) {
      const targetOffset = solutionsSection.offsetTop;
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

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      const targetOffset = contactSection.offsetTop;
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

  const showDropdown = (index) => {
    setActiveDropdown(index);
  };

  const hideDropdown = () => {
    setActiveDropdown(null);
  };

  const handleToggle = () => {
    setOnButton(!onButton);
  };

  return (
    <nav id="nav-bar">
      <div className="logoPlusNavbar flex items-center bg-white fixed w-full border-solid border-2 rounded-lg z-20">
        <div id="logo" className="logo-class flex items-center justify-center">
          <a href="/">
            <img src={logo} alt="FSM logo" />
          </a>
          <button
                onClick={handleToggle}
                className="navbar-button hidden"
              >
                <GiHamburgerMenu className="text-fsm-blue text-4xl"/>
            </button>
        </div>
        <div id="navbar-section" className="navbar-section-class">
          <ul className="flex items-center justify-center my-5">
            {onButton && (
              <div className="navbar-list-class flex justify-center items-center">
                <li className="list-element-class p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
                  <a
                    className="navbar-texts text-lg font-semibold"
                    onClick={scrollToInfo}
                    href="/"
                  >
                    Hakkımızda
                  </a>
                </li>
                <li className="list-element-class p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
                  <Link
                    to="/news"
                    className="navbar-texts text-lg font-semibold"
                  >
                    Haberler
                  </Link>
                </li>
                <li
                  className={`list-element-class relative p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue ${
                    activeDropdown === 0 ? "dropdown-open" : ""
                  }`}
                  onMouseEnter={() => showDropdown(0)}
                  onMouseLeave={hideDropdown}
                >
                  <a
                    className="solutions-navbar-class navbar-texts text-lg font-semibold flex items-center border-gray-400"
                    onClick={scrollToSolutions}
                    href="/"
                  >
                    Çözümlerimiz
                    <IoMdArrowDropdown className="ml-1" />
                  </a>

                  <div
                    className={`dropdown-menu absolute bg-white border border-fsm-blue mt-1 py-2 rounded-lg ${
                      activeDropdown === 0 ? "" : "hidden"
                    }`}
                  >
                    <Link
                      to="/smart-stop"
                      className="nav-solution-class block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                    >
                      Akıllı Durak Çözümleri
                    </Link>
                    <Link
                      to="/smart-city"
                      className="nav-solution-class block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                    >
                      Akıllı Kent Çözümler
                    </Link>
                    <Link
                      to="/videowall"
                      className="nav-solution-class block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                    >
                      Videowall Ekran
                    </Link>
                    <Link
                      to="/electronic-payment"
                      className="nav-solution-class block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                    >
                      Elektronik Ücret Toplama
                    </Link>
                    <Link
                      to="/simulator"
                      className="nav-solution-class block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                    >
                      Simülatörler
                    </Link>
                    <Link
                      to="/security"
                      className="nav-solution-class block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                    >
                      Güvenlik Çözümleri
                    </Link>
                    <Link
                      to="/mobile-hospital"
                      className="nav-solution-class block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                    >
                      Mobil Hastane
                    </Link>
                    <Link
                      to="/datacenter"
                      className="nav-solution-class block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                    >
                      Datacenter
                    </Link>
                    <Link
                      to="/datalogger"
                      className="nav-solution-class block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                    >
                      Datalogger
                    </Link>
                    <Link
                      to="/factory-automation"
                      className="nav-solution-class block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                    >
                      Fabrika Verimliliği
                    </Link>
                  </div>
                </li>
                <li className="list-element-class p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
                  <Link
                    to="/human-sources"
                    className="navbar-texts text-lg font-semibold"
                  >
                    İnsan Kaynakları
                  </Link>
                </li>
                <li className="list-element-class p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
                  <Link
                    to="/online"
                    className="navbar-texts text-lg font-semibold"
                  >
                    Online İşlemler
                  </Link>
                </li>
                <li className="list-element-class p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
                  <Link
                    to="/shop"
                    className="navbar-texts text-lg font-semibold"
                  >
                    Mağaza
                  </Link>
                </li>
                <li className="list-element-class p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
                  <a
                    className="navbar-texts text-lg font-semibold"
                    onClick={scrollToContact}
                    href="/"
                  >
                    İletişim
                  </a>
                </li>
                <li className="list-element-class p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
                  <Link
                    to="/references"
                    className="navbar-texts text-lg font-semibold"
                  >
                    Referanslarımız
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
      <a href="/">
        <img
          src={fsmLogo}
          alt="fsmLogo"
          width={96}
          className="fsm-logo-bottom fixed bottom-4 right-4 opacity-60 z-40"
        />
      </a>
    </nav>
  );
};

export default Nav;

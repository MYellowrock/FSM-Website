import React, { useState } from "react";
import logo from "../image/logo1.png";
import "../styles/nav.css";
import fsmLogo from "../image/fsmLogo.png";
import backgroundImage from "../image/navbargif1.gif";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

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
        const newPosition = initialPosition + (targetOffset - initialPosition) * easeProgress;
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

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <nav id="nav-bar" style={backgroundStyles}>
      <div className="logoPlusNavbar flex items-center bg-white fixed w-full border-solid border-2 rounded-lg z-20">
        <div id="logo" className="flex items-center justify-center mr-24">
          <a href="/">
            <img src={logo} alt="FSM logo" />
          </a>
        </div>
        <div id="navbar-section" className="ml-24">
          <ul className="flex items-center justify-center my-5">
            <li
              className={`relative p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue ${
                activeDropdown === 0 ? "dropdown-open" : ""
              }`}
              onMouseEnter={() => showDropdown(0)}
              onMouseLeave={hideDropdown}
            >
              <a
                className="text-2xl font-semibold flex items-center border-r border-gray-400 pr-8" onClick={scrollToSolutions}
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
                <a
                  href="/solution-1"
                  className="block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                >
                  Akıllı Kent Çözümleri
                </a>
                <a
                  href="/solution-2"
                  className="block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                >
                  Medikal Çözümler
                </a>
                <a
                  href="/solution-3"
                  className="block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                >
                  Simülasyon Çözümleri
                </a>
                <a
                  href="/solution-3"
                  className="block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                >
                  Radar ve Çevre Güvenlik Sistemler
                </a>
                <a
                  href="/solution-3"
                  className="block px-4 py-2 text-fsm-blue font-semibold text-md hover:bg-gray-100 text-center"
                >
                  Savunma Sanayi Çözümleri
                </a>
              </div>
            </li>
            <li className="p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
              <a
                className="text-lg font-semibold"
                onClick={scrollToInfo}
                href="/"
              >
                Hakkımızda
              </a>
            </li>
            <li className="p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
              <Link to="/news" className="text-lg font-semibold">
                Haberler
              </Link>
            </li>
            <li className="p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
              <Link to="/human-sources" className="text-lg font-semibold">
                İnsan Kaynakları
              </Link>
            </li>
            <li className="p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
              <Link to="/online" className="text-lg font-semibold">
                Online İşlemler
              </Link>
            </li>
            <li className="p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
              <Link to="/shop" className="text-lg font-semibold">
                Mağaza
              </Link>
            </li>
            <li className="p-3 m-2 border-solid border-gray-100 rounded-lg hover:border-gray-200 hover:text-fsm-blue text-center">
              <a
                className="text-lg font-semibold"
                onClick={scrollToContact}
                href="/"
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a href="/">
        <img
          src={fsmLogo}
          alt="fsmLogo"
          width={96}
          className="fixed bottom-4 right-4 opacity-60 z-40"
        />
      </a>
    </nav>
  );
};

export default Nav;

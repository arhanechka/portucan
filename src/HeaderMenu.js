import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

const HeaderMenu = ({ hamburger, isEnabled }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="hamburger" onClick={hamburger}>
        <div className={`${isEnabled ? "change" : ""} bar1`}></div>
        <div className={`${isEnabled ? "change" : ""} bar2`}></div>
        <div className={`${isEnabled ? "change" : ""} bar3`}></div>
      </div>
      <nav className={`header-menu ${isEnabled ? "enabled" : ""}`}>
        <ul className="menu-list">
          <li
            className="menu-item"
            onMouseEnter={() => handleMouseEnter("immigration")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/immigration" onClick={() => toggleMenu("immigration")}>
              Immigration
            </Link>
            {activeMenu === "immigration" && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/immigration/visas" onClick={hamburger}>
                    Visas
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/immigration/documents" onClick={hamburger}>
                    Documents
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/immigration/process" onClick={hamburger}>
                    Process
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/immigration/bank" onClick={hamburger}>
                    Banks
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/immigration/addresses" onClick={hamburger}>
                    Addresses
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="menu-item"
            onMouseEnter={() => handleMouseEnter("stepsInCanada")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/steps-in-canada"
              onClick={() => toggleMenu("stepsInCanada")}
            >
              Steps in Canada
            </Link>
            {activeMenu === "stepsInCanada" && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/steps-in-canada/ircc" onClick={hamburger}>
                    Steps before immigration
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/steps-in-canada/taxes" onClick={hamburger}>
                    Taxes and CRA
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/steps-in-canada/property" onClick={hamburger}>
                    Mortgage and property
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/steps-in-canada/banks" onClick={hamburger}>
                    Banks in Canada
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/steps-in-canada/moving" onClick={hamburger}>
                    Moving facilities
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="menu-item"
            onMouseEnter={() => handleMouseEnter("stepsInPortugal")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/steps-in-portugal"
              onClick={() => toggleMenu("stepsInPortugal")}
            >
              Steps in Portugal
            </Link>
            {activeMenu === "stepsInPortugal" && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/steps-in-portugal/nif" onClick={hamburger}>
                    Número de Contribuinte (NIF)
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/steps-in-portugal/nhr" onClick={hamburger}>
                    Non-Habitual Resident (NHR) Regime
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/steps-in-portugal/bank" onClick={hamburger}>
                    Bank account
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/steps-in-portugal/property" onClick={hamburger}>
                    Renting and buying property
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/steps-in-portugal/moving" onClick={hamburger}>
                    Sef
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="menu-item"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/our-service" onClick={() => toggleMenu("services")}>
              Our Service
            </Link>
            {activeMenu === "services" && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/our-service/imigration" onClick={hamburger}>
                    Immigration consultans
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/our-service/accounting" onClick={hamburger}>
                    Accounting
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/our-service/advocats" onClick={hamburger}>
                    Advocats
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/our-service/realestate" onClick={hamburger}>
                    Real estate
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/our-service/translate" onClick={hamburger}>
                    Notary and transations
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/our-service/other" onClick={hamburger}>
                    Other useful contacts
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="menu-item"
            onMouseEnter={() => handleMouseEnter("articles")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/articles" onClick={hamburger}>
              Articles
            </Link>
            {activeMenu === "articles" && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link to="/articles/cityComparison" onClick={hamburger}>
                    City cost comparison
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item">
            <Link to="/contacts" onClick={hamburger}>
              Contacts
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/links" onClick={hamburger}>
              Links
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderMenu;

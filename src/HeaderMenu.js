import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMenu.css';

function HeaderMenu() {
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
    <nav className="header-menu">
      <ul className="menu-list">
        <li
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('immigration')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/immigration" onClick={() => toggleMenu('immigration')}>
            Immigration
          </Link>
          {activeMenu === 'immigration' && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><Link to="/immigration/visas">Visas</Link></li>
              <li className="dropdown-item"><Link to="/immigration/documents">Documents</Link></li>
              <li className="dropdown-item"><Link to="/immigration/process">Process</Link></li>
              <li className="dropdown-item"><Link to="/immigration/addresses">Addresses</Link></li>
            </ul>
          )}
        </li>
        <li
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('stepsInCanada')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/steps-in-canada" onClick={() => toggleMenu('stepsInCanada')}>
            Steps in Canada
          </Link>
          {activeMenu === 'stepsInCanada' && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><Link to="/steps-in-canada/ircc">IRCC</Link></li>
              <li className="dropdown-item"><Link to="/steps-in-canada/taxes">Taxes and CRA</Link></li>
              <li className="dropdown-item"><Link to="/steps-in-canada/property">Mortgage and property</Link></li>
              <li className="dropdown-item"><Link to="/steps-in-canada/moving">Moving facilities</Link></li>
            </ul>
          )}
        </li>
        <li
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('stepsInPortugal')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/steps-in-portugal" onClick={() => toggleMenu('stepsInPortugal')}>
            Steps in Portugal
          </Link>
          {activeMenu === 'stepsInPortugal' && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><Link to="/steps-in-portugal/nif">Número de Contribuinte (NIF)</Link></li>
              <li className="dropdown-item"><Link to="/steps-in-portugal/nhr">Non-Habitual Resident (NHR) Regime</Link></li>
              <li className="dropdown-item"><Link to="/steps-in-portugal/property">Renting and buying property</Link></li>
              <li className="dropdown-item"><Link to="/steps-in-portugal/bank">Bank account</Link></li>
              <li className="dropdown-item"><Link to="/steps-in-portugal/moving">Sef</Link></li>
            </ul>
          )}
        </li>
        <li
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/our-service" onClick={() => toggleMenu('services')}>
            Our Service
          </Link>
          {activeMenu === 'services' && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><Link to="/sour-service/imigration">Immigration consultans</Link></li>
              <li className="dropdown-item"><Link to="/our-service/accounting">Accounting</Link></li>
              <li className="dropdown-item"><Link to="/our-service/advocats">Advocats</Link></li>
              <li className="dropdown-item"><Link to="/our-service/realestate">Real estate</Link></li>
              <li className="dropdown-item"><Link to="/our-service/translate">Notary and transations</Link></li>
              <li className="dropdown-item"><Link to="/our-service/other">Other useful contacts</Link></li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="menu-item">
          <Link to="/contacts">Contacts</Link>
        </li>
        <li className="menu-item">
          <Link to="/links">Links</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;

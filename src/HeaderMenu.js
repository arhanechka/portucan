import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMenu.css';

function HeaderMenu() {
  const [isImmigrationMenuOpen, setImmigrationMenuOpen] = useState(false);
  const [isStepsInCanadaMenuOpen, setStepsInCanadaMenuOpen] = useState(false);
  const [isStepsInPortugalMenuOpen, setStepsInPortugalMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);



  const toggleImmigrationMenu = () => {
    setImmigrationMenuOpen(!isImmigrationMenuOpen);
  };

  const toggleStepsInCanadaMenu = () => {
    setStepsInCanadaMenuOpen(!isStepsInCanadaMenuOpen);
  };
  const toggleStepsInPortugalMenu = () => {
    setStepsInPortugalMenuOpen(!isStepsInPortugalMenuOpen);
  };
  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
  };


  return (
    <nav className="header-menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/immigration" onClick={toggleImmigrationMenu} >
            Immigration
          </Link>
          {isImmigrationMenuOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/immigration/visas">Visas</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/immigration/documents">Documents</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/immigration/process">Process</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/immigration/addresses">Addresses</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <Link to="/steps-in-canada" onClick={toggleStepsInCanadaMenu}>Steps in Canada</Link>
          {isStepsInCanadaMenuOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/steps-in-canada/ircc">IRCC</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/steps-in-canada/taxes">Taxes and CRA</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/steps-in-canada/property">Mortgage and property</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/steps-in-canada/moving">Moving facilities</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <Link to="/steps-in-portugal" onClick={toggleStepsInPortugalMenu}>Steps in Portugal</Link>
          {isStepsInPortugalMenuOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/steps-in-portugal/nif">Número de Contribuinte (NIF)</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/steps-in-portugal/nhr">Non-Habitual Resident (NHR) Regime</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/steps-in-portugal/property">Renting and buying property</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/steps-in-portugal/property">Documents</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/steps-in-portugal/moving">Sef</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <Link to="/our-service" onClick={toggleServicesMenu} >Our service</Link>
          {isServicesMenuOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/sour-service/imigration">Immigration consultans</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/our-service/accounting">Accounting</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/our-service/advocats">Advocats</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/our-service/realestate">Real estate</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/our-service/translate">Notary and transations</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/our-service/other">Other userful contacts</Link>
              </li>
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

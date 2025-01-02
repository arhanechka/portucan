import React from "react";
import "../css/Links.css";
import "../css/General.css";

function Links() {
  const linksData = [
    {
      link: "https://www.sef.pt",
      description:
        "Serviço de Estrangeiros e Fronteiras - Official Portuguese Immigration and Border Service.",
    },
    {
      link: "https://eportugal.gov.pt",
      description:
        "ePortugal - Official Portuguese government portal for public services.",
    },
    {
      link: "https://www.vfsglobal.com",
      description:
        "VFS Global - Information on visa application process for various countries, including Portugal.",
    },
    {
      link: "https://toronto.consuladoportugal.mne.gov.pt/",
      description: "General consulate of Portugal in Toronto",
    },
  ];

  return (
    <div className="general-container">
      <p className="App-text" style={{ top: "7vh" }}>
        Useful Links
      </p>
      <table className="links-table">
        <thead>
          <tr>
            <th>Link</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {linksData.map((item, index) => (
            <tr key={index}>
              <td>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.link}
                </a>
              </td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Links;

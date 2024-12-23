import React, { useState } from "react";
import "../../css/Visas.css"; 
import '../../css/General.css';  

function Documents() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const documentRequirements = [
    { key: "passport", title: "Passport", text: "Passport, valid for at least 3 months after the estimated date of the stay plus one photocopy of passport. Notarized copy is not required. Keep in mind that the consulate will pick up your passport and can hold it for 60 business days before return. " },
    { key: "photo", title: "Photo", text: "1 Photo, passport type, recent and in good condition to identify the applicant." },
    { key: "criminal", title: "Criminal record", text: `
        <ul>
          <li>
            1. RCMP fingerprinted Criminal Record or your local Police Criminal background check certificate.
            <a href='https://rcmp.ca/en/criminal-records/criminal-record-checks/where-go' target='_blank' rel='noopener noreferrer'>
              (check here to check official requirements).
            </a>
          </li>
          <li>
            2. If you haven’t been living in Canada for at least one year, Criminal Record from the country where the applicant has resided for over a year, with the Hague Apostille (If applicable) or legalized. Applicants under sixteen years old are exempt.
          </li>
          <li><b>You need apostilled and notarized criminal record.</b></li>
          <li>
            Here you can find <a href ='https://www.ontario.ca/page/authenticate-document-use-outside-canada?fbclid=IwZXh0bgNhZW0CMTAAAR3qy5z04pdy_ATh7fhb3RdsSfcRJ_aLv1dFAHFPp71sXG6IJJRGVckPzDQ_aem_XoLN2KKJqj4hzT_OUsHH5g'>
              requirements
            </a> for authentication of a document for use outside Canada.
          </li>
          <li>
            Location: Toronto Notary Service <a href='https://maps.app.goo.gl/neVvduov9tV1EhrS6' target='_blank' rel='noopener noreferrer'>
              here
            </a>
          </li>
        </ul>
      `},
      


    { key: "driver", title: "Driver licence", text: `
       
           <p> 1. You may drive in Portugal with your foreign driving permit for a period of 185 days after entering Portugal and before establishing residence (driving as a tourist). </p>
        
            <p> <b>2. Driving licence exchange: (do it before you move to Portugal)</b></p>
           <ul>
          <li>
            Request the “Certified Driver Confirmation Letter” ", issued by the <a href="https://www.ontario.ca/page/get-longer-term-driving-records-or-letters-and-documents#section-6" target="_blank" rel="nofollow noopener">Ministry of Transportation of Ontario</a>
            </a>
          </li>
           <li>
            Translate it (<a href="https://atio.on.ca/directory/" target="_blank" rel="nofollow noopener">Directory | ATIO</a>).
            </a>
          </li>
                  <li>
            Get Apostille for it in Service Ontario.
          </li>
                            <li>
            <a href='https://maps.app.goo.gl/neVvduov9tV1EhrS6' target='_blank' rel='noopener noreferrer'>Notarise it.</a>
          </li>
          <li>
            Apply to Driver Licence Exchange <a href="https://www.imtonline.pt/index.php/troca-de-titulos-conducao-estrangeiros/driving-licence-exchange109" target="_blank" rel="nofollow noopener">on this site </a>
          </li>
        </ul>
        <p>3. The issuing and renewal of driving licenses is the exclusive competence of the <a href="http://www.imtonline.pt/index.php/condutores108d" target="_blank" rel="nofollow noopener">Institute of Mobility and Transport (IMT) in Portugal</a></p>
      `},
    { key: "housing", title: "Proof of Housing", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proof of Housing requirements details go here." },
  ];

  return (
    <div className="job-seeker-container">
      <h1 className="App-text">Main Documents Requirements</h1>
      <ul >
        {documentRequirements.map((doc) => (
          <li key={doc.key} className="document-item">
            <div
              className={`document-title ${openSection === doc.key ? "active" : ""}`}
              onClick={() => toggleSection(doc.key)}
            >
                <h2>
              {doc.title}
              </h2>
            </div>
            {openSection === doc.key && (
                           <div className="document-content" dangerouslySetInnerHTML={{ __html: doc.text }} />

            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Documents;

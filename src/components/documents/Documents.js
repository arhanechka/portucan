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
      {
        key: "marriage",
        title: "Marriage Certificate",
        text: `
          <ul>
            <li>
              1. Must be issued by the relevant government authority in the country where the marriage took place.
              An original or certified copy is usually required.
            </li>
            <li>
              2. If the certificate is not in the official language of the visa-issuing country, you must provide a certified translation. For Portugal, the translation should be into Portuguese and may need to be notarized.
            </li>
            <li>
              3. May require an apostille (under the Hague Convention) or legalization if issued in a country without a legal agreement with the destination country. This confirms its authenticity.
            </li>
            <li>
              4. Some visa processes require the certificate to be issued or re-issued within a specific timeframe (e.g., no older than 3 or 6 months).
            </li>
            <li>
              <b>Ensure the marriage certificate is translated, apostilled, or legalized as per the specific visa guidelines.</b>
            </li>
          </ul>
        `
      },
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
    { key: "housing", title: "Proof of Housing", text: `You must provide proof of housing in Portugal. This can be either a rental agreement (ranging from 6 months to a year, depending on the specific visa requirements) or proof that you own property in Portugal. I case you own a property, it can be the next documents: <br/>
        <ul>
        <li>
          Caderneta Predial Urbana - official name in Portuguese. In English, it is often referred to as the Property Tax Registration Document or Land Registry Certificate, depending on the context. This document is issued by the Portuguese Tax Authority (Autoridade Tributária) and provides detailed information about a property, such as its description, location, and fiscal details.
        </li>
         <li>
          Certidão de Teor is an official document in Portugal that provides detailed information about a specific property or legal entity. It is issued by the Conservatória do Registo Predial (Land Registry Office) and serves as a certificate of registration, confirming the current ownership, rights, and encumbrances (e.g., mortgages, liens) on a property.
          </li>
          <li>
          Escritura de Compra e Venda is the Deed of Purchase and Sale in Portugal. It is a legally binding document that formalizes the transfer of ownership of a property from the seller to the buyer. This deed is created during the property transaction process and must be signed before a notary or other authorized legal official in Portugal.
          </li>
          ` },
        
  ];

  return (
    <div className="general-container">
      <h1 className="App-text">Main Documents Requirements</h1>
      <h4> <i>It is recommended to have all copies of notarized and apostilled documents that are no older than 3 months from the date of issuance.</i></h4>
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

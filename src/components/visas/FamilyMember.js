import React, { useState } from 'react';
import "../../css/General.css";
import maple from '../../assets/maple.png'
import useModal from '../hooks/UseModal'; 
import {modalData} from '../../utils/constants';

const FamilyMember = () => {
  const { isModalOpen, modalContent, openModal, closeModal } = useModal(modalData); // pass modalData as an argument

  const [isStepsVisible, setStepsVisible] = useState(false);

  const toggleSteps = () => {
      setStepsVisible(prevState => !prevState);
  };

  return (
    <div className="job-seeker-container">
      <h1 className="App-text">Portugal’s Family Reunification Visa (D6)</h1>

      <section className="guide-section">
        <h2 className="guide-subtitle">Overview</h2>
        <p>
          The Family Reunification Visa (D6) allows legally resident individuals in Portugal to bring their
          spouse, partner, or family members to live with them. This applies to those with residency permits,
          visas, or settled EU citizen status.
        </p>
        <p>
          Family members who join you will generally have the same residency rights and duration as you. For
          example, if you hold a 2-year residency permit, your family members will typically receive permits
          of the same duration, including the right to work and access healthcare. If you have permanent
          residency, they may first receive a 2-year permit before qualifying for a longer term.
        </p>
      </section>

      <section className="guide-section">
        <h2 className="guide-subtitle">Eligible Family Members</h2>
        <ul className="guide-list">
          <li>Spouse or partner (including those in a stable union of 2+ years)</li>
          <li>Children (including adopted children)</li>
          <li>Children or adopted children of your spouse or partner</li>
          <li>Dependents (e.g., parents or siblings under your custody)</li>
        </ul>
        <p>
          Proof of family ties, such as a marriage certificate or documentation of a stable union, is required. 
          For non-married couples, acceptable evidence includes utility bills, joint address declarations, or 
          registered domestic partnerships.
        </p>
      </section>

      <section className="guide-section">
        <h2 className="guide-subtitle">Family Member Rights</h2>
        <p>
          Family members granted residency through the D6 visa have access to:
        </p>
        <ul className="guide-list">
          <li>Healthcare (with a *numero utente*)</li>
          <li>Work and study in Portugal</li>
          <li>Travel within the Schengen Area (often with you present)</li>
        </ul>

        
      </section>

      <section className="guide-section">
        <h2 className="guide-subtitle">How to Apply for the D6 Visa</h2>
        <p>
          You can apply for the D6 Family Reunification Visa in two ways:
        </p>
        
        <h3>1. Apply While in Portugal</h3>
        <p>
          If you are already in Portugal with a valid visa status, you can apply for the D6 Family Reunification Visa within the country. The process involves scheduling an appointment with the Portuguese authorities to submit the necessary documents.
           Applications are submitted through AIMA (formerly SEF), either directly or with the assistance of a lawyer. In either case, securing an appointment is required.

For direct applications, you can schedule an appointment online, by phone (808 202 653), or through CNAI.

As appointment availability can take several months, it may be worth checking if you can secure an earlier slot at an AIMA office (formerly SEF) in another city or town.
        </p>
        <h4>Required Documents for Applying Within Portugal:</h4>
        <section className="guide-section">
  <h2 className="guide-subtitle">Required Documents for the Family Reunification Visa</h2>
  
  <h3>Documents for the Person with Residency in Portugal</h3>
  <ul className="guide-list">
    <li>Residency documents of the family member with residency in Portugal</li>
    <li>NIF number of the family member (Don't have one? You can get it through Bordr or E-Residence. Or, check our guide on obtaining an NIF number)</li>
    <li>Proof of subsistence (a recent Portuguese bank statement)</li>
    <li>Proof of address (property deed, rental contract, or Atestado de Residência)</li>
  </ul>

  <h3>Documents for the Family Member Applying for Residency in Portugal</h3>
  <ul className="guide-list">
    <li>Certified copy of passport</li>
    <li>Criminal records check (valid for 3 months) from all countries where you have lived for more than 1 year</li>
    <li>Marriage certificate (original) or proof of cohabitation if applying as a couple</li>
    <li>Application fee (€85 for residence permit registration)</li>
  </ul>
</section>

        <h3>2. Apply from Abroad (e.g., from Canada)</h3>
        <p>
          If you are outside of Portugal (for example, in Canada), you can apply for the D6 Family Reunification Visa through the nearest Portuguese consulate or embassy in your country. The application process will be similar, but it will be managed through the consular services, which may require additional steps.
        </p>
 
        <h2 className="guide-subtitle">Documents Checklist</h2>
    
        <ul className="guide-list">
        <li><strong><a href="/formulario_visto_nacional_en.pdf" download="formulario_visto_nacional_en.pdf" target="_blank" rel="noopener noreferrer">Visa Application Form:</a></strong> The form, available in English and Portuguese, must be submitted with your application.</li>
          <li>Passport, valid for at least 3 months after the estimated date of the stay and one certified passport copy</li>
          <li><strong>Proof of regular status (visa/PR card)</strong>, if you are of a nationality other than that of
                                the country where you are applying for a visa, valid at least for two months beyond
                                the validity of the visa you’re applying for.</li>
                                <li><strong><a href='https://rcmp.ca/en/criminal-records/criminal-record-checks/where-go' target='blank'>Criminal Record Certificate:</a><span
                                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                onClick={() => openModal('criminalCanada')}
                            ><img src={maple} className='maple' /></span></strong> A criminal record check is required from every country you have resided in.</li>
                            <li><strong>Portuguese Criminal Check Consent:<span
                                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                onClick={() => openModal('criminalPortugal')}
                            ><img src={maple} className='maple' /></span></strong> Even if you haven't lived in Portugal yet, you will need to authorize a background check in Portugal.</li>
                            <li><strong>Proof of family relationship</strong>  to the person legally living in Portugal (Marriage Certificate, Birth Certificate, whichever applicable)..</li>
                            <li><strong>Copy of the notification of family reunification authorization </strong> made by the Immigration and Borders Services (SEF).<span
                                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                onClick={() => openModal('sefAuthorization')}
                            ><img src={maple} className='maple' /></span></li>
                            <li>NIF number of a person legally living in Portugal.</li>
          <li>Proof of subsistence (bank statement) of a person legally living in Portugal.</li>
          <li>Proof of address (rental contract, property deed, or Atestado de Residência) of a person legally living in Portugal.</li>
          <li><strong>Travel Insurance:</strong> Travel insurance covering repatriation and at least €30,000 in coverage for the duration of your stay is required until your SEF appointment.</li>
                            <li><strong>Health Insurance:</strong> Health insurance is necessary before your SEF appointment, though you can get it through brokers or Portuguese banks.</li>
                            <li><strong>Passport Photos:</strong> One passport-sized photo are required.</li>
                        
          <li>Proof of subsistence</li>
          <li>Application fee (€90 for visa processing and €85 for residence permit registration)</li>
        </ul>
        <p>
          Documents not in Portuguese must be accompanied by certified translations. Ensure translations are 
          recent and valid at the time of the appointment.
        </p>
      </section>

      <section className="guide-section">
        <h2 className="guide-subtitle">Financial Requirements</h2>
        <p>
          You must demonstrate sufficient income to support your family. As a guideline, your income should 
          equal or exceed the Portuguese minimum wage (€635/month in 2021), plus 50% (€317.5) for each 
          additional dependent.
        </p>
      </section>

      <section className="guide-section">
        <h2 className="guide-subtitle">Path to Citizenship</h2>
        <p>
          Family members on a D6 visa are eligible for permanent residency and Portuguese citizenship after 5 
          years of living in Portugal.
        </p>
      </section>

      <footer className="guide-footer">
        <p>
          For more information, visit the{" "}
          <a
            href="https://www.portaldasfinancas.gov.pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEF website
          </a>.
        </p>
        <p>
        Official requirements list is{' '} 
          <a
            href="https://toronto.consuladoportugal.mne.gov.pt/images/vistos/en/family_reunificationd6_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
              here
          </a>.
        </p>
      </footer>

       {/* Modal */}
       {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        {modalContent}
                    </div>
                </div>
            )}
    </div>
  );
};

export default FamilyMember;

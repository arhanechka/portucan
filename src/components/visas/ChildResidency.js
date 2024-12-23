import React from "react";
import '../../css/General.css';  

const ChildResidency = () => {
  return (
    <div className="general-container">
    <h1 className='App-text'>Visa for Students (Ages 15-18) and their parents</h1>

      <section className="guide-section">
        <h3 className="guide-subtitle">Eligibility</h3>
        <p className="guide-text">
          High school students (grades 10-12) are eligible to apply for
          residency permits. In some cases, permits have been granted to
          younger students (e.g., 7th grade) enrolled in Portuguese schools.
        </p>
        <p className="guide-text">
          The permit is valid for one year and can be renewed annually, as long
          as the child continues their studies. While the permit provides full
          residency rights, it does not allow the child to work in Portugal.
          However, parents are allowed to work after reuniting with the child. Children can study at any school in Portugal, whether private or public.
        </p>
      </section>

      <section className="guide-section">
        <h3 className="guide-subtitle">Documents Checklist</h3>
        <ul className="guide-list">
          <li>Passport</li>
          <li>Birth certificate (no older than 6 months)</li>
          <li>Student Progress Report</li>
          <li>Criminal record certificate (for applicants over 16)</li>
          <li>Proof of financial means</li>
          <li>Proof of housing</li>
          <li>
            Authorization from AIMA to check criminal records (for applicants
            over 16)
          </li>
          <li>Enrollment confirmation from the educational institution</li>
          <li>Proof of tuition payment</li>
          <li>Health insurance</li>
          <li>
            Evidence of legal entry and stay in Portugal if applying without a
            residency visa
          </li>
        </ul>
      </section>

      <section className="guide-section">
        <h3 className="guide-subtitle">Steps to Apply for child</h3>
        <ol className="guide-steps">
          <li>
            <strong>Prepare Documents:</strong> Gather identity documents for
            the child: Student Progress Report and birth certificate. Ensure all documents are recent (within six months)
            and translated into Portuguese with apostile.
          </li>
          <li>
            <strong>Criminal Record Certificate:</strong> Obtain and apostille
            the certificate from countries where the applicant lived for more
            than a year after turning 16.
          </li>
          <li>
            <strong>Obtain NIF:</strong> Apply for a Portuguese tax number
            (NIF), required for opening bank accounts and renting housing.
          </li>
          <li>
            <strong>Secure Housing:</strong> Rent a property and sign a
            long-term contract. Ensure the contract is registered with the tax
            authority (Finanças).
          </li>
          <li>
            <strong>Open a Bank Account:</strong> Provide financial proof,
            including income statements and savings.
          </li>
          <li>
            <strong>Enroll in a School:</strong> Take the necessary documents (birth certificate, Student Progress Report, Proof of Address (Certificado de Residência). 
            It is possibile that not all the schools have free places to join, try all around your place of living.  Obtain a study plan and
            enrollment confirmation from the school.
          </li>
          <li>
            <strong>Schedule an Appointment with AIMA:</strong> Contact AIMA to
            book a slot for submitting documents.
          </li>
          <li>
            <strong>Attend AIMA Appointment:</strong> Arrive 10-15 minutes
            early with the child. Children must be present for photographs and
            fingerprints.
          </li>
        </ol>
      </section>
      <section className="guide-section">
        <h3 className="guide-subtitle">Steps to Apply for parents</h3>
        <p>After your child get a residence card you can apply to a <a href="/visa/hasFamilyMember">RESIDENCY STAY VISA FOR FAMILY REUNIFICATION</a> </p>
          </section>

      <footer className="guide-footer">
        <p>
          For more assistance, consult legal experts or visit the{" "}
          <a
            href="https://www.portaldasfinancas.gov.pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portuguese Tax Authority website
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default ChildResidency;

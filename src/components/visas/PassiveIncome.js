import React, { useState } from 'react';
import '../../css/General.css';  // Add CSS styling for the component
import '../../css/Immigration.css'

function PassiveIncome() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [activeModal, setActiveModal] = useState('');

    const openModal = (modalType) => {
        setActiveModal(modalType);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setActiveModal('');
    };

    const modalContent = {
        financialResources: (
            <p>
                If you choose the Portugal D7 visa, you'll need to meet the passive income requirements and earn above the Portuguese minimum  wage at least 820.00 euros per month (you income can be foreign sourced income). Passive income is typically defined as a stable, regular income that does not require active participation, such as: pension, rental, investments, royalties, annuities.
            </p>
        ),
        expressionOfInterest: (
            <p>
                You must express your interest in enrolling in the IEFP, the Portuguese Public Employment Service, before submitting your Job Search Visa application. After submission, you'll receive a declaration via email, which you can use to apply for the visa.
            </p>
        ),
        estimatedStay: (
            <p>
                The "Statement with the conditions for the estimated stay" should include your purpose for the stay, how you plan to support yourself, your accommodation details, and your financial resources for the entire stay. 
                <a href="/Job_Seeker_Statement_Example.pdf" download="Job_Seeker_Statement_Example.pdf" target="_blank" rel="noopener noreferrer">
             Example
        </a>            </p>
        )
    };

    return (
        <div className="job-seeker-container">
            <div className="content-container">
                <div className="App-text" style={{top: '8vh'}}>
                    <p>Passive Income</p>
                </div>
                <p>
    The D7 Visa, also referred to as the Portugal Passive Income Visa, offers residency to non-EU/EEA/Swiss nationals, including retirees, <span
                            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                            onClick={() => openModal('financialResources')}
                        >who have a stable, regular passive income</span> and wish to live in Portugal.
</p>

<p>Applicants who are granted the visa enjoy the following benefits:</p>

<ul>
    <li>The right to live, work, and study in Portugal</li>
    <li>The ability to bring dependent parents and children</li>
    <li>Visa-free access to all 26 Schengen Area countries</li>
    <li>The opportunity to work or start a business in Portugal</li>
    <li>
  The chance to apply for the <a href="/steps-in-portugal/nhr" target="_blank" rel="noopener noreferrer">Non-Habitual Resident (NHR)</a> tax regime
</li>    <li>The possibility of applying for permanent residency or citizenship in Portugal after five years</li>
    <li>Access to Portuguese resident benefits, including healthcare and education</li>
</ul>
<p>What are the steps to get the D7 Portugal Visa?</p>
<ul>
    <li>Obtain a Portuguese tax identification number (<a href='/steps-in-portugal/nif'>NIF</a>).</li>
    <li>Open a personal bank account in Portugal.</li>
    <li>Secure long-term accommodation in Portugal, through purchase, rental, or loan agreement.</li>
    <li>Submit a D7 Visa application and attend an in-person consular interview at the nearest Portuguese consulate in your current country of residence.</li>
    <li>Schedule and attend an appointment with the Portuguese Immigration and Borders Service (SEF).</li>
</ul>
<p>Renewals and minimum stay requirements</p>
<p>After the D7 Visa application is approved, applicants are issued a Portuguese residence card valid for two years. At the end of the second year, the card must be renewed, and a three-year residence card will be issued.</p>
<p>The Passive Income Visa requires that the applicant reside in Portugal for a minimum of six consecutive months or eight non-consecutive months annually.</p>
<ul>
    <li>First 2 years: A minimum stay of 6 consecutive months or 8 non-consecutive months per year is required, with a renewal at the end of the second year, leading to a 3-year residency card.</li>
    <li>Years 2-5: The same minimum stay applies, with a renewal at the end of year 5. At this point, applicants can apply for a 3-year residency card, permanent residency, or Portuguese citizenship.</li>
    </ul>

            
            </div>
              {/* Modal */}
              {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        {modalContent[activeModal]}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PassiveIncome;

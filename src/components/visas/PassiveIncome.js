import React, { useState } from 'react';
import '../../css/General.css';
import '../../css/Immigration.css';
import maple from '../../assets/maple.png'
import arrow from '../../assets/arrow.webp'
import useModal from '../hooks/UseModal'; 
import {month_wage, modalData} from '../../utils/constants';


function PassiveIncome() {
    

    const { isModalOpen, modalContent, openModal, closeModal } = useModal(modalData); // pass modalData as an argument

    const [isStepsVisible, setStepsVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const toggleSteps = () => {
        setStepsVisible(prevState => !prevState);
    };
  const explanations = {
    Single: `Income: €${month_wage} per month + Savings: €${month_wage*12}`,
    Couple: `Income: €${month_wage + month_wage/2}  per month + Savings: €${month_wage*12 + (month_wage*12)/2}`,
    "Parents + 1 child": `Income: €${month_wage + month_wage/2 + (month_wage)*0.30} per month + Savings: €${month_wage*12 + (month_wage*12)/2+(month_wage*12)*0.30}`,
    "Parents + 2 children": `Income: €${month_wage + month_wage/2 + (month_wage)*0.60} per month + Savings: €${month_wage*12 + (month_wage*12)/2+(month_wage*12)*0.30*2}`,
    "Parents + 3 children": `Income: €${month_wage + month_wage/2 + (month_wage)*0.90} per month + Savings: €${month_wage*12 + (month_wage*12)/2+(month_wage*12)*0.30*3} `,
  };
    return (
        <div className="job-seeker-container">
            <h1 className='App-text'>Main Requirements for the D7 Visa</h1>

            <section>
                <h2 >Passive Income</h2>
                <p>
                    The D7 Visa, also referred to as the Portugal Passive Income Visa, offers residency to non-EU/EEA/Swiss nationals, including retirees,
                    <span className="link-style" onClick={() => openModal('financialResources')}>
                        who have a stable, regular passive income
                    </span> and wish to live in Portugal.
                </p>
            </section>

            <section>
                <h2>Benefits of the D7 Visa</h2>
                <ul>
                    <li>The right to live, work, and study in Portugal</li>
                    <li>The ability to bring dependent parents and children</li>
                    <li>Visa-free access to all 26 Schengen Area countries</li>
                    <li>The opportunity to work or start a business in Portugal</li>
                    <li>
                        The chance to apply for the <a href="/steps-in-portugal/nhr"  rel="noopener noreferrer">Non-Habitual Resident (NHR)</a> tax regime
                    </li>
                    <li>The possibility of applying for permanent residency or citizenship in Portugal after five years</li>
                    <li>Access to Portuguese resident benefits, including healthcare and education</li>
                </ul>
            </section>

            <section>
                <h2>Income Requirement</h2>
                <p>For a single applicant, the minimum income needed is <strong>€{month_wage} per month</strong> (2025 figure).</p>
                <ul>
                    <li><strong>Bringing a Partner?</strong> Add 50%, which is €{month_wage/2} per month.</li>
                    <li><strong>Including Dependent Children?</strong> For each child, add €{month_wage*0.30} per month (30% of minimum income).</li>
                </ul>
            </section>

            <section>
                <h2>Savings</h2>
                <p>Applicants must also show they have a financial safety net equivalent to one year’s income saved in a Portuguese bank account:</p>
                <ul>
                    <li><strong>Single Applicants:</strong> €{month_wage*12} (12 months x €{month_wage})</li>
                    <li><strong>Couples:</strong> €{month_wage*12+month_wage/2*12} (12 months x (€{month_wage}+€{month_wage/2}))</li>
                    <li><strong>Parents with Children:</strong> Starting from €{month_wage*12+month_wage/2*12 + month_wage*0.30*12}: Add €{month_wage*12*0.30} for each dependent child (12 months x €{month_wage*0.30})</li>
                </ul>
            </section>

            <select
          className="income-selector"
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
        >
          <option value="" disabled>
            Choose an option
          </option>
          {Object.keys(explanations).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {selectedOption && (
          <p className="explanation">
            <strong>{selectedOption}:</strong> {explanations[selectedOption]}
          </p>
        )}
            <section>
                <h2>Address in Portugal</h2>
                <p>Applicants need a local address before relocating. Most people rent a property, while some choose to buy. It’s also possible to obtain a letter of invitation from a host.</p>
            </section>

            <section>
                <h2>Residency Requirement</h2>
                <p>Unlike the golden visa, the D7 visa is for people committed to living in Portugal. During the first two years, applicants shouldn't spend more than six consecutive months or eight total months outside Portugal.</p>
            </section>



            <section>
                <h2>Renewals and Minimum Stay Requirements</h2>
                <p>After the D7 Visa application is approved, applicants are issued a Portuguese residence card valid for two years. At the end of the second year, the card must be renewed, and a three-year residence card will be issued.</p>
                <p>The Passive Income Visa requires that the applicant reside in Portugal for a minimum of six consecutive months or eight non-consecutive months annually.</p>
                <ul>
                    <li>First 2 years: A minimum stay of 6 consecutive months or 8 non-consecutive months per year is required, with a renewal at the end of the second year, leading to a 3-year residency card.</li>
                    <li>Years 2-5: The same minimum stay applies, with a renewal at the end of year 5. At this point, applicants can apply for a 3-year residency card, permanent residency, or Portuguese citizenship.</li>
                </ul>
            </section>

            <section>
                <h2 className="collapsible-header" onClick={toggleSteps}>
                    Steps and Documents <img src={arrow} className='maple' />
                </h2>
                {isStepsVisible && (
                    <div className="collapsible-content">
                        <h3>Required Steps and Documents for the D7 Visa</h3>
                        <ul>
                            <li><strong><a href="/formulario_visto_nacional_en.pdf" download="formulario_visto_nacional_en.pdf" target="_blank" rel="noopener noreferrer">Visa Application Form:</a></strong> The form, available in English and Portuguese, must be submitted with your application.</li>
                            <li><strong>Valid Passport:</strong> Ensure your passport is valid for at least six months from your visa application date and has at least two blank pages.</li>
                            <li><strong>Proof of regular status (visa/PR card)</strong>, if you are of a nationality other than that of
                                the country where you are applying for a visa, valid at least for two months beyond
                                the validity of the visa you’re applying for.</li>
                            <li><strong>Proof of financial resources</strong> for the period of, at least, 12 months (bank statement)</li>
                            <li><strong>Document</strong>  certifying retirement amount; revenue from property rentals; intellectual or financial assets </li>
                            <li><strong><a href='https://rcmp.ca/en/criminal-records/criminal-record-checks/where-go' target='blank'>Criminal Record Certificate:</a><span
                                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                onClick={() => openModal('criminalCanada')}
                            ><img src={maple} className='maple' /></span></strong> A criminal record check is required from every country you have resided in.</li>
                            <li><strong>Portuguese Criminal Check Consent:<span
                                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                onClick={() => openModal('criminalPortugal')}
                            ><img src={maple} className='maple' /></span></strong> Even if you haven't lived in Portugal yet, you will need to authorize a background check in Portugal.</li>
                            <li><strong>Marriage and Birth Certificates:</strong> If applicable, request these documents from the relevant government authorities.</li>
                            <li><strong>Travel Insurance:</strong> Travel insurance covering repatriation and at least €30,000 in coverage for the duration of your stay is required until your SEF appointment.</li>
                            <li><strong>Health Insurance:</strong> Health insurance is necessary before your SEF appointment, though you can get it through brokers or Portuguese banks.</li>
                            <li><strong>Passport Photos:</strong> One passport-sized photo are required.</li>
                            <li><strong>Flight Itinerary:</strong> A return flight may be requested even before your visa is approved.</li>

                            <li><strong><a href='../steps-in-portugal/nif'> NIF Number:</a></strong> Your Portuguese tax ID number is required. It can be obtained through a lawyer (for non-EU/EEA residents who need a fiscal representative) or by your own.</li>
                            <li><strong><a href='../steps-in-portugal/bank'>Portuguese Bank Account:</a></strong> A Portuguese bank account is necessary to deposit your savings and receive passive income. While online account openings are generally unavailable with major banks, many people come to Portugal or use a lawyer to open one remotely.</li>
                            <li><strong><a href='../steps-in-portugal/property'>Address in Portugal:</a></strong> A local address is required before submitting your visa application. You can either rent or buy property, or use a relocation agency.</li>
                            <li><strong><a href="/Letter_to_Portugal_D7_Visa.pdf" download="Letter_to_Portugal_D7_Visa.pdf" target="_blank" rel="noopener noreferrer">Personal Statement (here is an example):</a></strong> A letter stating your reasons for moving to Portugal and why you are eligible for the visa.</li>

                        </ul>
                        <p><a href='https://toronto.consuladoportugal.mne.gov.pt/images/vistos/en/retirement-religious-_passive_incomed7_en.pdf' target='blank'>Official requirements list is here</a></p>
                    </div>
                )}
            </section>

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
}

export default PassiveIncome;

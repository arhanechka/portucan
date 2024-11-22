import React, { useState } from 'react';
import '../../css/General.css'; 
import maple from '../../assets/maple.png'
import useModal from '../hooks/UseModal'; 
import modalData from '../../utils/constants';

function Freelancer() {
  const { isModalOpen, modalContent, openModal, closeModal } = useModal(modalData); // pass modalData as an argument

  const [isStepsVisible, setStepsVisible] = useState(false);

  const toggleSteps = () => {
      setStepsVisible(prevState => !prevState);
  };

    const [selectedOption, setSelectedOption] = useState("");


  const explanations = {
    Single: "Income: €3,280 per month + Savings: €9,840",
    Couple: "Income: €4,920 per month + Savings: €14,760",
    "Parents + 1 child": "Income: €5,904 per month + Savings: €17,712",
    "Parents + 2 children": "Income: €6,888 per month + Savings: €20,664",
    "Parents + 3 children": "Income: €7,872 per month + Savings: €23,616",
    "Parents + 4 children": "Income: €8,856 per month + Savings: €26,568",
  };
    return (  <div className="job-seeker-container">
    <h1 className='App-text'>Overview of Portugal’s D8 Visa</h1>

    <section>
        <h2>Digital nomads visa</h2>
        <p>
            The D8 Visa is ideal for <span className="highlight">digital nomads, remote workers,</span> and those earning income from outside Portugal.
            <br />
            <span className="highlight">Eligible Applicants:</span> Non-EU/EEA/Swiss nationals, such as Americans, Brits, South Africans, or Argentinians, can apply if they meet the financial requirements.
            <br />
            Not limited to tech professionals—anyone working for non-Portuguese companies or with clients abroad may qualify.
        </p>
    </section>

    <section>
        <h2>Financial Requirements</h2>
        <p>
            <span className="highlight">Minimum Monthly Income:</span> Applicants must demonstrate an average monthly income of <strong>€3,280</strong> (4x Portugal’s minimum wage of €820).  
            <br />
        </p>
    </section>

    <section>
        <h2>Bringing the Family</h2>
        <p>
            Portugal allows family inclusion in the D8 application:
            <ul>
                <li>
                    <strong>Spouse/Partner:</strong> Add 50% of the income requirement (€1,640/month).  
                    Provide proof of a long-term relationship (e.g., shared utility bills or bank statements if cohabitating for 3+ years).
                </li>
                <li>
                    <strong>Dependent Children:</strong> Add 30% for each child (€984/month). Dependents include those under 18 or full-time students.
                </li>
                <p>That quickly adds up, especially as the Portuguese authorities will be looking at the main applicant’s income rather than a combination of the two. So, if you’re bringing your better half, you’ll need €3280 + 50% (€1640) or €4920.

Because of these income requirements, Portugal’s nomad visa is mainly popular with those from the United States, Canada, the UK, and other countries with higher salaries.</p>
            </ul>
        </p>
    </section>

    <section>
                <h2>Savings</h2>
                <p>Applicants must also show they have a financial safety net equivalent to one year’s income saved in a Portuguese bank account:</p>
                <ul>
                    <li><strong>Single Applicants:</strong> €9,840 (12 months x €820)</li>
                    <li><strong>Couples:</strong> €14,760 (12 months x €1,230)</li>
                    <li><strong>Parents with Children:</strong> Add €2,952 for each dependent child (12 months x €246)</li>
                </ul>
            </section>
            <section>
        <h2>Select Your Family Type</h2>
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
      </section>
      <section>
                <h2 className="collapsible-header" onClick={toggleSteps}>
                    Steps and Documents  
                </h2>
               
                    <div className="collapsible-content">
                        <h3>Required Steps and Documents for the D8 Visa</h3>
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
                            <li><strong><a href="/Personal_Statement_for_D8_Visa Application.pdf" download="Personal_Statement_for_D8_Visa Application.pdf" target="_blank" rel="noopener noreferrer">Personal Statement (here is an example):</a></strong> A letter stating your reasons for moving to Portugal and why you are eligible for the visa.</li>

                        </ul>
                    </div>
                    <h3>Specific Documents for the D8 Visa</h3>
                    <ul>
        <li>
          <strong>In case of subordinate work:</strong>
          <ul>
            <li>Work contract; or,</li>
            <li>Declaration by employer confirming the labour link.</li>
          </ul>
        </li>
        <li>
          <strong>In case of independent professional activity:</strong>
          <ul>
            <li>Society contract; or,</li>
            <li>Contract of services provision; or,</li>
            <li>Document attesting the services provided to one or more entities.</li>
          </ul>
        </li>
        <li>
          <strong>Proof of average monthly income for the last three months with a minimum
value equivalent to four monthly minimum wages in Portugal.</strong> </li>
<li>
          <strong>Document attesting your fiscal residence.<span
                                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                onClick={() => openModal('fiscalResidence')}
                            ><img src={maple} className='maple' /></span></strong> </li>
      </ul>
            </section>
            <footer className="guide-footer">
        <p>
        Official requirements list is 
          <a
            href="https://toronto.consuladoportugal.mne.gov.pt/images/vistos/en/digital_nomadsdr_en.pdf"
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
)}

    export default Freelancer;

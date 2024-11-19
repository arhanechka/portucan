import React, { useState } from "react";
import '../../css/General.css';  

const Entrepreneur = () => {
  const [selectedSection, setSelectedSection] = useState("");

  const toggleSection = (section) => {
    setSelectedSection(selectedSection === section ? "" : section);
  };

  return (
    <div className="job-seeker-container">
      <h1 className="App-text">Portugal D2 Visa for entrepreneurs</h1>
      <p>
        If you’re in Canada and planning to set up a business or work independently in Portugal, the D2 Visa is your gateway. This guide simplifies the process, highlighting the steps to apply for the Portugal D2 Visa, essential requirements, and the economic benefits waiting for you.
      </p>

      <div className="section">
        <h2 onClick={() => toggleSection("overview")}>Overview</h2>
        {selectedSection === "overview" && (
          <div>
            <p>
              The D2 Visa offers Canadian entrepreneurs opportunities to establish businesses or freelance in Portugal. It provides perks such as tax incentives and visa-free travel within the Schengen Area. To qualify, applicants must provide proof of sufficient funds, a clean criminal record, and a detailed business plan showing potential economic contributions to Portugal.
            </p>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection("steps")}>Application Steps</h2>
        {selectedSection === "steps" && (
          <ul>
            <li>Secure a Tax Identification Number (NIF).</li>
            <li>Open both personal and business bank accounts in Portugal.</li>
            <li>Prepare necessary documentation, including a business plan.</li>
            <li>Submit your application to the Portuguese Consulate in Canada.</li>
            <li>Attend an interview and follow up on residency requirements.</li>
          </ul>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection("requirements")}>Eligibility and Requirements</h2>
        {selectedSection === "requirements" && (
          <div>
            <h3>Eligibility Criteria</h3>
            <ul>
              <li>Certificate of Criminal Record with no serious convictions.</li>
              <li>Proof of financial stability, such as €19,680 in a Portuguese bank account.</li>
              <li>Business plan outlining the venture’s relevance to Portugal’s economy.</li>
              <li>Medical insurance covering at least €30,000.</li>
            </ul>
            <h3>Financial Stability</h3>
            <p>
              Applicants must show they have sufficient funds for at least 12 months at Portugal’s minimum wage, approximately €9,120 per individual. Savings or investment proof should be demonstrated through bank statements.
            </p>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection("benefits")}>Advantages for Canadians</h2>
        {selectedSection === "benefits" && (
          <div>
            <p>
              Portugal’s stable economy and reliable banking system create a favorable environment for Canadian entrepreneurs. The D2 Visa offers:
            </p>
            <ul>
              <li>Tax incentives reducing financial burdens for businesses.</li>
              <li>Residency benefits, including visa-free travel across Schengen countries.</li>
              <li>Opportunities for permanent residency or citizenship after five years.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection("business")}>Business Relevance to Portugal</h2>
        {selectedSection === "business" && (
          <div>
            <p>
              A well-prepared business plan is critical for approval. It should highlight:
            </p>
            <ul>
              <li>Economic, social, scientific, or cultural benefits to Portugal.</li>
              <li>Potential job creation or local market integration.</li>
              <li>Minimum investment of approximately €5,000 for new businesses.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection("pros-cons")}>Pros and Cons</h2>
        {selectedSection === "pros-cons" && (
          <div>
            <h3>Pros</h3>
            <ul>
              <li>Business freedom to start or move ventures to Portugal.</li>
              <li>No restrictions on the type of business you can run.</li>
              <li>Relatively low profit requirements to sustain yourself and dependents.</li>
              <li>No job creation required—focus on your business alone.</li>
              <li>Fast processing time (typically 60-90 days).</li>
              <li>English is widely spoken in Portugal.</li>
              <li>Potential for tax incentives like NHR 2.0 for entrepreneurs.</li>
              <li>No minimum investment required—flexibility to fund as needed.</li>
              <li>No need for incubator approval—your business plan drives success.</li>
              <li>Access to the entire European market for business opportunities.</li>
              <li>Option to apply in Portugal or from Canada.</li>
              <li>Flexible stay requirements compared to some other visa types.</li>
            </ul>
            <h3>Cons</h3>
            <ul>
              <li>More scrutiny than other visas, like the D7.</li>
              <li>Requires a comprehensive, detailed application to demonstrate value.</li>
              <li>Financial and logistical preparation needed before applying.</li>
            </ul>
            <p>For the Portuguese government, approving a D2 visa presents a greater risk compared to visas like the D7, which are supported by predictable income sources such as rentals or pensions. With the D2, you're essentially asking the government to invest trust in your entrepreneurial potential. While they are open to this, they will meticulously review every aspect of your visa application to ensure its credibility and viability.</p>
          </div>
        )}
      </div>

      <div className="section">
        <h2 onClick={() => toggleSection("residency")}>Residency and Next Steps</h2>
        {selectedSection === "residency" && (
          <div>
            <p>
              The D2 Visa allows a stay in Portugal for up to four months, during which you can apply for a temporary residence permit. Key steps include:
            </p>
            <ul>
              <li>Booking an appointment with SEF (Foreigners and Borders Service).</li>
              <li>Obtaining a temporary residence permit valid for two years.</li>
              <li>Ensuring all required documents are apostilled and translated.</li>
            </ul>
            <p>
              After five years, D2 Visa holders can apply for permanent residency or citizenship, subject to language proficiency and other requirements.
            </p>
          </div>
        )}
      </div>
      <footer className="guide-footer">
        <p>
        Official requirements list is{' '}
          <a
            href="https://toronto.consuladoportugal.mne.gov.pt/images/vistos/en/independent_work-enterpreneurs-startup-d2_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
              here
          </a>.
        </p>
      </footer>
    </div>
  );
};

export default Entrepreneur;

import React from "react";

const MovingChecklist = () => {
  const steps = [
    {
      title: "Organize Your Financial Matters",
      content: (
        <>
          <p>
            <strong>Bank Accounts and Investments</strong>: Decide whether to maintain or close these accounts.
          </p>
          <ul>
            <li>
              <strong>TFSA</strong>: While it remains tax-free in Canada, income generated may be taxable in Portugal.
            </li>
            <li>
              <strong>RRSP</strong>: Withdrawals are taxed in Canada, with a withholding rate of 25% for non-residents,
              unless modified by the Canada-Portugal tax treaty.
            </li>
            <li>Consult a financial advisor to understand your options fully.</li>
          </ul>
          <p>
            <strong>Credit Cards and Banking</strong>:
          </p>
          <ul>
            <li>Notify your bank of your move to prevent account freezes.</li>
            <li>Open a Portuguese bank account if possible or research local options to do so after arrival.</li>
            <li>Pay off any Canadian debts to avoid complications later.</li>
          </ul>
          <p>
            <strong>Reference:</strong>{" "}
            <a
              href="https://www.canada.ca/en/department-finance/programs/tax-policy/tax-treaties/in-force.html#Portugal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canada’s Tax Treaty with Portugal
            </a>
          </p>
        </>
      ),
    },
    {
      title: "Address Tax Obligations",
      content: (
        <>
          <p>
            <strong>Notify the Canada Revenue Agency (CRA)</strong>: Inform the CRA of your departure to change your tax
            status to a non-resident.
          </p>
          <p>
            <strong>File a Final Canadian Tax Return</strong>: Report worldwide income up to your departure date.
          </p>
          <p>
            <strong>Exit Tax on Investments</strong>: If you own stocks or other investments, you may need to declare a
            "deemed disposition," essentially treating your holdings as if sold.
          </p>
          <p>
            <strong>What to Do with CRA:</strong>
          </p>
          <ul>
            <li>Update your address to ensure CRA correspondence reaches you.</li>
            <li>
              Complete Form NR73 (Determination of Residency Status) if needed, especially if your residency status is
              unclear.
            </li>
            <li>
              If you receive government benefits (e.g., GST/HST credits, child benefits), notify the CRA to stop or
              adjust payments based on your non-resident status.
            </li>
          </ul>
          <p>
            <strong>Reference:</strong>{" "}
            <a
              href="https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/information-you-leave-canada-emigrants.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CRA’s guide for emigrants
            </a>
          </p>
        </>
      ),
    },
    {
      title: "Manage Health Insurance and Benefits",
      content: (
        <>
          <ul>
            <li>Notify your provincial health provider about your departure. Most plans stop coverage after you leave.</li>
            <li>Secure international health insurance to cover you during the transition.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Close or Update Subscriptions and Services",
      content: (
        <>
          <ul>
            <li>Cancel services like electricity, internet, and streaming platforms.</li>
            <li>Research driver’s license exchange requirements for Portugal.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Handle Real Estate and Housing",
      content: (
        <>
          <ul>
            <li>Provide proper notice to your landlord if renting.</li>
            <li>Decide whether to sell, rent, or keep your property if you own it.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Prepare for Portuguese Bureaucracy",
      content: (
        <>
          <p>Collect the following documents:</p>
          <ul>
            <li>Birth and marriage certificates.</li>
            <li>Diplomas and police clearance certificates.</li>
          </ul>
          <p>Apostille these documents for recognition in Portugal.</p>
          <p>
            <strong>Reference:</strong>{" "}
            <a
              href="https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apostille process in Canada
            </a>
          </p>
        </>
      ),
    },
    {
      title: "Plan for Shipping and Relocation",
      content: (
        <>
          <ul>
            <li>Evaluate what belongings to ship and research customs regulations in Portugal.</li>
            <li>Ensure pets meet vaccination and microchip requirements.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Research Your Portuguese Residency Obligations",
      content: (
        <>
          <ul>
            <li>
              Understand visa requirements, whether it’s the D7 visa (passive income) or D8 visa (digital nomads).
            </li>
            <li>Plan for obtaining your residence permit after arrival.</li>
          </ul>
          <p>
            <strong>Reference:</strong>{" "}
            <a href="https://www.sef.pt/en/Pages/Homepage.aspx" target="_blank" rel="noopener noreferrer">
              Portugal’s visa options
            </a>
          </p>
        </>
      ),
    },
    {
      title: "Notify Key Contacts and Organizations",
      content: (
        <>
          <ul>
            <li>Inform your employer, insurance providers, and others about your move.</li>
            <li>Redirect your mail via Canada Post to avoid missing important correspondence.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Learn About Portuguese Tax and Residency",
      content: (
        <>
          <p>
            Portugal offers tax benefits like the Non-Habitual Resident (NHR) program, which may exempt foreign income
            from Portuguese taxes for up to 10 years.
          </p>
          <p>
            <strong>Reference:</strong>{" "}
            <a href="https://www.portugal.gov.pt/en" target="_blank" rel="noopener noreferrer">
              NHR program
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="general-container">
      <h1 style={styles.heading}>Essential Steps to Take in Canada Before Immigrating to Portugal</h1>
      {steps.map((step, index) => (
        <div key={index} style={styles.step}>
          <h2 style={styles.stepTitle}>
            {index + 1}. {step.title}
          </h2>
          <div>{step.content}</div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    lineHeight: "1.6",
  },
  heading: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "20px",
  },
  step: {
    marginBottom: "20px",
  },
  stepTitle: {
    fontSize: "1.5rem",
    color: "#333",
  },
};

export default MovingChecklist;

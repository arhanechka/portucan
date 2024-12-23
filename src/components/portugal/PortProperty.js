import React from 'react';
import '../../css/General.css';  

const PortProperty = () => {

  return (
    <div className="job-seeker-container">
      <h1  className='App-text'>Buying or Renting Property in Portugal for a Visa</h1>
      
      <section className="property-overview">
        <h2>Types of Property and Costs</h2>
        <p>
          The price of property in Portugal varies depending on location and size. Here are examples based on a two-bedroom (T2) property in different regions:
        </p>
        <ul>
          <li><strong>Lisbon</strong>: T2 rental prices range from €1,200–€2,500/month in central areas and €800–€1,500/month in the suburbs. Purchase prices range from €250,000 to €500,000.</li>
          <li><strong>Porto</strong>: Rental prices vary from €700–€1,500/month in the city center and €500–€900/month in the suburbs. Purchase prices typically range from €200,000–€350,000.</li>
          <li><strong>Algarve</strong>: Rental prices are between €700–€1,500/month, and purchase prices range from €150,000 to €400,000.</li>
        </ul>
      </section>

      <section className="visa-requirements">
        <h2>Rental for Residency Purposes</h2>
        <p>
          Renting property in Portugal is common for obtaining the D7/D8 visa (for those with passive income). To qualify, you generally need a rental contract of at least one year. Some cases may require a Portuguese guarantor.
        </p>
        </section>
      <section className="real-estate-agents">
        <h2>Role of Real Estate Agents</h2>
        <p>
          Real estate agents (imobiliárias) are essential for both renting and buying properties. They help with paperwork, provide listings, and assist in negotiations. Typically, renters pay one month's rent as a fee, while buyers don't pay anything, it's responsibility of seller.
        </p>
      </section>

      <section className="required-documents">
        <h2>Required Documents</h2>
        <h3>For Renters</h3>
        <ul>
          <li>Passport or valid ID</li>
          <li>Proof of income or bank statements</li>
          <li>Proof of address</li>
          <li>Portuguese NIF (tax identification number)</li>
        </ul>

        <h3>For Buyers</h3>
        <ul>
          <li>Passport or valid ID</li>
          <li>Portuguese NIF</li>
          <li>Proof of income or financial stability</li>
          <li>Proof of funds for the property purchase</li>
        </ul>
      </section>

      <section className="potential-issues">
        <h2>Potential Issues for Foreigners</h2>
        <ul>
          <li><strong>Language Barrier</strong>: Documents are often in Portuguese, so having a translator is recommended.</li>
          <li><strong>Guarantor Requirements</strong>: A lot of landlords require a Portuguese guarantor if you lack stable income in Portugal.</li>
          <li><strong>Financial Documentation</strong>: Proof of income can be complex for foreigners, especially if you have income from abroad.</li>
        </ul>
      </section>
    </div>
  );
};

export default PortProperty;

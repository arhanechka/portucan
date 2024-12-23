import React from 'react';
import '../../css/General.css';  

const CadBanks = () => {
  return (
    <div className="job-seeker-container">
      <h1 className='App-text'>Overview of Portuguese Banks in Canada</h1>
      <p>
        Portugal’s banking system offers a variety of services tailored to residents and non-residents. These include account management, mobile banking, credit facilities, and investment options. Here's a breakdown of key banks, approximate service fees, and the process for opening an account as a foreigner.
      </p>

      <section>
        <h2>Portuguese Bank Presence in Canada</h2>
        <p>
          While Portuguese banks do not have extensive branch networks in Canada, some institutions cater to Portuguese expats and Portuguese-Canadian communities.
        </p>

        <article className="bank">
          <h3>1. Banco Santander Totta</h3>
          <p>
            <strong>Website:</strong>{" "}
            <a href="https://www.santanderconsumer.ca/" target="_blank" rel="noopener noreferrer">
              Santander Canada
            </a>
          </p>
          <p>
            <strong>Monthly Fees:</strong> International accounts may charge $10–$15/month.
          </p>
          <p>
            <strong>Ease of Opening Accounts:</strong> Supports international transfers and basic account management.
          </p>
          <p>
            <strong>Cities:</strong> Limited partnerships in major Canadian cities.
          </p>
        </article>

        <article className="bank">
          <h3>2. BMO (Portuguese Community Focus)</h3>
          <p>
            <strong>Website:</strong>{" "}
            <a href="https://www.bmo.com" target="_blank" rel="noopener noreferrer">
              BMO
            </a>
          </p>
          <p>
            <strong>Monthly Fees:</strong> Similar to domestic accounts; may support NIF-based transfers to Portugal.
          </p>
          <p>
            <strong>Ease of Opening Accounts:</strong> Open to Portuguese-speaking clients with valid documentation.
          </p>
          <p>
            <strong>Cities:</strong> Active in Toronto and Montreal.
          </p>
        </article>

        <article className="bank">
          <h3>3. Caixa Geral De Depositos - Portuguese Bank in Toronto</h3>
          <p>
            <strong>Website:</strong>{" "}
            <a href="https://www.cgd.pt/Ajuda/Rede-Internacional-CGD/Pages/Canada.aspx" target="_blank" rel="noopener noreferrer">
              Official Portuguese Web site
            </a>
          </p>
          <p>
            <strong>Monthly Fees:</strong> Similar to domestic accounts; may support NIF-based transfers to Portugal.
          </p>
          <p>
            <strong>Ease of Opening Accounts:</strong> Open to clients with valid documentation.
          </p>
          <p>
            <strong>Cities:</strong> Active in Toronto. <a href='https://www.google.com/maps/place/Caixa+Geral+De+Depositos/@43.6542513,-79.3876922,15z/data=!3m1!5s0x882b34cc1f90fb31:0xcfa8e79fbd5fd6f7!4m15!1m8!3m7!1s0x882b34ceced030a7:0x87e05f13bef35f0d!2sCaixa+Geral+De+Depositos!8m2!3d43.654263!4d-79.3876773!10e5!16s%2Fg%2F1hc57r7qr!3m5!1s0x882b34ceced030a7:0x87e05f13bef35f0d!8m2!3d43.654263!4d-79.3876773!16s%2Fg%2F1hc57r7qr?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>Map</a>
          </p>
        </article>
        <article className="bank">
  <h3>4.Millennium via Bordr</h3>
  <p>
    <strong>Website:</strong>{" "}
    <a href="https://bordr.com" target="_blank" rel="noopener noreferrer">
      Bordr
    </a>
  </p>
  <p>
    <strong>Setup Fees:</strong> Approximately €350, covering NIF assistance and signature certification.
  </p>
  <p>
    <strong>Services:</strong> Bordr helps non-residents obtain a Portuguese tax number (NIF) and open Millennium bank accounts remotely.
  </p>
  <p>
    <strong>Ease of Opening Accounts:</strong> Fully remote process with video verification and lawyer-certified documents; no physical presence required.
  </p>
  <p>
    <strong>Required Documents:</strong> Passport, proof of address, Portuguese NIF, and proof of employment.
  </p>
  <p>
    <strong>Additional Benefits:</strong> Streamlined access to EUR and USD accounts with personalized bank manager support.
  </p>
</article>

      </section>
    </div>
  );
};

export default CadBanks;

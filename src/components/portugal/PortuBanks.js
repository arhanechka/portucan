import React from "react";
import "../../css/General.css";

const PortuBanks = () => {
  return (
    <div className="general-container">
      <h1 className="App-text">Overview of Portuguese Banks in Portugal</h1>
      <p>
        Portugal’s banking system offers a variety of services tailored to
        residents and non-residents. These include account management, mobile
        banking, credit facilities, and investment options. Here's a breakdown
        of key banks, approximate service fees, and the process for opening an
        account as a foreigner.
      </p>

      <section className="main-class">
        <h2>Top Portuguese Banks</h2>

        <article className="bank">
          <h3>1. Caixa Geral de Depósitos (CGD)</h3>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.cgd.pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              CGD
            </a>
          </p>
          <p>
            <strong>Monthly Fees:</strong> €4–€6/month, depending on the
            services included.
          </p>
          <p>
            <strong>Account Opening Time:</strong> 2–5 business days.
          </p>
          <p>
            <strong>Ease of Account Opening:</strong> Government-owned and
            well-suited for newcomers.
          </p>
          <p>
            <strong>Required Documents:</strong> Passport, proof of address, NIF
            (Portuguese tax number), and potentially proof of income.
          </p>
          <p>
            <strong>Potential Challenges:</strong> Lengthy branch wait times
            during peak hours.
          </p>
          <p>
            <strong>Mobile App:</strong> Comprehensive app for payments,
            transfers, and account management.
          </p>
        </article>

        <article className="bank">
          <h3>2. Millennium BCP</h3>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.millenniumbcp.pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Millennium BCP
            </a>
          </p>
          <p>
            <strong>Monthly Fees:</strong> €5–€8/month (fees can be waived for
            students or with a minimum balance).
          </p>
          <p>
            <strong>Account Opening Time:</strong> 1–3 business days (online),
            5–7 days (branch).
          </p>
          <p>
            <strong>Ease of Account Opening:</strong> Foreigner-friendly with
            English services.
          </p>
          <p>
            <strong>Required Documents:</strong> Passport, NIF, proof of
            address, and potentially employment/income documentation.
          </p>
          <p>
            <strong>Potential Challenges:</strong> Occasional delays in online
            verification.
          </p>
          <p>
            <strong>Mobile App:</strong> Award-winning app with multilingual
            support.
          </p>
        </article>

        <article className="bank">
          <h3>3. Banco Santander Portugal</h3>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.santander.pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Santander Portugal
            </a>
          </p>
          <p>
            <strong>Monthly Fees:</strong> Starting at €5/month for basic
            accounts.
          </p>
          <p>
            <strong>Account Opening Time:</strong> 3–5 business days.
          </p>
          <p>
            <strong>Ease of Account Opening:</strong> Open to foreigners with
            the standard documentation.
          </p>
          <p>
            <strong>Required Documents:</strong> Passport, proof of address, and
            NIF.
          </p>
          <p>
            <strong>Potential Challenges:</strong> Limited English support in
            smaller branches.
          </p>
          <p>
            <strong>Mobile App:</strong> Robust platform for online banking and
            customer support.
          </p>
        </article>

        <article className="bank">
          <h3>4. Novo Banco</h3>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.novobanco.pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Novo Banco
            </a>
          </p>
          <p>
            <strong>Monthly Fees:</strong> Around €4–€6 for standard accounts.
          </p>
          <p>
            <strong>Account Opening Time:</strong> 5–7 business days.
          </p>
          <p>
            <strong>Ease of Account Opening:</strong> Known for its support for
            expats, though services may be less extensive in English.
          </p>
          <p>
            <strong>Required Documents:</strong> Passport, NIF, and proof of
            address.
          </p>
          <p>
            <strong>Potential Challenges:</strong> Customer service issues for
            complex setups.
          </p>
          <p>
            <strong>Mobile App:</strong> Comprehensive app for everyday banking
            needs.
          </p>
        </article>
      </section>
    </div>
  );
};

export default PortuBanks;

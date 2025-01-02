import React, { useState } from "react";
import "../../css/General.css"; // Add CSS styling for the component
import maple from "../../assets/maple.png";

function Nif() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [hasRepresentative, setHasRepresentative] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveModal("");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "I would like to request an NIF number online.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "I would like to request an NIF number online.",
    });
  };

  const modalContent = {
    visit: (
      <p>Mostly probably, you will need somebody, who speaks Portuguese</p>
    ),
    sharing: (
      <p>
        In Canada, it’s well-known that sharing your Social Insurance Number
        (SIN) is generally limited to employers and banks to prevent identity
        theft and fraud. In Portugal, however, the approach to tax
        identification numbers is quite different. Here, you might find yourself
        giving your tax number to a cashier at the supermarket, as it’s commonly
        requested for various transactions.
      </p>
    ),
    resident: (
      <p>
        As a newcomer and potential immigrant, it’s essential to understand an
        important detail: Portugal MAY consider you a tax resident if you have a
        Portuguese address linked to your NIF (tax identification number) even
        if you spend less than 183 days in Portugal. Therefore, if you do not
        yet plan to live, file taxes, or pay taxes in Portugal, use your
        Canadian address when applying for your NIF. You can always update this
        address after moving through your personal account on the *Portal das
        Finanças*.
      </p>
    ),
  };

  return (
    <div className="general-container">
      <div className="content-container">
        <h1 className="App-text" style={{ top: "7vh" }}>
          Número de Contribuinte (NIF)
        </h1>
        <p className="main-class">
          The Número de Identificação Fiscal (NIF) is a unique 9-digit tax
          identification number in Portugal, often referred to as the Número de
          Contribuinte. The Portuguese government requires it for tracking
          financial activities and subscriptions.{" "}
          <span
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
            onClick={() => openModal("resident")}
          >
            <img src={maple} className="maple" alt="logo" />
          </span>
        </p>

        <h3>You’ll need a NIF to:</h3>
        <ol className="spaced-list main-class">
          <ul>
            <li>Apply for residency visas</li>
            <li>Buy or rent property</li>
            <li>Get a job or start a business</li>
            <li>Inherit assets in Portugal</li>
            <li>Pay taxes and contribute to social security</li>
            <li>Set up utilities, internet, and mobile contracts</li>
            <li>Purchase a car</li>
            <li>Open a Portuguese bank account</li>
            <li>
              Additionally, many stores may ask for your NIF at checkout or for
              online purchases. This request is usually for tax reporting
              purposes, allowing you to receive potential tax returns. Overall,
              the NIF is a nearly universal requirement in Portugal for
              transactions and official processes.
              <span
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={() => openModal("sharing")}
              >
                <img src={maple} className="maple" />
              </span>
            </li>
          </ul>
        </ol>
        <p className="main-class">
          To apply for a NIF, non-residents, including Canadian visitors, can
          apply directly at a Portuguese tax office or online via a certified
          agency.
        </p>

        <div
          className="radio-options main-class"
          style={{ display: "flex", gap: "20px", margin: "30px 0" }}
        >
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              checked={hasRepresentative === true}
              onChange={() => setHasRepresentative(true)}
              style={{ marginRight: "10px" }}
            />
            I am the resident in the EU/EEA or have a Portuguese representative
            and want to do it by myself
          </label>
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              checked={hasRepresentative === false}
              onChange={() => setHasRepresentative(false)}
              style={{ marginRight: "10px" }}
            />
            I don't have a Portuguese representative and need help with a
            service
          </label>
        </div>

        {hasRepresentative === true && (
          <div className="representative-info" style={{ marginTop: "20px" }}>
            <h3>How to Apply for a NIF by yourself (it's free)</h3>
            <p className="main-class">
              To apply in person, follow these steps:
            </p>
            <ol className="spaced-list main-class">
              <li>
                Gather required documents:
                <ul>
                  <li>Your passport for identification</li>
                  <li>Proof of address in Canada, such as a utility bill</li>
                </ul>
              </li>
              <li>
                Visit the nearest tax office (Serviço de Finanças). To get a NIF
                (Número de Identificação Fiscal) in Portugal, at the Tax Office,
                you should book a face-to-face appointment.
                <span
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                  onClick={() => openModal("visit")}
                >
                  Appointments at a tax office can be made by telephoning 217
                  206 707.
                </span>
              </li>
              <li>
                If you are Non-EU citizen, bring a Portuguese tax
                representative. Non-EU citizens need a Portuguese tax
                representative who will act as a local contact for tax matters.
                This can be a Portuguese citizen, a resident, or a professional
                service.
              </li>
              <li>
                Go to the tax office, fill out the required forms, and submit
                your documents with the assistance of your tax representative if
                necessary.
              </li>
              <li>
                Once processed, you will receive your NIF on the same day. It’s
                often given on a paper document or sometimes just verbally if
                they don’t have paper slips.
              </li>
              <li>
                Keep in mind that within a week to 10 days, a temporary password
                for your tax office account will be sent to the address you
                provided as your tax address. This password will allow you to
                log in once and change it for future access. Be sure to clarify
                which address the password will be sent to, especially if you
                provided a Canadian address — whether it will be sent to you or
                to your representative. It’s important not to miss this letter
                because the password has an expiration date. Once it expires,
                you'll need to go back to the tax office to get a new temporary
                password, which can be inconvenient.
              </li>
            </ol>
          </div>
        )}

        {hasRepresentative === false && (
          <div className="no-representative-info" style={{ marginTop: "20px" }}>
            <h3>How to Apply for a NIF Online</h3>
            <div className="nif-request-container">
              <p className="main-class">
                We can obtain an NIF for you without your physical presence by
                processing your request and documents online. To proceed, we’ll
                need a copy of your passport and any document confirming your
                address in Canada. Please fill out the form, and we will contact
                you promptly.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name">First and Last Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {modalContent[activeModal]}
          </div>
        </div>
      )}
    </div>
  );
}

export default Nif;

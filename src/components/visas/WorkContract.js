import React, { useState } from "react";
import D1WorkContract from "./D1WorkContract";
import D3WorkContract from "./D3WorkContract";

const WorkContract = () => {
  const [selectedVisa, setSelectedVisa] = useState(null);

  const handleVisaChange = (e) => {
    setSelectedVisa(e.target.value);
  };

  return (
    <div className="general-container">
 <h1 className='App-text'>Portugal work visas</h1>
 <h2>There are two types of work visas in Portugal. Let’s explore their differences and find out which one is right for you.</h2>
      <h2>D1 vs D3</h2>
      <p>
        The D1 is the more general employment visa, while the D3 (HQA) visa targets highly skilled professionals with advanced degrees in specific fields like IT, engineering, medicine, science, and executive management.
      </p>
      <p>
        The D1 visa does not require a higher education degree or specific industry experience. However, the job must be advertised to Portuguese and EU/EEA citizens before it can be offered to a non-EU/EEA candidate. This is mandated by the Institute for Employment and Vocational Training in Portugal (IEFP).
      </p>
      <p>
          The D3 Visa is often seen as having a smoother and quicker application process. It’s given higher priority by the Portuguese government, leading to faster approval times than many other visa types.
        </p>
        <p>
          A major advantage of the D3 Visa is that it can pave the way to obtaining an EU Blue Card in Portugal. Holding an EU Blue Card allows you the flexibility to work and live across the EU, enhancing your career options and freedom to move within the bloc.
        
      </p>
    

      <div className="visa-selection">
        <h3>Select Visa Type</h3>
        <div>
          <label>
            <input
              type="radio"
              name="visaType"
              value="D3"
              checked={selectedVisa === "D3"}
              onChange={handleVisaChange}
            />
            D3 Work Visa
          </label>
          <label style={{ marginLeft: "20px" }}>
            <input
              type="radio"
              name="visaType"
              value="D1"
              checked={selectedVisa === "D1"}
              onChange={handleVisaChange}
            />
            D1 Work Visa
          </label>
        </div>
      </div>

      <div className="visa-details">
        {selectedVisa === "D3" && (
          <div>
            <h3>D3 Work Visa Details</h3>
            <p>
              The D3 Visa is specifically designed for highly skilled
              professionals with advanced qualifications in areas like IT,
              engineering, medicine, science, or executive management. It
              offers a faster application process and eligibility for the EU
              Blue Card, enabling work and residence across the EU.
            </p>
            <D3WorkContract/>
          </div>
        )}
        {selectedVisa === "D1" && (
          <div>
            <h3>D1 Work Visa Details</h3>
            <p>
              The D1 Visa is a general employment visa that doesn’t require
              advanced degrees or industry-specific experience. However, jobs
              must be advertised to Portuguese and EU/EEA citizens before being
              offered to non-EU/EEA applicants, as per IEFP regulations.
            </p>
            <D1WorkContract/>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkContract;

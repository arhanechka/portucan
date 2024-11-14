import React, { useState } from 'react';
import '../../css/General.css';  // Add CSS styling for the component

function JobSeeker() {
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
                The minimum wage in most of Portugal is €822.50 per month, assuming 12 annual payments. In practice, however, payments are paid in 14 annual installments, so the minimum payment, in this case, would be €705. Therefore, the minimum amount in your account should be €2467.5. Keep in mind that it is always better to have a larger amount.
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
                <h1 className="App-text" style={{ top: '7vh' }}>Job Seeker Visa</h1>
                <p>
                    The Job Seeker Visa entitles its holder to enter and remain only in Portugal for the purpose of looking for a job. It authorizes the holder to carry out a subordinated work activity until the visa expires or until a residence permit is granted.
                </p>
                <p>
                    This visa is granted for a period of 120 days, renewable for another 60 days, and allows only one entry into Portugal.
                </p>
                <p>
                    The issuance of this visa requires the applicant to schedule a date with the competent services within the 120-day validity period of the visa. Once the applicant formalizes an employment contract, they can apply for a residence permit. The application must meet the general conditions for granting a temporary residence permit under article 77 of the Law.
                </p>
                <p>
                    If the visa expires without an employment relationship being established, the visa holder must leave Portugal. Reapplication for the visa can only occur one year after the previous visa’s expiration.
                </p>
                <h3>First Step</h3>
                <p>
                    You must  <a href="https://www.iefp.pt/declaracao-visto-de-procura-de-trabalho?tab=english" target="_blank" rel="noopener noreferrer">express interest in enrolling</a> in the Institute of Employment and Vocational Training (IEFP), the Portuguese Public Employment Service, before submitting your Job Search Visa application.
                </p>
                <p>        <a href="https://formularios.iefp.pt/index.php/929227?lang=en" target="_blank" rel="noopener noreferrer">
                    Link to the form </a></p>
                <p>After submitting the form you receive the declaration (by email) and you can apply for the Job Search Visa, "online" and/or from the nearest Portuguese consulate, upon prior appointment.</p>
                <h3>General Documentation</h3>
                <ul>
                    <li><a href="https://vistos.mne.gov.pt/images/formulario_visto_nacional_en.pdf" target="_blank" rel="noopener noreferrer">National Visa application filled and signed by the applicant</a></li>
                    <li>Valid passport with 3 months of validity after the return date</li>
                    <li>2 passport-sized photos</li>
                    <li>Criminal record certificate (apostilled or legalized if applicable)</li>
                    <li>Valid travel insurance with coverage for urgent medical care</li>
                    <li>
                        <span
                            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                            onClick={() => openModal('financialResources')}
                        >
                            Proof of financial resources (at least three months of guaranteed minimum salary)
                        </span>
                    </li>
                </ul>
                <h3>Specific Documents</h3>
                <ul>
                <li>
                        <span
                            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                            onClick={() => openModal('estimatedStay')}
                        >
                            Own statment with the indication of the conditions for the estimated stay.
                        </span>
                    </li>
                    <li>
                        <span
                            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                            onClick={() => openModal('expressionOfInterest')}
                        >
                            Proof of presentation of declaration of expression of interest for enrolment in the IEFP
                        </span>
                    </li>
                   
                </ul>
                <p>*** The visa is granted for 120 days and may be extended for another 60 days if you provide proof that you are enrolled in the IEFP as a jobseeker (one of proofs can be the <a href="https://www.iefp.pt/redecentros" target="_blank" rel="noopener noreferrer">registration</a> in the nearest job service).</p>
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

export default JobSeeker;

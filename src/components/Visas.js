import React, { useEffect, useState } from 'react';
import '../css/Visas.css';  // Добавим стили

function Visas() {
    const [selectedOptions, setSelectedOptions] = useState({
        hasFamilyMember: false,
        hasPassiveIncome: false,
        isFreelancer: false,
        hasChild: false,
        hasWorkContract: false,
        hasBusiness: false,
        lookForJob: false
    });
    const [visibleTextBlocks, setVisibleTextBlocks] = useState([]);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedOptions(prevState => ({
            ...prevState,
            [name]: checked,
        }));
    };

    useEffect(() => {
        const updatedVisibleBlocks = Object.entries(selectedOptions)
            .filter(([_, isChecked]) => isChecked)
            .map(([option]) => option);
        setVisibleTextBlocks(updatedVisibleBlocks);
    }, [selectedOptions]);

    const getOptionTitle = (option) => {
        const titles = {
            hasFamilyMember: "Visto de Reagrupamento Familiar - D6",
            hasPassiveIncome: "Visto D7 - Passive Income Visa",
            isFreelancer: "Visto D8 - (Freelancer Visa)",
            hasChild: "Visto de Estudante/Visto de Reagrupamento Familiar: D2/D6",
            hasWorkContract: "Visto de Trabalho (Work Contract Visa) - D3",
            hasBusiness: "Entrepreneur or Self-Employed Worker Visa - D2",
            willingToStudy: "Student visa - D4",
            willingToLearnLanguage: "Student or Short term visa",
            lookForJob: "Job Seekers Visa - D1"
        };
        return titles[option];
    };

    const getOptionText = (key) => {
        switch (key) {
            case 'hasFamilyMember':
                return `If you have a Portuguese family member, you may be eligible for a Family Reunification Visa (Visto de Reagrupamento Familiar) in Portugal. This visa is for family members of Portuguese citizens or residents who wish to join them in Portugal. It allows you to live, work, and study in Portugal and can be a pathway to permanent residency if your family ties remain active. To apply, you'll typically need to provide proof of your relationship to the Portuguese family member (such as a marriage certificate or birth certificate) and documentation showing they have the financial means to support you.`;
            case 'hasPassiveIncome':
                return 'Visto D7 (Passive Income Visa) is a visa for individuals who wish to live in Portugal and can demonstrate a stable source of passive income, such as pensions, rental income, or investments. The visa allows residents to live in the country without the need to work, provided their income is sufficient to cover living expenses. It is valid for two years, with the possibility of renewal and eventually obtaining permanent residency.';
            case 'isFreelancer':
                return 'Visto D8 (Freelancer Visa) is for self-employed individuals or freelancers who wish to live and work in Portugal. Applicants must prove that they have a stable income from their freelance work or remote job. The visa allows the holder to live in Portugal while continuing their independent work. It is initially granted for two years, with the possibility of renewal and eventual permanent residency.';
            case 'hasChild':
                return `Any child has the right to education in secondary school, and the parents of such a child have the right to reunite with them. The child must be between the ages of 14 and 18, studying in a general education school or enrolled in qualifying courses in secondary school (grades 10-12), exercising their right to compulsory education. To secure a place in a school, parents need to rent accommodation for a short period and obtain a registration certificate from the local municipality. The residence permit is issued to the student and is renewed annually if the education continues. Later, the parents can apply to the Immigration and Borders Service (SEF) as the parents of a minor resident. They will be able to obtain a residence permit in Portugal based on their child's studies and, in the future, legally live in the country.`;
            case 'hasWorkContract':
                return 'Visto de Trabalho (Work Contract Visa) is for individuals who have secured a job with a Portuguese employer. To qualify, applicants must provide proof of a signed work contract with a company in Portugal. This visa allows the holder to live and work in Portugal for the duration of the employment contract. It is typically issued for a period of one year, with the possibility of renewal and the option to apply for permanent residency after several years of legal residence in the country.';
            case 'hasBusiness':
                return `D2 Visa (Entrepreneur or Self-Employed Worker Visa). The D2 Visa is designed for individuals who wish to live and work in Portugal as an entrepreneur or a self-employed worker. It is ideal for those looking to start their own business or who have an independent contract with a Portuguese company. This visa is suitable for freelancers, entrepreneurs, and highly skilled professionals.`;
            case 'willingToStudy':
                return `The D4 Visa is for non-EU international students who wish to study in Portugal. It allows students to live in Portugal for the duration of their academic program at a recognized institution. To obtain the visa, applicants must provide proof of enrollment, sufficient financial resources, health insurance, accommodation in Portugal, and a clean criminal record. The visa is typically issued for the duration of the course and can be renewed as long as the student remains enrolled. After completing studies, students may transition to a work visa or apply for residency if they secure employment.`
            case 'lookForJob':
                return `The Job-Seeker Visa for Portugal, known as the D1 Visa, allows non-EU nationals to enter and stay in Portugal for up to six months to search for employment. This visa gives applicants the flexibility to actively look for a job and later convert it into a residence permit if they secure a work contract. Applicants need proof of financial means to sustain their stay, valid health insurance, and a clean criminal record. This visa is intended for those who intend to work and live in Portugal on a long-term basis.`
            case 'willingToLearnLanguage':
                return `In Portugal, it is generally not common to issue a visa specifically for Portuguese language courses. However, there are still options – you can try applying for a Student Visa (Visto de Estudante) or a Temporary Stay Visa (Visto de Curta Duração). To obtain this visa, you need proof of enrollment in a course lasting more than 90 days. Overall, this is not a very reliable option for obtaining a visa, and if possible, we would recommend considering other alternatives.`
                default:
                return '';
        }
    };

    return (
        <div className="Visas-container">
            <div className="Visa-text">
                <p>Visa Eligibility</p>
                <p className="eligibility-text">
                    Please select the items that match your situation to help us understand which type of visa suits you.
                </p>
            </div>
            <form className="checkbox-form">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="hasFamilyMember"
                        checked={selectedOptions.hasFamilyMember}
                        onChange={handleCheckboxChange}
                    />
                    I have a family member who is Portuguese or has Residency in Portugal
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="hasPassiveIncome"
                        checked={selectedOptions.hasPassiveIncome}
                        onChange={handleCheckboxChange}
                    />
                    I have passive income of around 1000 euros or more
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="isFreelancer"
                        checked={selectedOptions.isFreelancer}
                        onChange={handleCheckboxChange}
                    />
                    I am a freelancer or have a remote job
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="hasChild"
                        checked={selectedOptions.hasChild}
                        onChange={handleCheckboxChange}
                    />
                    I have a child aged 15-18 years old
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="hasWorkContract"
                        checked={selectedOptions.hasWorkContract}
                        onChange={handleCheckboxChange}
                    />
                    I have a work contract in Portugal
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="hasBusiness"
                        checked={selectedOptions.hasBusiness}
                        onChange={handleCheckboxChange}
                    />
                    I have a business or plan to open a new business in Portugal
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="willingToStudy"
                        checked={selectedOptions.willingToStudy}
                        onChange={handleCheckboxChange}
                    />
                    I want to study in Portugal
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="willingToLearnLanguage"
                        checked={selectedOptions.willingToLearnLanguage}
                        onChange={handleCheckboxChange}
                    />
                    I want to learn portuguese language in Portugal.
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="lookForJob"
                        checked={selectedOptions.lookForJob}
                        onChange={handleCheckboxChange}
                    />
                    I don't have other option, but want to come and find a job in Portugal.
                </label>
            </form>
            <div className="selected-options">
            {visibleTextBlocks.map(option => (
                    <div key={option} className="TextBlock">
                        <div className="TextBlock-title">{getOptionTitle(option)}</div>
                        <div className="TextBlock-content">
                            {getOptionText(option)} 
                        </div>
                        <a href={`/#/visas/${option}`} className="more-link">More...</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Visas;

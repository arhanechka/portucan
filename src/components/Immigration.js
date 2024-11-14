import React from 'react';
import '../css/General.css';  // Add CSS styling for the component
import '../css/Immigration.css'

function Immigration() {
    return (
        <div className="job-seeker-container">
            <div className="content-container">
                <div className="App-text" style={{top: '8vh'}}>
                    <p>Immigration</p>
                </div>
                <p >
                    You have decided to immigrate to Portugal. So, where do we start? With understanding what type of visa you can obtain to begin your new life there. Let's explore the types of visas, select the ones that may suit you, review the required documents, and find out where the Portuguese consulates are located and how they operate in Canada.
                </p>

                {/* Links Section */}
                <div className="immigration-container">
                    <ul>
                        <li ><a href="/immigration/visas" className="green-link">Visas</a></li>
                        <li ><a href="/immigration/documents" className="green-link">Documents</a></li>
                        <li ><a href="/immigration/process" className="green-link">Process</a></li>
                        <li ><a href="/immigration/addresses" className="green-link">Addresses</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Immigration;

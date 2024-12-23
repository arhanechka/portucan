import React from 'react';
import '../css/General.css';  
import '../css/Immigration.css'
import { Link } from 'react-router-dom';

function Immigration() {
    return (
        <div className="general-container">
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
                        <li ><Link to="/immigration/visas" className="green-link">Visas</Link></li>
                        <li ><Link to="/immigration/documents" className="green-link">Documents</Link></li>
                        <li ><Link to="/immigration/process" className="green-link">Process</Link></li>
                        <li ><Link to="/immigration/addresses" className="green-link">Addresses</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Immigration;

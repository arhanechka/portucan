import React from 'react';
import '../../css/Links.css';


function Addresses() {

    const consulatesData = [
        { 
            name: "Embassy of Portugal in Ottawa", 
            link: "https://otava.embaixadaportugal.mne.gov.pt/en/", 
            description: "Address: 45 O'Connor Street, Suite 1500, Ottawa, Ontario, K1P 1A4\nPhone: +1 (613) 563-2753\nWorking Hours: Monday to Friday, 9:00 AM - 12:30 PM, 1:30 PM - 5:00 PM"
        },
        { 
            name: "Consulate General of Portugal in Vancouver", 
            link: "https://vancouver.consuladoportugal.mne.gov.pt/en/", 
            description: "Address: 750 West Pender Street, Suite 404, Vancouver, BC, V6C 2T7\nPhone: +1 (604) 684-3444\nWorking Hours: Monday to Friday, 9:00 AM - 12:00 PM, 1:00 PM - 4:30 PM"
        },
        { 
            name: "Consulate General of Portugal in Montreal", 
            link: "https://montreal.consuladoportugal.mne.gov.pt/en/", 
            description: "Address: 1500, Avenue du Docteur-Penfield, Montreal, QC, H3G 1B9\nPhone: +1 (514) 866-9651\nWorking Hours: Monday to Friday, 9:00 AM - 12:30 PM, 1:30 PM - 5:00 PM"
        },
        { 
            name: "Consulate General of Portugal in Toronto", 
            link: "https://toronto.consuladoportugal.mne.gov.pt/en/", 
            description: "Address: 227 Bloor Street West, Suite 600, Toronto, Ontario, M5S 1T9\nPhone: +1 (416) 961-2112\nWorking Hours: Monday to Friday, 9:00 AM - 12:30 PM, 1:30 PM - 5:00 PM"
        },
        { 
            name: "Consulate of Portugal in Winnipeg", 
            link: "https://www.embassypages.com/portugal-consulate-winnipeg-canada", 
            description: "Address: 1906 - 167 Lombard Avenue, Winnipeg, MB, R3B 0V3\nPhone: +1 (204) 772-3374\nWorking Hours: Monday to Friday, 9:00 AM - 12:00 PM, 1:00 PM - 4:30 PM"
        }
    ];
    
  return <div className="links-container" >   <p className="App-text" style={{top: '8vh'}}>Addresses</p>
            <table className="links-table">
                <thead>
                    <tr>
                        <th>Link</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {consulatesData.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.name}
                                </a>
                            </td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
 </div>;
}

export default Addresses;
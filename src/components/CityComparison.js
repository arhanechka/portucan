import React, { useState } from 'react';
import '../css/General.css';

const CityComparison = () => {
  const [cityCanada, setCityCanada] = useState('');
  const [cityPortugal, setCityPortugal] = useState('');
  const [data, setData] = useState(null);

  const citiesCanada = [
    'Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary',
    'Edmonton', 'Winnipeg', 'Quebec', 'Halifax', 'Kitchener'
  ];

  const citiesPortugal = [
    'Lisbon', 'Porto', 'Braga', 'Coimbra', 'Funchal',
    'Aveiro', 'Setubal', 'Algarve', 'Sintra', 'Leiria'
  ];

  const handleCompare = async () => {
    if (!cityCanada || !cityPortugal) {
      alert('Please select both cities!');
      return;
    }

    try {

    const responseCanada = await fetch(`/api/${cityCanada.toLowerCase()}.json`);
  const responsePortugal = await fetch(`/api/${cityPortugal.toLowerCase()}.json`);

  const dataCanada = await responseCanada.json();
  const dataPortugal = await responsePortugal.json();
console.log(dataCanada)
console.log(dataPortugal)

setData({
  canada: dataCanada.data,
  portugal: dataPortugal.data,
});

    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch data');
    }
  };

      //   const responseCanada = await axios.get(`http://localhost:5000/:${cityCanada}`);
    //   const responsePortugal = await axios.get(`http://localhost:5000/:${cityPortugal}`);
    //   console.log(responseCanada)
    //   console.log(responsePortugal)

    //   setData({
    //     canada: responseCanada.data,
    //     portugal: responsePortugal.data,
    //   });

  const categorizeItems = (items) => {
    const categories = {
      'Real Estate': [],
      'Consumer Basket': [],
      'Salaries': [],
      'Transportation': [],
      'Dining & Entertainment': [],
      'Schools': [],
      'Communication': [],
      'Other': [],
    };

    items.forEach(item => {
        // Check for Dining & Entertainment category
    
        // Check for Transportation category
        if (item.item.includes('Ticket') || item.item.includes('Taxi') || item.item.includes('Gasoline')|| item.item.includes('Pass')) {
          categories['Transportation'].push(item);
        }
        // Check for Real Estate category
        else if (item.item.includes('Apartment') || item.item.includes('Price per Square Meter') || item.item.includes('Mortgage')) {
          categories['Real Estate'].push(item);
        }
        else if (item.item.includes('Meal') || item.item.includes('Beer') || item.item.includes('Cappuccino') || item.item.includes('Coke') || item.item.includes('Water')) {
            categories['Dining & Entertainment'].push(item);
          }

          else if (item.item.includes('Mobile') || item.item.includes('Internet') ) {
            categories['Communication'].push(item);
          }
        // Check for Consumer Basket category
        else if (item.item.includes('Rice') || item.item.includes('Eggs') || item.item.includes('Cheese') || item.item.includes('Milk') || item.item.includes('Tomato') || item.item.includes('Fruit')) {
          categories['Consumer Basket'].push(item);
        }
        else if (item.item.includes('Salary') ) {
            categories['Salaries'].push(item);
          }

          else if (item.item.toLowerCase().includes('school')) {
            categories['Schools'].push(item);
          }
        // If no category matched, put in Other
        else {
          categories['Other'].push(item);
        }
      });

    return categories;
  };

  return (
    <div className="general-container">
      <h1 className='App-text'>City cost comparison: Canada vs Portugal</h1>
      <div className="select-container">
  <label className="select-label">
    Choose a city in Canada:
  </label>
  <select
    value={cityCanada}
    onChange={(e) => setCityCanada(e.target.value)}
    className="select-dropdown"
  >
    <option value="" disabled>Select a city</option>
    {citiesCanada.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
</div>

<div className="select-container">
  <label className="select-label">
    Choose a city in Portugal:
  </label>
  <select
    value={cityPortugal}
    onChange={(e) => setCityPortugal(e.target.value)}
    className="select-dropdown"
  >
    <option value="" disabled>Select a city</option>
    {citiesPortugal.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
</div>

<button onClick={handleCompare} className="compare-button">
  Compare
</button>

      {data && (
        <div>
          {['Real Estate', 'Salaries', 'Consumer Basket', 'Schools','Transportation', 'Communication','Dining & Entertainment', 'Other'].map((category) => {
            const canadaItems = categorizeItems(data.canada.costs)[category];
            const portugalItems = categorizeItems(data.portugal.costs)[category];
            if (canadaItems.length === 0 && portugalItems.length === 0) return null;

            return (
              <section key={category}>
                <h2>{category}</h2>
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>{cityCanada}</th>
                      <th>{cityPortugal}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {canadaItems.map((item, index) => (
                      <tr key={index}>
                        <td>{item.item}</td>
                        <td>{item.cost} {data.canada.currency}</td>
                        <td>{portugalItems.find(pItem => pItem.item === item.item)?.cost} {data.portugal.currency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CityComparison;

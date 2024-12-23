import React from "react";
import "../../css/MovingGuide.css";
import '../../css/General.css';


const MovingGuide = () => {
  return (
    <div className="general-container">
      <h1 className="guide-header">How to Move Your Belongings from Canada to Portugal</h1>
      <p className="guide-intro">
        Relocating from Canada to Portugal involves careful planning, especially when it comes to moving your belongings. 
        Choosing the right shipping method, understanding costs, and preparing the necessary documents are key to a smooth transition.
      </p>

      <h2 className="section-header">Shipping Methods: What to Choose?</h2>

      <div className="shipping-method">
        <h3>1. Sea Freight: Ideal for Large Volumes</h3>
        <p>
          Sea freight is cost-effective for moving large volumes, such as furniture, appliances, or multiple boxes of personal belongings.
        </p>
        <ul>
          <li>
            <strong>Best for:</strong> Large shipments (5–20+ cubic meters), heavy or bulky items like furniture and household goods.
          </li>
          <li>
            <strong>Estimated Costs:</strong> Full Container Load (FCL): $3000–$5000 CAD, Less than Container Load (LCL): $1000–$3000 CAD.
          </li>
          <li>
            <strong>Pros:</strong> Lower cost per cubic meter, handles large and heavy items.
          </li>
          <li>
            <strong>Cons:</strong> Longer delivery times (4–8 weeks), requires careful planning and professional packing.
          </li>
        </ul>
      </div>

      <div className="shipping-method">
        <h3>2. Air Freight: Best for Smaller Shipments</h3>
        <p>
          Air freight is the fastest method for transporting personal belongings, especially when you don’t have large items to ship.
        </p>
        <ul>
          <li>
            <strong>Best for:</strong> Small shipments (up to 1–2 cubic meters or 50–100 kg), urgent delivery needs (5–10 days).
          </li>
          <li>
            <strong>Estimated Costs:</strong> $8–$12 CAD per kilogram. Example: A shipment weighing 50 kg costs around $500–$700 CAD.
          </li>
          <li>
            <strong>Pros:</strong> Quick delivery, convenient for personal items, clothing, or electronics.
          </li>
          <li>
            <strong>Cons:</strong> Expensive for larger shipments, limited capacity for bulky items.
          </li>
        </ul>
      </div>

      <div className="shipping-method">
        <h3>3. Should You Ship Furniture and Mattresses?</h3>
        <p>
          Shipping bulky items like mattresses or furniture is often not cost-effective. For example:
        </p>
        <ul>
          <li>
            A mattress and bed frame might take up 5–7 cubic meters, costing $1500–$3000 CAD to ship by sea.
          </li>
          <li>
            In Portugal, you can purchase new furniture for as little as €500–€800, making it more practical to sell your items in Canada and replace them after moving.
          </li>
        </ul>
      </div>

      <h2 className="section-header">Packing Tips</h2>
      <ul>
        <li><strong>Use Durable Boxes:</strong> Protect your items during transit.</li>
        <li><strong>Label Everything:</strong> Clearly mark each box with its contents and destination.</li>
        <li><strong>Create an Inventory:</strong> Prepare a detailed list for customs and insurance purposes.</li>
        <li><strong>Disassemble Furniture:</strong> Save space by taking apart large items.</li>
        <li><strong>Use Packing Materials:</strong> Bubble wrap, packing paper, and blankets can prevent damage.</li>
      </ul>

      <h2 className="section-header">Customs in Portugal</h2>
      <p>
        If you're moving to Portugal as a resident, you may qualify for an exemption from customs duties on personal belongings. 
        To benefit, you need to provide:
      </p>
      <ul>
        <li><strong>Proof of Residency Change:</strong> A declaration of residence issued by the Portuguese government or a document from the Canadian consulate.</li>
        <li><strong>Inventory List:</strong> An itemized list with values in Euros stating that the items are for personal use and not for sale.</li>
        <li><strong>Shipping Documents:</strong> Bill of lading for sea freight or air waybill for air freight.</li>
        <li><strong>Timeframe:</strong> Apply for customs exemption within 12 months of establishing residency in Portugal.</li>
      </ul>

      <h2 className="section-header">Cost Comparison Example</h2>
      <table className="cost-table">
        <thead>
          <tr>
            <th>Item Type</th>
            <th>Air Freight (50kg)</th>
            <th>Sea Freight (5m³)</th>
            <th>New in Portugal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Clothes & Electronics</td>
            <td>$500–$700 CAD</td>
            <td>$1500–$2000 CAD</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Mattress & Bed</td>
            <td>$1200+ CAD</td>
            <td>$1500–$3000 CAD</td>
            <td>€500–€800</td>
          </tr>
          <tr>
            <td>Small Furniture</td>
            <td>N/A</td>
            <td>$1500+ CAD</td>
            <td>€200–€500</td>
          </tr>
        </tbody>
      </table>

      <h2 className="section-header">Conclusion</h2>
      <p>
        Air Freight is best for small, valuable, or urgent shipments. Sea Freight is more economical for large volumes but requires more time. 
        For bulky furniture, it’s often cheaper to sell items in Canada and buy replacements in Portugal. 
        To ensure a smooth move, work with a trusted shipping company and prepare all necessary customs documents in advance.
      </p>
    </div>
  );
};

export default MovingGuide;

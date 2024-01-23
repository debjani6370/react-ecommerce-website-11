
import React from 'react';
import './HomeCard.css'

const HomeCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img className="card-image" src="images/earing-2.jpeg" alt="Card" />
          </div>
          <div className="card-back">
            <h2 className="card-title">Customer-Centric Approach</h2>
            <p className='card-btn'>Communicate your dedication to environmentally friendly practices.
   - Highlight efforts such as eco-friendly materials, ethical sourcing, or recycling initiatives.
   - Showcase partnerships with sustainable fashion organizations.</p>
          </div>
         
        </div>
        
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img className="card-image" src="images/heel-3.jpeg" alt="Card" />
          </div>
          <div className="card-back">
            <h2 className="card-title">Commitment to Sustainable Fashion</h2>
            <p className='card-btn'>Emphasize a commitment to excellent customer service.
   Share policies on easy returns, responsive customer support, and satisfaction guarantees.
    Feature customer testimonials or success stories to build trust.</p>

          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img className="card-image" src="images/perfume-2.jpeg" alt="Card" />
          </div>
          <div className="card-back">
            <h2 className="card-title">Fashion Education and Trends</h2>
            <p className='card-btn'>Position your brand as a fashion authority.
    Offer insights into current trends, style guides, and fashion education.
    Show that your platform is not just a place to shop but also a resource for staying stylish and informed.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

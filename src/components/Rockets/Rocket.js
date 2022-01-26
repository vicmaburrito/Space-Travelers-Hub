import React from 'react';

import './Rockets.css';

const Rockets = ({ rocket, reserveRocket, cancelReservation }) => (
  <div key={rocket.id} className="d-flex rocket-item pt-4">
    <div>
      <img alt="rocket" src={rocket.images[0]} className="rocket-img" />
    </div>
    <div className="info-section ml-3 font-w">
      <h4>{rocket.name}</h4>
      <span>{rocket.desc}</span>
      <div className="mt-4">
        <button type="submit" onClick={() => reserveRocket(rocket.id)} className="btn btn-primary">Reserve Rocket</button>
      </div>
    </div>
  </div>
);

export default Rockets;

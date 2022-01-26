import React from 'react';
import PropTypes from 'prop-types';
import './Rockets.css';

const Rocket = ({ rocket, reserveRocket, cancelReservation }) => (
  <div className="d-flex rocket-item pt-4">
    <div>
      <img alt="rocket" src={rocket.images[0]} className="rocket-img" />
    </div>
    <div className="info-section ml-3 font-w">
      <h4>{rocket.name}</h4>
      <>
        {rocket.reserved
        && <div><span className="d-flex justify-content-end">Reserved</span></div>}
        <span>{rocket.desc}</span>
      </>
      <div className="mt-4">
        {rocket.reserved ? (
          <button type="submit" onClick={() => cancelReservation(rocket.id)} className="btn btn-warning">Cancel Reservation</button>
        ) : (
          <button type="submit" onClick={() => reserveRocket(rocket.id)} className="btn btn-primary">Reserve Rocket</button>
        )}
      </div>
    </div>
  </div>
);

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
  reserveRocket: PropTypes.func.isRequired,
  cancelReservation: PropTypes.func.isRequired,
};

export default Rocket;

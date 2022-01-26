import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

function MyProfile() {
  const reservedRockets = useSelector(
    (state) => state.rocketReducer.rockets,
  ).filter((rocket) => rocket.reserved);

  return (
    <div className="d-flex justify-content-between align-items-start reserved-items">
      <div className="data-container">
        <h2>My Missions</h2>
        <ul className="data-list p-3">
          <div className="data-list-container d-flex justify-content-start align-items-center">
            <li>
              Mission 1
            </li>
            <button type="submit" className="btn btn-primary">Btn</button>
          </div>
        </ul>
      </div>
      <div className="data-container">
        <h2>My Missions</h2>
        <ul className="data-list p-3">
          {reservedRockets.map((rocket) => (
            <div className="data-list-container d-flex justify-content-start align-items-center" key={rocket.id}>
              <li>{rocket.name}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;

import React from 'react';
import './MyProfile.css';

function MyProfile() {
  return (
    // <div className="d-flex">Hi from My Profile</div>
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
        <h2>My Rockets</h2>
        <ul className="data-list p-3">
          <div className="data-list-container d-flex justify-content-start align-items-center">
            <li>
              Rockets 1
            </li>
            <button type="submit" className="btn btn btn-primary">Btn</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;

import React from 'react';
import planet from '../images/planet.png';
import './Header.css';

function Header() {
  return (
    <nav className="d-flex align-items-center">
      <img src={planet} alt="logo" />
      <h1 className="mx-3">Space Traveler&apos;s Hub</h1>
      <ul className="d-flex list-unstyled margin-left">
        <li className="px-2">Rockets</li>
        <li className="px-2">Missions</li>
        <li className="px-2">My Profile</li>
      </ul>
    </nav>
  );
}

export default Header;

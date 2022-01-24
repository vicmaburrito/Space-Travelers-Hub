import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../../images/planet.png';
import './Header.css';

function Header() {
  return (
    <nav className="d-flex align-items-center">
      <img src={planet} alt="logo" />
      <h1 className="mx-3">Space Traveler&apos;s Hub</h1>
      <div className="d-flex list-unstyled margin-left">
        <NavLink to="/" activeClassName="active" className="links-nav px-2">Rockets</NavLink>
        <NavLink to="/Missions" activeClassName="active" className="links-nav px-2">Missions</NavLink>
        <NavLink to="/MyProfile" activeClassName="active" className="links-nav px-2">My Profile</NavLink>
      </div>
    </nav>
  );
}

export default Header;

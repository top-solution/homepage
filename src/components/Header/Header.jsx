import React from 'react'
import { Link } from 'gatsby'

import logo from '../../images/ts-logo-transparent.png'

import './Header.scss';

const Header = ({ siteTitle }) => (
  <div className="header">
    <div
      className="header-content"
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="" />
        </Link>
      </h1>
      <div className="header-menu">
        <div className="header-menu-item">
          <Link to="/services">
            { 'Servizi' }
          </Link>
        </div>
        <div className="header-menu-item">
          <Link to="/platform">
            { 'La piattaforma' }
          </Link>
        </div>
        <div className="header-menu-item">
          <Link to="/web-agency">
            { 'Web Agency' }
          </Link>
        </div>
        <div className="header-menu-item">
          <Link to="/about-us">
            { 'Chi siamo' }
          </Link>
        </div>
        <div className="header-menu-item">
          <Link to="/contacts">
            { 'Contatti' }
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Header

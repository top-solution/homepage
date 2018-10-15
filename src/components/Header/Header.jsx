import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Icon from '../Icon/Icon'

import logo from '../../images/ts-logo.png'

import './Header.scss'


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileMenuOpen: false,
    }

    this.handleMobileMenuIconClick = this.handleMobileMenuIconClick.bind(this)
  }

  handleMobileMenuIconClick() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    })
  }

  render() {
    const { siteTitle } = this.props

    return (
      <div className="header">
        <div
          className="header-content"
        >
          <h1 style={ { margin: 0 } }>
            <Link
              to="/"
              style={ {
                color: 'white',
                textDecoration: 'none',
              } }
            >
              <img src={ logo } alt={ siteTitle } />
            </Link>
          </h1>
          <div
            className={ `mobile-menu-toggle ${ this.state.mobileMenuOpen ? 'open' : '' }` }
            onClick={ this.handleMobileMenuIconClick }
          >
            <Icon name="menu" />
          </div>
          <div className={ `header-menu ${ this.state.mobileMenuOpen ? 'open' : '' }` }>
            <div className="header-menu-item">
              <Link to="/services">
                { 'Servizi' }
              </Link>
            </div>
            {/* <div className="header-menu-item">
              <Link to="/platform">
                { 'La piattaforma' }
              </Link>
            </div> */}
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
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header

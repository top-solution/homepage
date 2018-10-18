import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Icon from '../Icon/Icon'

import LogoText from '../../images/top-solution/logo-text'

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
    const { siteTitle, variant } = this.props

    return (
      <div className={ `header ${ variant || '' }` }>
        <div
          className="header-content"
        >
          <Link className="logo" to="/">
            <LogoText />
          </Link>
          <div
            className={ `mobile-menu-toggle ${ this.state.mobileMenuOpen ? 'open' : '' }` }
            onClick={ this.handleMobileMenuIconClick }
          >
            <Icon name="menu" />
          </div>
          <div className={ `header-menu ${ this.state.mobileMenuOpen ? 'open' : '' }` }>
            {/* <div className="header-menu-item">
              <Link to="/services">
                { 'Servizi' }
              </Link>
            </div> */}
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
              <Link to="/contact-us">
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
  variant: PropTypes.string,
}

export default Header

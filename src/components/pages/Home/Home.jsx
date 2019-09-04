import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../Layout'
import Button from 'components/Button/Button'
import Icon from 'components/Icon/Icon'
import Footer from 'components/Footer'
import MobileFooter from 'components/MobileFooter'
import ServicesButtons from './ServicesButtons/ServicesButtons'
import Service from './Service/Service'
import HexagonChart from '../../HexagonChart/HexagonChart'


import './Home.scss'



const windowGlobal = typeof window !== 'undefined' && window || { location: { href: '' }}

class HomePage extends Component {
  constructor(props) {
    super(props)

    const urlMatch = windowGlobal.location.href.match(/\/services\/(it|consulting)\/([a-zA-Z0-9_-]*)$/) || []

    this.state = {
      topic: urlMatch[2] || null,
      leftPanelShown: urlMatch[1] === 'it',
      rightPanelShown: urlMatch[1] === 'consulting',
      windowWidth: null,
      showBackToTopFab: false
    }

    this.buttonsRefs = props.services.reduce((acc, service) => ({
      [service.id]: React.createRef(),
      ...acc
    }), {})

    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.handleHexagonClick = this.handleHexagonClick.bind(this)
    this.handleQuickLinkClick = this.handleQuickLinkClick.bind(this)
    this.handleSlidingContainerClick = this.handleSlidingContainerClick.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)

    this.leftPanelRef = React.createRef()
    this.rightPanelRef = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)

    setTimeout(() => {
      this.handleWindowResize()
    }, 10)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.windowWidth === null && this.state.windowWidth !== null) {
      const urlMatch = windowGlobal.location.href.match(/\/services\/(it|consulting)\/([a-zA-Z0-9_-]*)$/) || []

      if (this.state.windowWidth < 900 && urlMatch[2]) {
        this.buttonsRefs[urlMatch[2]].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    }

    if (prevState.topic !== this.state.topic) {
      if (this.leftPanelRef.current) {
        this.leftPanelRef.current.scrollTop = 0;
      }

      if (this.rightPanelRef.current) {
        this.rightPanelRef.current.scrollTop = 0;
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleWindowResize() {
    this.setState({
      windowWidth: windowGlobal.innerWidth,
    })
  }

  handleQuickLinkClick(id) {
    this.buttonsRefs[id].current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  handleHexagonClick(topic, side) {
    if (this.state.isMoving) {
      return
    }

    if (side === 'central') {
      windowGlobal.history.replaceState({}, window.title, '#')
      this.setState({
        leftPanelShown: false,
        rightPanelShown: false,
        isMoving: true
      })

      setTimeout(() => {
        this.setState({
          topic: null,
          isMoving: false
        })
      }, 400)

      return
    }

    if (this.state.topic === topic) {
      setTimeout(() => {
        windowGlobal.history.replaceState({}, window.title, '#')
        this.setState({
          topic: null,
          isMoving: false
        })
      }, 400)

      if (side === 'ict') {
        return this.setState({
          leftPanelShown: !this.state.leftPanelShown,
          isMoving: true
        })
      } else {
        return this.setState({
          rightPanelShown: !this.state.rightPanelShown,
          isMoving: true
        })
      }
    }


    if (side === 'ict') {
      windowGlobal.history.replaceState({}, window.title, `#/services/it/${ topic }`)
      this.setState({
        topic: topic,
        leftPanelShown: true,
        rightPanelShown: false,
        isMoving: true
      })
    } else {
      windowGlobal.history.replaceState({}, window.title, `#/services/consulting/${ topic }`)
      this.setState({
        topic: topic,
        leftPanelShown: false,
        rightPanelShown: true,
        isMoving: true
      })
    }

    setTimeout(() => {
      this.setState({
        isMoving: false
      })
    }, 400)

    if (window.ga) {
      window.ga('set', 'page', location.pathname + location.hash);
      window.ga('send', 'pageview');
    }
  }

  onVisibilityChange(isVisible) {
    if (isVisible || window.pageYOffset < 80) {
      this.setState({ showBackToTopFab: false })
    } else {
      windowGlobal.history.replaceState({}, window.title, `#`)
      this.setState({ showBackToTopFab: true })
    }
  }

  onCardVisibilityChange(isVisible, id, type) {
    if (isVisible) {
      windowGlobal.history.replaceState({}, window.title, `#/services/${ type }/${ id }`)
    } else {
      windowGlobal.history.replaceState({}, window.title, `#`)
    }
  }

  scrollToTop() {
    windowGlobal.history.replaceState({}, window.title, `#`)
    windowGlobal.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    this.setState({ showBackToTopFab: false });
  }

  handleSlidingContainerClick() {
    if (this.state.leftPanelShown || this.state.rightPanelShown) {
      this.setState({
        leftPanelShown: false,
        rightPanelShown: false,
      })

      setTimeout(() => {
        windowGlobal.history.replaceState({}, window.title, '#')
        this.setState({
          topic: null,
        })
      }, 400)
    }
  }

  render() {
    let hexagonsClassName = 'sliding-container '

    if (this.state.leftPanelShown) {
      hexagonsClassName += 'shift-left'
    } else if (this.state.rightPanelShown) {
      hexagonsClassName += 'shift-right'
    }

    const rightPanelClassName = `right-panel ${ this.state.rightPanelShown? 'shown' : '' }`
    const leftPanelClassName = `left-panel ${ this.state.leftPanelShown? 'shown' : '' }`

    let serviceElement = null

    if (this.state.topic) {
      const service = this.props.services.find(service => service.id === this.state.topic);
      serviceElement = (
        <Service service={ service } />
      )
    }

    const leftPanelContent = serviceElement
    const rightPanelContent = serviceElement

    let indexContent = null

    if (this.state.windowWidth === null) {
      indexContent = null
    } else if (this.state.windowWidth <= 900) {
      const servicesCardElements = this.props.services
        .filter(service => service.type !== 'central')
        .map(service => {
          let accent = ''

          switch (service.type) {
            case 'ict':
              accent = 'cyan'
              break;
            case 'consulting':
              accent = 'purple'
              break;
          }

          return (
            <VisibilitySensor key={ service.id } onChange={ (isVisible) => this.onCardVisibilityChange(isVisible, service.id, service.type) } scrollCheck delayedCall>
              <div className="card-wrapper" ref={ this.buttonsRefs[service.id] }>
                <Service service={ service } mobile accent={ accent } />
              </div>
            </VisibilitySensor>
          )
        })

      indexContent = (
        <div className="index-page-mobile" key="mobile">
          <VisibilitySensor onChange={ (isVisible) => this.onVisibilityChange(true && isVisible) } scrollCheck delayedCall>
            <ServicesButtons onClick={ this.handleQuickLinkClick } services={ this.props.services }/>
          </VisibilitySensor>
          <VisibilitySensor onChange={ () => this.onVisibilityChange(false) } scrollCheck delayedCall>
            <div>
              { servicesCardElements }
            </div>
          </VisibilitySensor>
          <MobileFooter />
        </div>
      )
    } else {
      indexContent = (
        <div className="index-page-desktop" key="desktop">
          <div className={ hexagonsClassName } onClick={ this.handleSlidingContainerClick }>
            <div className={ leftPanelClassName } ref={this.leftPanelRef}>
              { leftPanelContent }
            </div>
            <div className="sliding">
              <HexagonChart
                onHexagonClick={ this.handleHexagonClick }
                highlighted={ this.state.topic }
                services={ this.props.services }
              />
              <Footer />
            </div>
            <div className={ rightPanelClassName } ref={this.rightPanelRef}>
              { rightPanelContent }
            </div>
          </div>
        </div>
      )
    }

    let backToTopButtonClassName = `back-to-top ${this.state.showBackToTopFab ? '' : 'hidden'}`

    return (
      <div className="index-page">
        <Layout hideServices>
          { indexContent }
          <span className={backToTopButtonClassName}>
            <Button
              cyan
              active
              onClick={ this.scrollToTop }
            >
              <Icon name="up"/>
            </Button>
          </span>
        </Layout>
      </div>
    )
  }
}

const whithHomeGraphql = (Component) => (props) => (
  <StaticQuery
    query={ graphql`
      {
        services: allMarkdownRemark(filter: {fields: {slug: {regex: "//homepage/[a-zA-Z0-9-]*/[a-zA-Z0-9-]*/$/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              html
              frontmatter {
                title
                hexagonTitle
                icon
                type
                id
                x
                y
              }
            }
          }
        }

        details: allMarkdownRemark(filter: {fields: {slug: {regex: "//homepage/[a-zA-Z0-9-]*/details/[a-zA-Z0-9-]*/"}}}) {
          edges {
            node {
              fields {
                slug
              }
              html
              frontmatter {
                title
                icon
              }
            }
          }
        }
      }
    ` }
    render={ (data) => {
      // Transform the services array into an object having the service id as key
      const services = data.services.edges.reduce((acc, edge) => ({
          [edge.node.frontmatter.id]: {
            ...edge.node.frontmatter,
            html: edge.node.html,
            details: [],
          },
          ...acc,
        }
      ), {})

      // Group all the details into the parent service
      data.details.edges.forEach(edge => {
        const serviceId = /\/homepage\/([a-zA-Z0-9-]*)/g.exec(edge.node.fields.slug)[1];
        const service = services[serviceId];

        if (service) {
          if (!service.details) {
            service.details = []
          }

          service.details.push({
            ...edge.node.frontmatter,
            html: edge.node.html
          })
        }
      })

      // Put the services back into an array
      const servicesArray = Object.keys(services).map(key => {
        if (services.hasOwnProperty(key)) {
          return services[key];
        }
      })

      return (
        <Component { ...props } services={ servicesArray }/>
      )
    } }
  />
)

export default whithHomeGraphql(HomePage)

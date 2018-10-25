import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import Layout from '../../Layout'
import Button from 'components/Button/Button'
import Icon from 'components/Icon/Icon'
import Footer from 'components/Footer'
import MobileFooter from 'components/MobileFooter'
import ServicesButtons from './ServicesButtons/ServicesButtons'
import WebApplications from './topics/WebApplications'
import WebPlatforms from './topics/WebPlatforms'
import ICTTraining from './topics/ICTTraining'
import CompetenceAudits from './topics/CompetenceAudits'
import IndividualDevelopment from './topics/IndividualDevelopment'
import ManagementDevelopment from './topics/ManagementDevelopment'
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

    this.buttonsRefs = {
      'ict-training': React.createRef(),
      'expertise-audits': React.createRef(),
      'individual-development': React.createRef(),
      'management-development': React.createRef(),
      'web-applications': React.createRef(),
      'web-platforms': React.createRef(),
    }
    
    
    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.handleHexagonClick = this.handleHexagonClick.bind(this)
    this.handleQuickLinkClick = this.handleQuickLinkClick.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
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
    // TODO: polyfill for safari
    this.buttonsRefs[id].current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  handleHexagonClick(topic, side) {
    if (topic === null) {
      windowGlobal.history.replaceState({}, window.title, '#')
      this.setState({ 
        leftPanelShown: false,
        rightPanelShown: false,
      })


      setTimeout(() => {
        this.setState({ 
          topic: null,
        })
      }, 400)

      return
    }
    
    if (this.state.topic === topic) {
      setTimeout(() => {
        windowGlobal.history.replaceState({}, window.title, '#')
        this.setState({ 
          topic: null,
        })
      }, 400)

      if (side === 'it') {
        return this.setState({
          leftPanelShown: !this.state.leftPanelShown,
        })
      } else {
        return this.setState({
          rightPanelShown: !this.state.rightPanelShown,
        })
      }
    }

    
    if (side === 'it') {
      windowGlobal.history.replaceState({}, window.title, `#/services/it/${ topic }`)
      this.setState({ 
        topic: topic,
        leftPanelShown: true,
        rightPanelShown: false,
      })
    } else {
      windowGlobal.history.replaceState({}, window.title, `#/services/consulting/${ topic }`)
      this.setState({ 
        topic: topic,
        leftPanelShown: false,
        rightPanelShown: true,
      })
    }
  }

  onVisibilityChange(topic, type, isVisible) {
    if (!topic) {
      windowGlobal.history.replaceState({}, window.title, `#`)

      if (!isVisible) {
        this.setState({ showBackToTopFab: !isVisible })
      }
    } else {
      if (isVisible) {
        windowGlobal.history.replaceState({}, window.title, `#/services/${ type }/${ topic }`)
      }
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
  
  render() {
    let hexagonsClassName = 'sliding-container ' 

    if (this.state.leftPanelShown) {
      hexagonsClassName += 'shift-left'
    } else if (this.state.rightPanelShown) {
      hexagonsClassName += 'shift-right'
    }

    const rightPanelClassName = `right-panel ${ this.state.rightPanelShown? 'shown' : '' }`
    const leftPanelClassName = `left-panel ${ this.state.leftPanelShown? 'shown' : '' }`

    let topicElement = null

    switch (this.state.topic) {
    case 'web-platforms': topicElement = (
      <WebPlatforms />
    )  
      break      
    case 'web-applications': topicElement = (
      <WebApplications />
    )    
      break    
    case 'ict-training': topicElement = (
      <ICTTraining />
    )     
      break   
    case 'expertise-audits': topicElement = (
      <CompetenceAudits />
    )    
      break    
    case 'individual-development': topicElement = (
      <IndividualDevelopment />
    )  
      break      
    case 'management-development': topicElement = (
      <ManagementDevelopment />
    )        
      break
    default: break
    }

    const leftPanelContent = topicElement
    const rightPanelContent = topicElement

    let indexContent = null

    if (this.state.windowWidth === null) {
      indexContent = null
    } else if (this.state.windowWidth <= 900) {
      indexContent = (
        <div className="index-page-mobile" key="mobile">
          <VisibilitySensor onChange={ (isVisible) => this.onVisibilityChange(null, null, isVisible) } scrollCheck delayedCall>
            <ServicesButtons onClick={ this.handleQuickLinkClick } />
          </VisibilitySensor>
          <VisibilitySensor onChange={ (isVisible) => this.onVisibilityChange('web-platforms', 'it', isVisible) } scrollCheck delayedCall>
            <div className="card-wrapper" ref={ this.buttonsRefs['web-platforms'] }>
              <WebPlatforms mobile accent="purple" />
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={ (isVisible) => this.onVisibilityChange('web-applications', 'it', isVisible) } scrollCheck delayedCall>
            <div className="card-wrapper" ref={ this.buttonsRefs['web-applications'] }>
              <WebApplications mobile accent="purple" />
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={ (isVisible) => this.onVisibilityChange('ict-training', 'it', isVisible) } scrollCheck delayedCall>
            <div className="card-wrapper" ref={ this.buttonsRefs['ict-training'] }>
              <ICTTraining mobile accent="purple" />
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={ (isVisible) => this.onVisibilityChange('expertise-audits', 'consulting', isVisible) } scrollCheck delayedCall>
            <div className="card-wrapper" ref={ this.buttonsRefs['expertise-audits'] }>
              <CompetenceAudits mobile accent="cyan" />
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={ (isVisible) => this.onVisibilityChange('individual-development', 'consulting', isVisible) } scrollCheck delayedCall>
            <div className="card-wrapper" ref={ this.buttonsRefs['individual-development'] }>
              <IndividualDevelopment mobile accent="cyan" />
            </div>
          </VisibilitySensor>
          <VisibilitySensor onChange={ (isVisible) => this.onVisibilityChange('management-development', 'consulting', isVisible) } scrollCheck delayedCall>
            <div className="card-wrapper" ref={ this.buttonsRefs['management-development'] }>
              <ManagementDevelopment mobile accent="cyan" />
            </div>
          </VisibilitySensor>
          <MobileFooter />
        </div>
      )      
    } else {
      indexContent = (
        <div className="index-page-desktop" key="desktop">
          <div className={ hexagonsClassName }>
            <div className={ leftPanelClassName }>
              { leftPanelContent }
            </div>
            <div className="sliding">
              <HexagonChart onHexagonClick={ this.handleHexagonClick } highlighted={ this.state.topic } />
              <Footer />
            </div>
            <div className={ rightPanelClassName }>
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


export default HomePage

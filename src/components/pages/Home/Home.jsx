import React, { Component } from 'react'


import Layout from '../../Layout'


import './Home.scss'

import ServicesButtons from './ServicesButtons/ServicesButtons'
import WebApplications from './topics/WebApplications'
import WebPlatforms from './topics/WebPlatforms'
import ICTTraining from './topics/ICTTraining'
import CompetenceAudits from './topics/CompetenceAudits'
import IndividualDevelopment from './topics/IndividualDevelopment'
import ManagementDevelopment from './topics/ManagementDevelopment'
import HexagonChart from '../../HexagonChart/HexagonChart'


const windowGlobal = typeof window !== 'undefined' && window

class HomePage extends Component {
  constructor(props) {
    super(props)
  
    const urlMatch = windowGlobal.location.href.match(/\/services\/(it|consulting)\/([a-zA-Z0-9_]*)$/) || []

    this.state = {
      topic: urlMatch[2] || null,
      leftPanelShown: urlMatch[1] === 'it',
      rightPanelShown: urlMatch[1] === 'consulting',
      windowWidth: null,
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
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)

    setTimeout(() => {
      this.handleWindowResize()
    }, 10)
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
      window.history.replaceState({}, window.title, '#')
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
        window.history.replaceState({}, window.title, '#')
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
      window.history.replaceState({}, window.title, `#/services/it/${ topic }`)
      this.setState({ 
        topic: topic,
        leftPanelShown: true,
        rightPanelShown: false,
      })
    } else {
      window.history.replaceState({}, window.title, `#/services/consulting/${ topic }`)
      this.setState({ 
        topic: topic,
        leftPanelShown: false,
        rightPanelShown: true,
      })
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

    let topicElement = null

    switch (this.state.topic) {
    case 'PIATTAFORME_WEB': topicElement = (
      <WebPlatforms />
    )  
      break      
    case 'APPLICAZIONI_WEB': topicElement = (
      <WebApplications />
    )    
      break    
    case 'TRAINING_ICT': topicElement = (
      <ICTTraining />
    )     
      break   
    case 'AUDIT_COMPETENZE': topicElement = (
      <CompetenceAudits />
    )    
      break    
    case 'SVILUPPO_INDIVIDUALE': topicElement = (
      <IndividualDevelopment />
    )  
      break      
    case 'SVILUPPO_ORGANIZZATIVO': topicElement = (
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
          <ServicesButtons onClick={ this.handleQuickLinkClick } />
          <div ref={ this.buttonsRefs['web-platforms'] }>
            <WebPlatforms mobile accent="purple" />
          </div>
          <div ref={ this.buttonsRefs['web-applications'] }>
            <WebApplications mobile accent="purple" />
          </div>
          <div ref={ this.buttonsRefs['ict-training'] }>
            <ICTTraining mobile accent="purple" />
          </div>
          <div ref={ this.buttonsRefs['expertise-audits'] }>
            <CompetenceAudits mobile accent="cyan" />
          </div>
          <div ref={ this.buttonsRefs['individual-development'] }>
            <IndividualDevelopment mobile accent="cyan" />
          </div>
          <div ref={ this.buttonsRefs['management-development'] }>
            <ManagementDevelopment mobile accent="cyan" />
          </div>
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
            </div>
            <div className={ rightPanelClassName }>
              { rightPanelContent }
            </div>
          </div>
        </div>
      )
    }


    return (
      <div className="index-page">
        <Layout hideServices>
          { indexContent }
        </Layout>
      </div>
    )
  }
}


export default HomePage

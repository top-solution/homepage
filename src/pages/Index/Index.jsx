import React, { Component } from 'react'

import Layout from '../../components/layout'


import './Index.scss'

import WebApplications from './topics/WebApplications';
import WebPlatforms from './topics/WebPlatforms';
import ICTTraining from './topics/ICTTraining';
import CompetenceAudits from './topics/CompetenceAudits';
import IndividualDevelopment from './topics/IndividualDevelopment';
import ManagementDevelopment from './topics/ManagementDevelopment';
import HexagonChart from '../../components/HexagonChart/HexagonChart';

import tsLogo from '../../images/ts-logo.png'

const windowGlobal = typeof window !== 'undefined' && window
const MOBILE_BREAKPOINT = 900;

class IndexPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      topic: null,
      leftPanelShown: false,
      rightPanelShown: false,
    }
    
    this.handleHexagonClick = this.handleHexagonClick.bind(this);
  }

  handleHexagonClick(topic, side) {
    if (topic === null) {
      this.setState({ 
        leftPanelShown: false,
        rightPanelShown: false
      });


      setTimeout(() => {
        this.setState({ 
          topic: null
        });
      }, 400);

      return;
    }
    
    if (this.state.topic === topic) {
      setTimeout(() => {
        this.setState({ 
          topic: null
        });
      }, 400);

      if (side === 'left') {
        return this.setState({
          leftPanelShown: !this.state.leftPanelShown,
        })
      } else {
        return this.setState({
          rightPanelShown: !this.state.rightPanelShown,
        })
      }
    }

    if (side === 'left') {
      this.setState({ 
        topic: topic,
        leftPanelShown: true,
        rightPanelShown: false
      });
    } else {
      this.setState({ 
        topic: topic,
        leftPanelShown: false,
        rightPanelShown: true,
      });
    }
  }
  
  
  render() {
    let hexagonsClassName = 'sliding-container '; 

    if (this.state.leftPanelShown) {
      hexagonsClassName += 'shift-left'
    } else if (this.state.rightPanelShown) {
      hexagonsClassName += 'shift-right'
    }

    const rightPanelClassName = `right-panel ${this.state.rightPanelShown? 'shown' : ''}`;
    const leftPanelClassName = `left-panel ${this.state.leftPanelShown? 'shown' : ''}`;

    let topicElement = null;

    switch (this.state.topic) {
      case 'PIATTAFORME_WEB': topicElement = (
        <WebPlatforms />
      );  
        break;      
      case 'APPLICAZIONI_WEB': topicElement = (
        <WebApplications />
      );    
        break;    
      case 'TRAINING_ICT': topicElement = (
        <ICTTraining />
      );     
        break;   
      case 'AUDIT_COMPETENZE': topicElement = (
        <CompetenceAudits />
      );    
        break;    
      case 'SVILUPPO_INDIVIDUALE': topicElement = (
        <IndividualDevelopment />
      );  
        break;      
      case 'SVILUPPO_ORGANIZZATIVO': topicElement = (
        <ManagementDevelopment />
      );        
        break;
      default: break;
    }

    let leftPanelContent = topicElement;
    let rightPanelContent = topicElement;

    if (windowGlobal.innerWidth <= MOBILE_BREAKPOINT) {
      return (
        <div className="index-page">
          <Layout>
            <img className="ts-logo" src={ tsLogo } alt="Top Solution s.r.l."/>
            <WebPlatforms mobile accent="purple" />
            <WebApplications mobile accent="purple" />
            <ICTTraining mobile accent="purple" />
            <CompetenceAudits mobile accent="cyan" />
            <IndividualDevelopment mobile accent="cyan" />
            <ManagementDevelopment mobile accent="cyan" />
          </Layout>
        </div>
      )      
    }


    return (
      <div className="index-page">
        <Layout>
          <div className={ hexagonsClassName }>
            <div className={ leftPanelClassName }>
              { leftPanelContent }
            </div>
            <div className="sliding">
              <HexagonChart onHexagonClick={ this.handleHexagonClick } highlighted={ this.state.topic }/>
            </div>
            <div className={ rightPanelClassName }>
              { rightPanelContent }
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}


export default IndexPage

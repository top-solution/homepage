import React, { Component } from 'react'

import Layout from '../../components/layout'


import './Index.scss'

import ApplicazioniWeb from './topics/ApplicazioniWeb';
import Piattaforme from './topics/Piattaforme';
import TrainingICT from './topics/TrainingICT';
import Audit from './topics/Audit';
import SviluppoIndividuale from './topics/SviluppoIndividuale';
import SviluppoOrganizzativo from './topics/SviluppoOrganizzativo';
import HexagonChart from '../../components/HexagonChart/HexagonChart';


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
    if (this.state.topic === topic) {
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
        <Piattaforme />
      );  
        break;      
      case 'APPLICAZIONI_WEB': topicElement = (
        <ApplicazioniWeb />
      );    
        break;    
      case 'TRAINING_ICT': topicElement = (
        <TrainingICT />
      );     
        break;   
      case 'AUDIT_COMPETENZE': topicElement = (
        <Audit />
      );    
        break;    
      case 'SVILUPPO_INDIVIDUALE': topicElement = (
        <SviluppoIndividuale />
      );  
        break;      
      case 'SVILUPPO_ORGANIZZATIVO': topicElement = (
        <SviluppoOrganizzativo />
      );        
        break;
      default: break;
    }

    let leftPanelContent = topicElement;
    let rightPanelContent = topicElement;

    return (
      <div className="index-page">
        <Layout>
          <div className={ hexagonsClassName }>
            <div className={ leftPanelClassName }>
              { leftPanelContent }
            </div>
            <div className="sliding">
              <HexagonChart onHexagonClick={ this.handleHexagonClick } />
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

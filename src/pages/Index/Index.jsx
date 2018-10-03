import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

import ExagonsSmall from '../../images/exagons-small'
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import './Index.scss'

import ApplicazioniWeb from './topics/ApplicazioniWeb';
import Piattaforme from './topics/Piattaforme';
import TrainingICT from './topics/TrainingICT';
import Audit from './topics/Audit';
import SviluppoIndividuale from './topics/SviluppoIndividuale';
import SviluppoOrganizzativo from './topics/SviluppoOrganizzativo';


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
      return this.setState({
        topic: null,
        leftPanelShown: false,
        rightPanelShown: false,
      })
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
    let hexagonsClassName = ''; 

    if (this.state.leftPanelShown) {
      hexagonsClassName += 'shift-left'
    } else if (this.state.rightPanelShown) {
      hexagonsClassName += 'shift-right'
    }

    const rightPanelClassName = `right-panel ${this.state.rightPanelShown? 'shown' : ''}`;
    const leftPanelClassName = `left-panel ${this.state.leftPanelShown? 'shown' : ''}`;

    let topicElement = null;

    debugger
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
    }

    let leftPanelContent = null;

    if (this.state.leftPanelShown) {
      leftPanelContent = topicElement;
    }

    let rightPanelContent = null;

    if (this.state.rightPanelShown) {
      rightPanelContent = topicElement;
    }    

    return (
      <div className="index-page">
        <Layout>
          <ExagonsSmall className={hexagonsClassName} onHexagonClick={ this.handleHexagonClick }/>
          <div className={ leftPanelClassName }>
            { leftPanelContent }
          </div>
          <div className={ rightPanelClassName }>
            { rightPanelContent }
          </div>
        </Layout>
      </div>
    )
  }
}


export default IndexPage

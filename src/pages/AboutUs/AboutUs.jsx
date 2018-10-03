import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import logoText from '../../images/logo_text.png'
import i3pLogo from '../../images/logos/i3p.png'

import './AboutUs.scss'

const AboutUs = () => (
  <div className="page-about-us">
    <Layout>
      <PageWrapper>
        <div className="ts-logo">
          <img src={ logoText } alt="" />
        </div>
        <p>Nasciamo da una vittoria: vincitrice nel 2008 della IV edizione della Start Cup Torino
        Piemonte, Top Solution è stata fondata nel febbraio 2009 e dopo un periodo di tre anni
        di incubazione, nel 2012 si è laureata impresa innovativa presso I3P del Politecnico di
        Torino.</p>
        <p>Top Solution nasce dall’unione e dalla condivisione di una grande expertise nel settore
        della Consulenza Informatica e della Gestione delle Risorse Umane. Si avvale di
        professionisti e manager di azienda per tenere sempre aggiornati contenuti e utilizzare
        nuove metodologie e strumenti.</p>
        <p>Top Solution mette a disposizione il suo know-how a tutte quelle imprese che
        perseguono il vantaggio competitivo attraverso il miglioramento continuo, l’evoluzione
        e lo sviluppo dei Processi Organizzativi.
        Top Solution permette alle aziende di realizzare progetti ed attività finalizzate a
        facilitare il cambiamento e/o il consolidamento del business attraverso lo sviluppo
        delle capacità e delle competenze professionali.</p>
        <p>Top Solution ha un’esperienza internazionale e le competenze necessarie per gestire i
        progetti dei nostri clienti nel rispetto delle loro diversità culturali e linguistiche. I nostri
        servizi sono custom-made e l’approccio alle organizzazioni è graduale. Proponiamo una
        prospettiva diversa prestando attenzione alle trasformazioni delle aziende e insieme al
        cliente definiamo metodi, procedure e strategie.</p>
        <div className="logos">
          <img src={ i3pLogo } alt="Incubatore Imprese Innovative Politecnico Torino"/>
        </div>
      </PageWrapper>
    </Layout>
  </div>
)

export default AboutUs

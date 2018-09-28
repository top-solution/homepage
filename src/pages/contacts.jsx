import React from 'react'

import Layout from '../components/layout'
import Jumbotron from '../components/Jumbotron/Jumbotron';
import PageWrapper from '../components/PageWrapper/PageWrapper';

import './Contacts.scss'

const SecondPage = () => (
  <Layout>
    <div className="page-contacts">
      <Jumbotron>
        <h2>Entra in contatto con Top Solution</h2>
        <p>Scopri le opportunità per il tuo business offerte dalle nostre soluzioni</p>
      </Jumbotron>
      <PageWrapper>
        <div className="contacts-form">
          <span className="your-name"><input name="your-name" value="" size="40" className=" wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Nome" type="text"/></span>
          <br/>
          <span className="your-email"><input name="your-email" value="" size="40" className=" wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" type="email"/></span><br/>
          <span className="your-subject"><input name="your-subject" value="" size="40" className=" wpcf7-text" aria-invalid="false" placeholder="Oggetto" type="text"/></span><br/>
          <span className="your-message"><textarea name="your-message" cols="40" rows="4" className=" wpcf7-textarea" aria-invalid="false" placeholder="Messaggio"></textarea></span><br/>
          <input value="Invia" className=" wpcf7-submit" type="submit"/><span className="ajax-loader"></span>
        </div>
        <div className="contacts-info">
          <h3>Contatti diretti</h3>
          <ul>
            <li><b>Sede legale</b>: Via Sebastiano Valfrè, 16 – 10121 Torino (TO)</li>
            <li><b>Sede Operativa</b>: Corso Regina Margherita, 254 – 10144 Torino (TO)</li>
            <li><b>P.IVA/CF</b>:10031960015</li>
            <li><b>Tel</b>: 011 5833474</li>
            <li><b>Fax</b>: 011 5830174 </li>
            <li><b>E-mail</b>: info@topsolution.it</li>
          </ul>
        </div>
        <div className="contacts-socials">

        </div>
      </PageWrapper>
    </div>
  </Layout>
)

export default SecondPage

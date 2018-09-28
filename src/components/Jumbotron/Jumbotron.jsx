import React from 'react';

import './Jumbotron.scss'


const Jumbotron = ({children}) => (
  <div className="jumbotron">
    <div className="jumbotron-wrapper">
      { children }
    </div>
  </div>
)

export default Jumbotron;
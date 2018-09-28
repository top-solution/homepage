import React from 'react';

import './PageWrapper.scss'


const PageWrapper = ({children}) => (
  <div className="page-wrapper">
    <div className="page-content">
      { children }
    </div>
  </div>
)

export default PageWrapper;
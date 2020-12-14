import React from 'react'
import { Layout as HeimrLayout } from '@accodeing/gatsby-theme-heimr'

import Footer from 'components/Footer'
import Header from 'components/Header'
//TODO: import siteImage from 'images/site-image.jpg'
import 'style/index.scss'

export default ({ children, pageTitle }) => (
  <HeimrLayout
    pageTitle={pageTitle}
    //TODO: siteImageRelativePath={siteImage}
    omaComponents={['grid@0.5.0', 'grid-row@0.5.0', 'link@0.5.0']}
  >
    <oma-grid>
      <Header />

      {children}

      <Footer />
    </oma-grid>
  </HeimrLayout>
)

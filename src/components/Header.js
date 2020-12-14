import React from 'react'

import logo from 'images/logo.svg'

export default ({ data }) => {
  return (
    <oma-grid-row
      contentAlignedWithGrid
      fullWidth
      class='row row--with-theme-color'
    >
      <header className='header'>
        <div className='header__content'>
          <img
            src={logo}
            className='header__logo'
            alt='Logotyp for WDN Solutions AB'
          />
          <h2>WDN SOLUTIONS AB</h2>
        </div>
      </header>
    </oma-grid-row>
  )
}

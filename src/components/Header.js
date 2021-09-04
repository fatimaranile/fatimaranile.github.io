import React from 'react'
import frlogo from '../assets/images/frlogo.png'

const Header = props => (
  <header id="header" className="alt">
    <div className="division">
      <div className="division logoDivision">
        <img className="logo" src={frlogo} alt="" />
      </div>
      <div className="division nameTitleDivision">
        <h1>Fatima Ranile</h1>
        <p>Software Developer</p>
      </div>
    </div>
  </header>
)

export default Header

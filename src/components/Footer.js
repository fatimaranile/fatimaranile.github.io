import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
    <h2 className="labelStyle">E-mail me:</h2>
      <li>
          <a
            href="mailto:fatimaranile@gmail.com"
            className="labelStyle"
          >
            <span className="labelStyle">fatimaranile@gmail.com</span>
          </a>
      </li>
    </section>
    <section>
      <h2 className="labelStyle">Follow me:</h2>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/pattiiiepat"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pattiiiepat/"
            className="icon fa-instagram alt"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/fatimaranile"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
  </footer>
)

export default Footer

import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import patDP from '../assets/images/patdisplayphoto.png'
import gomiguIcon from '../assets/images/gomigu.png'
import flmsIcon from '../assets/images/ncrflms.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Exploring from '../components/Exploring'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Fatima Ranile" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="portfolio" className="main special">
            <ul className="features">
              <li>
                <span>
                  <img className="image projectIcon" src={flmsIcon} alt="" />
                </span>
                <h2>FastLane Mobile Shopper</h2>
                <p>
                  (Mobile Application) <br />
                  April 2018 - May 2021
                </p>
                <p>
                  FLMS application offers another level of convenience while
                  shopping in a store. It has the functionalities to scan items,
                  create a shopping list, locate stores, and mobile payments.
                  Making life easier for shoppers. <br />
                  There are two FLMS applications. The first one is written in
                  C# that uses the framework Xamarin Forms. The other
                  application uses React Native.
                </p>
                <ul className="icons applicationicons">
                  <li>
                    <a
                      href="https://apps.apple.com/ph/app/ncr-fastlane/id1505486617"
                      className="icon fa-apple alt"
                    />
                  </li>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.ncrcorporation.FLMSXMS"
                      className="icon fa-android alt"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <img className="image projectIcon" src={gomiguIcon} alt="" />
                </span>
                <h2>Gomigu </h2>
                <p>
                  (Mobile Application) <br />
                  May 2017 - Feb 2018
                </p>
                <p>
                  Gomigu is a free messaging application in which it can be used
                  through a web browser and/or mobile phone. During my
                  involvement, the mobile application was developed using React
                  Native as a framework, Redux to manage its state, and
                  Javascript.
                </p>
                <ul className="icons applicationicons">
                  <li>
                    <a
                      href="https://apps.apple.com/ph/app/gomigu/id1367927910"
                      className="icon fa-apple alt"
                    />
                  </li>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.gomigu"
                      className="icon fa-android alt"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section id="aboutMe" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Hi! I go by the name of Pat.</h2>
                </header>
                <p>
                  I write code for a living and just started doing it as a
                  hobby. 😉 <br />
                  As cliche as it may sound, but learning and exploring new
                  things excite me. Lastly, I prefer doing things in a minimal
                  way, targeting those that bring value and ensuring quality in
                  everything I do.
                </p>
              </div>
              <span className="image">
                <img src={patDP} alt="" />
              </span>
            </div>
            <div className="spotlight">
              <Skills />
              <Exploring />
            </div>
            <div className="spotlight">
              <WorkExperience />
            </div>
          </section>

          <section id="contactMe" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Email me:</h2>
                </header>
                <a href="mailto:fatimaranile@gmail.com" className="labelStyle">
                  <span className="labelStyle">fatimaranile@gmail.com</span>
                </a>
              </div>
              <div className="content">
                <header className="major">
                  <h2>Visit me:</h2>
                </header>
                <ul className="icons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/fatimaranile"
                      className="icon fa-linkedin alt"
                    >
                      <span className="label">LinkedIn</span>
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
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

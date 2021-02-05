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
                  April 2018 - Present
                </p>
                <p>
                  FLMS application offers another level of convenience while
                  shopping in a store. It has the functionalities to scan item,
                  create shopping list, locate store and mobile payment. Making
                  life easier for shoppers. <br />
                  There are two FLMS applications. The first one is written in
                  C# that uses the framework Xamarin Forms. The other
                  application uses React Native.
                </p>
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
                  through web app and/or mobile phones. During the course of my
                  involvement, the mobile application was developed using React
                  Native as a framework, Redux to manage its state and
                  Javascript.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
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
            <div className="details">
              <div className="details workexperience">
                <header className="major">
                  <h2>Work Experience</h2>
                </header>
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li">
                      <i class="fa fa-bookmark"></i>
                    </span>
                    <p>
                      Zoog Technologies, Inc. <br /> May 2017 - Feb 2018 <br />
                      Front-End Software Developer
                    </p>
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa fa-bookmark"></i>
                    </span>
                    <p>
                      NCR Corporation <br /> April 2018 - Present <br />
                      Front-End Software Developer
                    </p>
                  </li>
                </ul>
              </div>
              <div className="details skills">
                <header className="major">
                  <h2>Skills</h2>
                </header>
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li">
                      <i class="fa fa-terminal"></i>
                    </span>
                    <p>C#</p>
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa fa-terminal"></i>
                    </span>
                    <p>Javascript</p>
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa fa-terminal"></i>
                    </span>
                    <p>Xamarin Forms</p>
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa fa-terminal"></i>
                    </span>
                    <p>React Native</p>
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fa fa-terminal"></i>
                    </span>
                    <p>ReactJS</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="contactMe" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

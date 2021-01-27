import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['portfolio', 'aboutMe', 'contactMe'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="portfolio">
                    <a href="#">Portfolio</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="aboutMe">
                    <a href="#">Know Me</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="contactMe">
                    <a href="#">Contact Me</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav

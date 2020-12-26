import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['aboutMe', 'first', 'second'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="aboutMe">
                    <a href="#">About Me</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">First Section</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Second Section</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav

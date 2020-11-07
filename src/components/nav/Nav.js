import React from 'react';
import MobileNav from './MobileNav';
import {StyleNav ,StyleLogo,StyleNavList,StyleListElement} from './styleNav';
const Nav = () => {
    return (
        <StyleNav>
            <StyleLogo>
                <b>Your</b>Film
            </StyleLogo>
            <StyleNavList>
                <li><StyleListElement exact to='/'>Start</StyleListElement></li>
                <li><StyleListElement to="SearchFilm">Search Film</StyleListElement></li>
                <li><StyleListElement to="Contact">Contact</StyleListElement></li>
            </StyleNavList>
            <MobileNav/>
        </StyleNav>
     );
}
 
export default Nav;
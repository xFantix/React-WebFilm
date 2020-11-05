import React from 'react';
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
        </StyleNav>
     );
}
 
export default Nav;
import React from 'react';
import {NavLink} from 'react-router-dom';
import {StyleMainContainer,HeaderAbout,AboutDescription,ButtonNavStyle} from './styleMain';
const Main = () => {
    return ( 
        <StyleMainContainer>
            <HeaderAbout>All Films in One place</HeaderAbout>
            <AboutDescription>What was that movie where all the old actors from old action movies get together in a single film and blow up lots of stuff? Which is the one where Brad Pitt plays death? And remember that movie where Tom Hanks’s best friend is a volley ball? Wait,<br/><b>You can find it</b></AboutDescription>
            <NavLink to="/bek">
                <ButtonNavStyle>Search Film</ButtonNavStyle>
            </NavLink>
        </StyleMainContainer>
     );
}
 
export default Main;
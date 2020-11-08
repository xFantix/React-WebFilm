import React,{useState} from 'react';
import {HamburgerButton,HamburgerBox,HamburgerInner,StyleMenu,StyleListNav,StyleListElementMobile,HamburgerInnerExit,StyleLiMobile} from './styleNav';


const MobileNav = () => {

    const handleNavMobile = () =>{
        setValuePositionMenu(prevState=>!prevState);
    }

    const [valuePositionMenu, setValuePositionMenu] = useState(false);

    return ( 
        <>
        <HamburgerButton positionMenu={valuePositionMenu} onClick={handleNavMobile}>
            <HamburgerBox>
                <HamburgerInner></HamburgerInner>
            </HamburgerBox>
        </HamburgerButton>
        <StyleMenu positionMenu={valuePositionMenu}>
            <StyleListNav>
                <StyleLiMobile>
                <HamburgerButton onClick={handleNavMobile}>
                    <HamburgerBox>
                        <HamburgerInnerExit></HamburgerInnerExit>
                    </HamburgerBox>
                 </HamburgerButton>
                </StyleLiMobile>
                <StyleLiMobile>
                    <StyleListElementMobile exact to='/'>Start</StyleListElementMobile>
                </StyleLiMobile>
                <StyleLiMobile>
                    <StyleListElementMobile to="/SearchFilm">Search Film</StyleListElementMobile>
                </StyleLiMobile>
                <StyleLiMobile>
                    <StyleListElementMobile to="/Contact">Contact</StyleListElementMobile>
                </StyleLiMobile>
            </StyleListNav>
        </StyleMenu>
        </>
     );
}
 
export default MobileNav;
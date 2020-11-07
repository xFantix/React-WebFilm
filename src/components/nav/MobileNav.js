import React from 'react';
import {HamburgerButton,HamburgerBox,HamburgerInner} from './styleNav'
const MobileNav = () => {
    return ( 
        <HamburgerButton>
            <HamburgerBox>
                <HamburgerInner></HamburgerInner>
            </HamburgerBox>
        </HamburgerButton>
     );
}
 
export default MobileNav;
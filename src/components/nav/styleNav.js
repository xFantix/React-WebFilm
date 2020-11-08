import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const font = "'Poppins', sans-serif";
const light ="#FFFFFF";
export const StyleNav = styled.nav`
    width:100%;
    background-color:transparent;
    color:white;
    display:flex;
    justify-content:space-between;
    position:absolute;
    top:0;
`
export const StyleLogo = styled.h1`
    font-family:${font};
    font-weight:400;
    padding:10px;
    font-size:35px;
`
export const StyleNavList = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    @media(max-width:620px){
        display:none;
    }
`
export const StyleListElement = styled(NavLink)`
    font-family:${font};
    padding:0px 30px;
    cursor: pointer;
    color:white;
    text-decoration:none;
    font-size:20px;
    font-weight:600;
`
export const HamburgerButton = styled.button`
    padding: 10px;
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin: 0;
    transform:${ props => props.positionMenu ? 'translateX(100%)' : 'translateX(0%)'};
    transition:.3s ease-in-out;
    @media(min-width:620px){
        display:none;
    }
`

export const HamburgerBox = styled.span`
    width: 35px;
    height: 24px;
    display: inline-block;
    position: relative;
`
export const HamburgerInner = styled.span`
    width: 100%;
    height: 3px;
    background-color: ${light};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color .1s .2s ease-in-out;
    &::before{
        content: "";
        width: 100%;
        height: 3px;
        background-color: ${light};
        position: absolute;
        top:-10px;
        left: 0;
    }
    &::after{
        content: "";
        width: 100%;
        height: 3px;
        background-color: ${light};
        position: absolute;
        top:10px;
        left: 0;
    }
`
export const HamburgerInnerExit = styled(HamburgerInner)`
    background-color: transparent;
    &::before{
        transform: translateY(10px) rotate(45deg);
    }
    &::after{
        transform: translateY(-10px) rotate(-45deg);
    }
`

export const StyleMenu = styled.div`
    display:flex;
    height:100vh;
    width:300px;
    background-color:black;
    z-index:100;
    position:absolute;
    top:0%;
    right:${props=>(props.positionMenu ? "0px":"-300px")};
    transition:.3s ease-in-out;
    justify-content:center;
    text-align:center;
    align-items:center;
    opacity:.9;
    @media(min-width:620px){
        display:none;
    }
`
export const StyleListNav = styled.ul`
    display:flex;
    flex-direction:column;
    list-style:none;
`
export const StyleListElementMobile = styled(NavLink)`
    text-decoration:none;
    font-size:30px;
    font-family:${font};
    cursor: pointer;
    color:white;
`
export const StyleLiMobile = styled.li`
    padding:10px 0px;
`
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const font = "'Poppins', sans-serif";

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
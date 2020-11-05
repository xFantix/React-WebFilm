import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bgImage from './image/bg.jpg';
const font = "'Poppins', sans-serif";

export const StyleMainContainer = styled.main`
    min-height:100vh;
    width:100%;
    min-height:100vh;
    background-image:url(${bgImage});
    background-size:cover;
    background-position:top; 
    display:flex;
    flex-direction:column;
    justify-content:center;
`
export const HeaderAbout = styled.h2`
    color: white;
    opacity:.7;
    font-family:${font};
    font-size:40px;
    letter-spacing:7px;
    padding-left:30px;
    text-transform:uppercase;
    width:50%;
`
export const AboutDescription = styled.p`
    width:50%;
    color:white;
    font-family:${font};
    padding-left:30px;
    line-height:20px;
`
export const ButtonNavLink = styled(NavLink)`
display:inline-block;
padding:15px 30px;
color:#2196f3;
text-transform:uppercase;
letter-spacing:4px;
text-decoration:none;
font-size:25px;
overflow:hidden;
font-family:${font};
width:10%;
    &:hover{
        color:#255784;
        background-color:#2196f3;
    }

`
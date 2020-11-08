import styled,{keyframes} from 'styled-components';
import bgImage from './image/bg.jpg';
const font = "'Poppins', sans-serif";

export const fadeAnimationHeader = keyframes`

0%{
    transform:translateY(20%);
    opacity:0;
}
100%{
    transform:translateY(0%);    
}

`

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
    overflow:hidden;
`
export const HeaderAbout = styled.h2`
    color: white;
    font-family:${font};
    font-size:40px;
    letter-spacing:7px;
    padding-left:30px;
    text-transform:uppercase;
    width:70%;
    padding-bottom:20px;
    animation:${fadeAnimationHeader} .6s linear;
`
export const AboutDescription = styled.p`
    width:40%;
    color:white;
    opacity:.7;
    font-family:${font};
    padding-left:30px;
    line-height:20px;
    animation:${fadeAnimationHeader} .6s linear;
    @media(max-width:920px){
        width:60%;
    }
`
export const ButtonNavStyle = styled.button`
    margin-left:30px;
    margin-top:20px;
    padding:10px 15px;
    background-color:transparent;
    border:2px solid white;
    color:white;
    cursor: pointer;
    font-family:${font};
`

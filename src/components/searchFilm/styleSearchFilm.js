import styled from 'styled-components';
const font = "'Poppins', sans-serif";
export const StyleContainer = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    background-color:black;
`
export const HeaderStyle = styled.h2`
    color:white;
    text-align:center;
    font-family:${font};
    font-size:50px;
    opacity:.8;
    margin-top:50px;
    font-weight:400;
    letter-spacing:10px;
`
export const FormStyle = styled.form`
    display:flex;
    margin-top:10px;
    width:100%;
    justify-content:center;
`
export const InputStyle = styled.input`
    font-family:${font};
    height:35px;
    width:40%;
    border:none;
    outline:none;
    padding-left:10px;
`
export const ButtonStyle = styled.button`
    height:35px;
    padding:0px 35px;
    margin-left:10px;
    background-color:transparent;
    font-family:${font};
    border:2px solid white;
    color:white;
    cursor: pointer;
`
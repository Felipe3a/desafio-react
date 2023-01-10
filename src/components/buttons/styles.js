import styled from "styled-components";





export const Button = styled.button`
width: 342px;
height: 74px;

background: ${props => props.isBack ? 'transparent' : 'red'};
border-radius: 14px;
border: ${props => props.isBack ? ' 1px solid #FFFFFF' : 'none'};

img{transform:${props => props.isBack && 'rotateY(180deg)'}}

font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;
 color:#ffffff;


 cursor: pointer;

display: flex;
align-items:center;

justify-content:center;
gap:20px;
margin-top:100px;



&:hover{


    opacity: 0.8;
}

&:active{
opacity: 0.5;




}

`;



export default Button
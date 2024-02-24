import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,des,leftBtnTxt,rightBtnTxt,backgroundImg}){
    const Wrapper = styled.div`
   
    padding: 4em;
    width: 100vw;
    height:100vh;
    background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD');
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image:${props =>`url("/images/${props.bgImage}")`};
  
  display: flex;
  flex-direction:column;
  justify-content:space-between;//vertical
  align-items: center; //horizontal

  `;

  const ItemText = styled.div`
  padding-top:5vh;
  text-align:center;`

  const Buttongroup = styled.div`
  display: flex;
  margin-bottom:0px;
  @media (max-width:768px){
    flex-direction: column;
  }


  `
  const LeftButton = styled.div`
     background-color:rgba(23,26,32,0.8);
     height:40px;
     width: 256px;
     color:white;
     display: flex;
     justify-content:center;
     align-items:center ;
     border-radius:100px;
     opacity: 0.85;
     text-transform:uppercase;
     font-size: 12px;
     cursor:pointer;
     margin:8px;

  
  `
  const RightButton = styled(LeftButton)`
  background-color:white;
  opacity: 0.65;
  color:black;

  
  `
  const Downarrow = styled.img`

  height:40px;
  overflow-x:hidden;
  animation: animateDown infinite 1.5s;


  
  `
  const Buttons = styled.div`
  
  `
   
   return ( 
    
    <Wrapper bgImage = {backgroundImg}>
       <Fade bottom>
         
       
      <ItemText>
        <h1>{title}</h1>
        <p>{des}</p>
      </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>

      <Buttongroup>

        <LeftButton>{leftBtnTxt}</LeftButton>
        {rightBtnTxt && 
        <RightButton>{rightBtnTxt}</RightButton>
      

        }
      </Buttongroup>
      <Downarrow src = 'https://www.freeiconspng.com/uploads/arrow-down-icon-png-3.png'>

      </Downarrow>
      </Fade>
      </Buttons>
    
  </Wrapper>
   )
  
}

export default Section


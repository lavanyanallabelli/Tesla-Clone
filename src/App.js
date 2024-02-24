import logo from './logo.svg';
import './App.css';
import React ,{userstate} from 'react'
import styled from 'styled-components';
import Home from './components/Home';
import { useState } from 'react';
//import CloseIcon from '@mui/icons-material/Close';


function App() {
  const [burgerStatus,setBurgerStatus] = useState(false);
  const Menu = styled.div`
  display:flex;
  align-self:center;
  justify-content:space-between;
  justify-content: center;
  flex : 1;
  //padding-top:-700px;

  a{
    font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap:nowrap;
  


  }
  @media(max-width:768px) {
    display:none;
    
  }
  
  `
  
   const Container = styled.div`
   top: 0;
   left : 0;
   right: 0;
   margin-top:-730px; 
   
   font-size: 14px;
   `
  
  const A = styled.div`
  min-height: 60px;
 margin-top:-780px;
 padding-right:950px;
 margin-right:350px;
 position: fixed;
   
 
  

  `
  const RightMenu = styled.div`
  padding-left:1000px;
  margin-left:200px;
  margin-top:-20px;
  position: fixed;

  a{
   font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap:nowrap;
  }
  
  `
  const BurgerNav = styled.div`
  position: fixed;
  top:0px;
  bottom: 0;
  right:0;
  background:white;
  width:300px;
  z-index:16;
  list-style: none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  font-weight:600;
  transform: ${props=>props.show ? 'translteX(0)':'translateX(100%)'};
  transition: transform 0.2s;
  li{
    padding-top:10px;
    padding:13px 0;
   
  }
 
  
  `
  //const Customclose = styled(CloseIcon)`
  
  //`
  const Closed = styled.div`
  padding-left:190px;
  cursor: pointer;
  
  `

  
  
  return (
    <div className="App">

      <Home/>
      
      
        <A>
            <img src="/images/Tesla.svg
            " alt="" width="150" height="100"></img>
        </A>
      <Container>
      <Menu>
            <a href ="#">Model S</a> 
            <a href ="#">Model 3</a> 
            <a href ="#">Model X</a> 
            <a href ="#">Model y</a> 
            <a href ="#">Solar Roof</a> 
            <a href ="#">Solar Pannels</a>
            
            
        </Menu>

        <RightMenu>
          <a href ="#">Shop</a>
          <a href = "#">Account</a>
          
          <a href = "#" onClick={()=>setBurgerStatus(true)}>Menu</a>
         
        </RightMenu>
       
        <BurgerNav show={burgerStatus}>
          <Closed>
            <p onClick={()=>setBurgerStatus(false)}>close</p>

          </Closed>
          
          
          <li><a href = "#">Existing Inventory</a></li>
          <li><a href = "#"></a>Used Inventory</li>
          <li><a href = "#"></a>Trade-In</li>
          <li><a href = "#"></a>Test Drive</li>
          <li><a href = "#"></a>Insurance</li>
          <li><a href = "#"></a>Cybertruck</li>
          <li><a href = "#"></a>Roadster</li>
          <li><a href = "#"></a>Semi</li>
          <li><a href = "#"></a>Charging</li>
          <li><a href = "#"></a>Powerwall</li>
          <li><a href = "#"></a>Commerical Energy</li>
          <li><a href = "#"></a>Utilities</li>
          <li><a href = "#"></a>Find Us</li>
          <li><a href = "#"></a>Support </li>
          <li><a href = "#"></a>Investor Relations</li>
          <li><a href = "#"></a>United States</li>
        </BurgerNav>

        </Container>
       

</div>
  );
}

export default App;

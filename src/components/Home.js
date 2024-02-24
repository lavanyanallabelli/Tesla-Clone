import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {

    const Container=styled.div`
    height: 100vh;
    
    `
  return (
    <Container>
        <Section
        title = "Model 3"
        des = "Order Online for Touchless Delivery"
       backgroundImg="m3.jpg"
        leftBtnTxt = "Custom order"
        rightBtnTxt = "Existing inventory"/>

        <Section
        title = "Model Y"
        des = "Order Online for Touchless Delivery"
        backgroundImg = "my.jpg"
        leftBtnTxt = "Custom order"
        rightBtnTxt = "Existing inventory"
        /> 
       
        <Section
        title = "Model S"
        des = "Order Online for Touchless Delivery"
        backgroundImg = "ms.jpg"
        leftBtnTxt = "Custom order"
        rightBtnTxt = "Existing inventory"
        /> 
        <Section
        title = "Model X"
        des = "Order Online for Touchless Delivery"
        backgroundImg = "mx.jpg"
        leftBtnTxt = "Custom order"
        rightBtnTxt = "Existing inventory"
        /> 
        <Section
        title = "Solar Panels"
        des = "Lowest Cost Solar Panels in America"
        backgroundImg = "sp.jpg"
        leftBtnTxt = "Order Now"
        rightBtnTxt = "Learn More"
        />
        <Section
        title = "Solar Roof"
        des = "Produce Clean Energy From Your Roof"
        backgroundImg = "sr.webp"
        leftBtnTxt = "Order Now"
        rightBtnTxt = "Learn More"
        /> 
        <Section
        title = "Accessories"
       
        backgroundImg = "ac.avif"
        leftBtnTxt="Shop Now"
        />  


       
    </Container>
   
  )
}

export default Home

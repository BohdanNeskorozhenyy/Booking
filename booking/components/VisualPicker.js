import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import { useState, useEffect } from 'react';


export const VisualPicker = ({options}) => {
   const [activeOption, setActiveOption] = useState('');

   useEffect(()=>{
      setActiveOption(options[0].value)
   },[])

   const changeHandler = (value) => {
      setActiveOption(value)
   }

   return(
      <Container>
         { options.map(({text, icon, value}) => <Option changeHandler={changeHandler} value={value} activeOption={activeOption} text={text} icon={icon}/>)}
      </Container>
   )
}


const Option = ({text, icon, activeOption, value, changeHandler}) => {  
   const isActive = activeOption === value;
   return(
      <OptionContainer onTouchEnd={()=>changeHandler(value)} isActive={isActive}>
         <StyledImage source={icon}/>
         <StyledText>{text}</StyledText>
      </OptionContainer>
   )
}


const OptionContainer = styled.View` 
   width: 150px;
   height: 150px;
   background-color: #FFFFFF;
   border-radius: 22px;
   border: ${props => props.isActive? '2px solid rgb(248, 117, 45)' : '2px solid rgb(215, 217, 226)'};
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0px 5px 10px;
`
const Container = styled.View` 
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
`

const StyledText = styled.Text` 
    font-size: 18px;
    font-weight: 400;
    color: rgb(63, 73, 84);
`
const StyledImage = styled.Image` 
   width: 60px;
   height: 60px;
   margin-bottom: 10px;
`

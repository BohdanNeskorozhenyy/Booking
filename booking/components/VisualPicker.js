import styled from 'styled-components/native';
import { useState, useEffect } from 'react';


export const VisualPicker = ({options, onChange}) => {
   const [activeOption, setActiveOption] = useState('');

   useEffect(()=>{
      setActiveOption(options[0].value)
   },[])

   const changeHandler = (value) => {
      setActiveOption(value);
      onChange(value);
   }

   return(
      <Container>
         { options.map(({text, icon, value}) => <Option key={value} changeHandler={changeHandler} value={value} activeOption={activeOption} text={text} icon={icon}/>)}
      </Container>
   )
}


const Option = ({text, icon, activeOption, value, changeHandler}) => {  
   const isActive = activeOption === value;
   return(
      <OptionContainer onTouchEnd={()=>changeHandler(value)} isActive={isActive}>
         <StyledImage source={icon}/>
         <StyledText>{text}</StyledText>
         {isActive ?  
            <ActiveMarker style={{transform: [{ rotate: "45deg" }]}}>
               <StyledICon style={{transform: [{ rotate: "-45deg" }]}} source={require('../icons/check.png')}/>
            </ActiveMarker>
            : null
         }
      </OptionContainer>
   )
}


const OptionContainer = styled.View` 
   position: relative;
   width: 150px;
   height: 150px;
   background-color: #FFFFFF;
   border-radius: 22px;
   border: ${props => props.isActive? '2px solid rgb(248, 117, 45)' : '2px solid rgb(215, 217, 226)'};
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0px 5px 10px;
   overflow: hidden;
`
const Container = styled.View` 
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
`
const ActiveMarker = styled.View` 
   width: 80px;
   height: 80px;
   display: flex;
   align-items: center;
   justify-content:flex-end;
   background-color: rgb(248, 117, 45);
   position: absolute;
   top: -40px;
   right: -40px;
   padding: 5px;
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
const StyledICon = styled.Image` 
   width: 18px;
   height: 18px;
`
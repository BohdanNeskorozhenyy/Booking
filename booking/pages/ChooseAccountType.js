import styled from 'styled-components/native'
import { VisualPicker } from '../components/VisualPicker';
import { useState, useEffect } from 'react';


const options = [
   {
      text: 'Business',
      value: 'business',
      icon: require('../icons/businessman.png') 
   },
   {
      text: 'Customer',
      value: 'customer',
      icon: require('../icons/user.png') 
   }
]

export const ChooseAccountType = () => {
   const [accountType, setAccountType] = useState('customer');
   const [hint, setHint] = useState('You will book  positions, or servi')

   const changeHandler = (value) => {
      setAccountType(value);
   }

   useEffect(()=>{
      switch(accountType){
         case 'business':
            setHint('You will rent the desired positions, or provide services')
            break
         case 'customer':
            setHint('You will book  positions, or services')
            break
         default:
            setHint('')
            break
      }
   },[accountType])
   

   return (
      <Container>
         <TitleBox>
            <Title>Choose account type</Title>
            <Hint>{hint}</Hint>
         </TitleBox>
         <ContentBox>
           <VisualPicker onChange={changeHandler} options={options}/>
           <ButtonBox>
               <Button onTouchEnd={()=>console.log(accountType)}>
                  <ButtonText>Next →</ButtonText>
               </Button>
           </ButtonBox>
         </ContentBox>
      </Container>
   )
}

const Container = styled.View`
   flex: 1;
   width: 100%;
`
const ContentBox = styled.View`
   flex: 1;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 10%;
`
const TitleBox = styled.View`
   padding-top: 20% ;
   flex: 1;
   align-items: center;
`
const Hint = styled.Text` 
   font-size: 20px;
   font-weight: 500;
   color: #6c757d;
   text-align: center;
   margin-top: 50px;
`
const Title = styled.Text`
   font-size: 37px;
   font-weight: 600;
   text-align: center;
   color: #e76f51;
`
const Button = styled.View` 
   width: 120px;
   height: 40px;
`
const ButtonText = styled.Text` 
   font-size: 30px;
   color: rgb(248, 117, 45);
`

const ButtonBox = styled.View` 
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   width: 100%;
`